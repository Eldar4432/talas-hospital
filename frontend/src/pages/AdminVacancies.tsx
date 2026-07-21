import { useEffect, useState } from "react";
import { api } from "../api/api";
import type { Vacancy } from "../api/vacanciesApi";

function AdminVacancies() {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);

  const loadVacancies = () => {
    api
      .get("/vacancies")
      .then((res) => {
        setVacancies(res.data);
      })
      .catch(console.error);
  };

  useEffect(() => {
    loadVacancies();
  }, []);

  const deleteVacancy = async (id: number) => {
    if (!confirm("Удалить вакансию?")) return;

    await api.delete(`/vacancies/${id}`);

    loadVacancies();
  };

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1
          className="
        text-4xl
        font-bold
        text-blue-900
        "
        >
          Управление вакансиями
        </h1>

        <div className="mt-10 space-y-5">
          {vacancies.map((vacancy) => (
            <div
              key={vacancy.id}
              className="
              bg-white
              border
              rounded-xl
              p-6
              shadow-sm
              "
            >
              <div
                className="
              flex
              justify-between
              "
              >
                <div>
                  <h2
                    className="
                  text-xl
                  font-bold
                  text-blue-800
                  "
                  >
                    {vacancy.title}
                  </h2>

                  <p className="text-gray-600">{vacancy.department}</p>
                </div>

                <button
                  onClick={() => deleteVacancy(vacancy.id)}
                  className="
                bg-red-600
                text-white
                px-4
                py-2
                rounded-lg
                "
                >
                  Удалить
                </button>
              </div>

              <p className="mt-4 text-gray-700">{vacancy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdminVacancies;
