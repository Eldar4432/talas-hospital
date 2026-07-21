import { useEffect, useState } from "react";
import { api } from "../api/api";

interface News {
  id: number;
  title: string;
  date: string;
  text: string;
  image: string;
}

function AdminNews() {
  const [news, setNews] = useState<News[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [form, setForm] = useState({
    title: "",
    date: "",
    text: "",
    image: null as File | null,
  });

  const loadNews = async () => {
    const res = await api.get("/news");

    setNews(res.data);
  };

  const deleteNews = async (id: number) => {
    await api.delete(`/news/${id}`);

    loadNews();
  };

  const updateNews = async () => {
    if (!editingId) return;

    const data = new FormData();

    data.append("title", form.title);
    data.append("date", form.date);
    data.append("text", form.text);

    if (form.image) {
      data.append("image", form.image);
    }

    await api.put(`/news/${editingId}`, data);

    setEditingId(null);

    setForm({
      title: "",
      date: "",
      text: "",
      image: null,
    });

    loadNews();
  };

  useEffect(() => {
    loadNews();
  }, []);

  const addNews = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      await updateNews();
      return;
    }

    const data = new FormData();

    data.append("title", form.title);
    data.append("date", form.date);
    data.append("text", form.text);

    if (form.image) {
      data.append("image", form.image);
    }

    await api.post("/news", data);

    setForm({
      title: "",
      date: "",
      text: "",
      image: null,
    });

    loadNews();
  };

  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-slate-900">
            Управление новостями
          </h1>
          <p className="mt-2 text-sm text-slate-500 max-w-2xl">
            Создавайте и редактируйте новости в аккуратном и минималистичном
            интерфейсе.
          </p>
        </div>

        <form
          onSubmit={addNews}
          className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-5 mb-10"
        >
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Заголовок
            </label>
            <input
              placeholder="Заголовок"
              value={form.title}
              onChange={(e) =>
                setForm({
                  ...form,
                  title: e.target.value,
                })
              }
              className="w-full border border-slate-300 rounded-2xl px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Дата
            </label>
            <input
              type="date"
              value={form.date}
              onChange={(e) =>
                setForm({
                  ...form,
                  date: e.target.value,
                })
              }
              className="w-full border border-slate-300 rounded-2xl px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Текст новости
            </label>
            <textarea
              placeholder="Текст новости"
              value={form.text}
              onChange={(e) =>
                setForm({
                  ...form,
                  text: e.target.value,
                })
              }
              className="w-full border border-slate-300 rounded-2xl p-4 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              rows={5}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Изображение
            </label>
            <input
              type="file"
              className="w-full text-sm text-slate-700"
              onChange={(e) => {
                if (!e.target.files) return;

                setForm({
                  ...form,
                  image: e.target.files[0],
                });
              }}
            />
          </div>

          <button className="w-full bg-blue-800 hover:bg-blue-900 text-white px-5 py-3 rounded-2xl text-sm font-medium transition">
            {editingId ? "Сохранить изменения" : "Добавить новость"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={() => {
                setEditingId(null);

                setForm({
                  title: "",
                  date: "",
                  text: "",
                  image: null,
                });
              }}
              className="w-full bg-slate-500 hover:bg-slate-600 text-white px-5 py-3 rounded-2xl text-sm font-medium transition"
            >
              Отмена
            </button>
          )}
        </form>

        <div className="grid gap-5 md:grid-cols-2">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm space-y-4"
            >
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm text-slate-500">{item.date}</p>
              </div>

              <p className="text-sm text-slate-600">{item.text}</p>

              {item.image && (
                <img
                  src={`http://localhost:5000${item.image}`}
                  className="w-full h-40 object-cover rounded-2xl"
                />
              )}

              <div className="flex flex-wrap gap-3 pt-3">
                <button
                  onClick={() => deleteNews(item.id)}
                  className="inline-flex items-center rounded-2xl bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                >
                  Удалить
                </button>
                <button
                  onClick={() => {
                    setEditingId(item.id);

                    setForm({
                      title: item.title,
                      date: item.date,
                      text: item.text,
                      image: null,
                    });
                  }}
                  className="inline-flex items-center rounded-2xl bg-slate-200 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-300"
                >
                  Редактировать
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdminNews;
