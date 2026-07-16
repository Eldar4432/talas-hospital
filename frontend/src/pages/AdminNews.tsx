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
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Управление новостями</h1>

      <form onSubmit={addNews} className="space-y-4 mb-10">
        <input
          placeholder="Заголовок"
          value={form.title}
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
            })
          }
          className="border p-2 w-full"
        />

        <input
          type="date"
          value={form.date}
          onChange={(e) =>
            setForm({
              ...form,
              date: e.target.value,
            })
          }
          className="border p-2 w-full"
        />

        <textarea
          placeholder="Текст новости"
          value={form.text}
          onChange={(e) =>
            setForm({
              ...form,
              text: e.target.value,
            })
          }
          className="border p-2 w-full"
        />

        <input
          type="file"
          onChange={(e) => {
            if (!e.target.files) return;

            setForm({
              ...form,

              image: e.target.files[0],
            });
          }}
        />

        <button className="bg-blue-700 text-white px-5 py-2 rounded">
          {editingId ? "Сохранить изменения" : "Добавить новость"}
        </button>
      </form>

      <div className="grid md:grid-cols-3 gap-5">
        {news.map((item) => (
          <div key={item.id} className="border p-5 rounded">
            <h2 className="font-bold">{item.title}</h2>

            <p>{item.date}</p>

            <p>{item.text}</p>
            {item.image && (
              <img
                src={`http://localhost:5000${item.image}`}
                className="w-full h-40 object-cover mt-3"
              />
            )}

            <button
              onClick={() => deleteNews(item.id)}
              className="bg-red-600 text-white px-4 py-2 rounded mt-3"
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
              className="bg-yellow-500 text-white px-4 py-2 rounded mt-3 mr-2"
            >
              Редактировать
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
                className="bg-gray-500 text-white px-5 py-2 rounded ml-3"
              >
                Отмена
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminNews;
