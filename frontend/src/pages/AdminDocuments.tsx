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
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Управление документами</h1>

      <form onSubmit={addDocument} className="space-y-4 mb-10">
        <input
          className="border p-3 w-full"
          placeholder="Название документа"
          value={form.title}
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
            })
          }
        />

        <textarea
          className="border p-3 w-full"
          placeholder="Описание"
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />

        <input
          type="file"
          accept=".pdf"
          onChange={(e) =>
            setForm({
              ...form,
              file: e.target.files?.[0] || null,
            })
          }
        />

        <button className="bg-blue-700 text-white px-5 py-2 rounded">
          Добавить документ
        </button>
      </form>

      <div className="space-y-4">
        {documents.map((doc) => (
          <div key={doc.id} className="border p-5 rounded">
            <h2 className="font-bold">{doc.title}</h2>

            <p>{doc.description}</p>

            <a
              href={`http://localhost:5000${doc.file}`}
              target="_blank"
              className="text-blue-700"
            >
              Открыть документ
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDocuments;
