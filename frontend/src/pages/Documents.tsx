import { useEffect, useState } from "react";
import { getDocuments } from "../api/documentsApi";
import type { Document } from "../api/documentsApi";

function Documents() {
  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {
    getDocuments()
      .then((data) => {
        setDocuments(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-800">Документы</h1>

        <div className="mt-10 space-y-5">
          {documents.map((doc) => (
            <div key={doc.id} className="border rounded-xl p-6 shadow">
              <h2 className="text-xl font-bold">{doc.title}</h2>

              <p className="mt-2 text-gray-600">{doc.description}</p>

              <a
                href={`http://localhost:5000${doc.file}`}
                target="_blank"
                className="inline-block mt-4 bg-blue-700 text-white px-5 py-2 rounded"
              >
                Скачать документ
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Documents;
