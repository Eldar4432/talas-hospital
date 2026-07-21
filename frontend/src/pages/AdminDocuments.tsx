import { useEffect, useState } from "react";
import { api } from "../api/api";

interface Document {
  id: number;
  title: string;
  description: string;
  file: string;
}

function AdminDocuments() {
  const [documents, setDocuments] = useState<Document[]>([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    file: null as File | null,
  });

  const loadDocuments = async () => {
    const res = await api.get("/documents");

    setDocuments(res.data);
  };

  useEffect(() => {
    loadDocuments();
  }, []);

  const addDocument = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();

    data.append("title", form.title);

    data.append("description", form.description);

    if (form.file) {
      data.append("file", form.file);
    }

    await api.post("/documents", data);

    setForm({
      title: "",
      description: "",
      file: null,
    });

    loadDocuments();
  };

  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-slate-900">
            Управление документами
          </h1>
          <p className="mt-2 text-sm text-slate-500 max-w-2xl">
            Добавляйте и просматривайте документы в админ-панели.
          </p>
        </div>

        <form
          onSubmit={addDocument}
          className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-5 mb-10"
        >
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Название документа
            </label>
            <input
              className="w-full border border-slate-300 rounded-2xl px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              placeholder="Название документа"
              value={form.title}
              onChange={(e) =>
                setForm({
                  ...form,
                  title: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Описание
            </label>
            <textarea
              className="w-full border border-slate-300 rounded-2xl p-4 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              placeholder="Описание"
              value={form.description}
              onChange={(e) =>
                setForm({
                  ...form,
                  description: e.target.value,
                })
              }
              rows={4}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Файл PDF
            </label>
            <input
              type="file"
              accept=".pdf"
              className="w-full text-sm text-slate-700"
              onChange={(e) =>
                setForm({
                  ...form,
                  file: e.target.files?.[0] || null,
                })
              }
            />
          </div>

          <button className="w-full bg-blue-800 hover:bg-blue-900 text-white px-5 py-3 rounded-2xl text-sm font-medium transition">
            Добавить документ
          </button>
        </form>

        <div className="space-y-4">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    {doc.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-600">
                    {doc.description}
                  </p>
                </div>

                <a
                  href={`http://localhost:5000${doc.file}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-sm font-medium text-blue-800 hover:text-blue-900"
                >
                  Открыть документ
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdminDocuments;
