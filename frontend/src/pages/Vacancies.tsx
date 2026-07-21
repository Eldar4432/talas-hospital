import { useEffect, useState } from "react";
import { getVacancies } from "../api/vacanciesApi";
import type { Vacancy } from "../api/vacanciesApi";

function Vacancies() {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);

  useEffect(() => {
    getVacancies().then(setVacancies).catch(console.error);
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h1
            className="
          text-4xl
          font-bold
          text-blue-900
          "
          >
            Вакансии
          </h1>

          <p
            className="
          mt-4
          text-gray-600
          max-w-2xl
          "
          >
            Таласская областная объединённая больница приглашает специалистов
            для работы в медицинской сфере.
          </p>
        </div>

        <div
          className="
        space-y-6
        "
        >
          {vacancies.length === 0 && (
            <div
              className="
            border
            rounded-xl
            p-8
            text-center
            text-gray-500
            "
            >
              В настоящее время открытых вакансий нет.
            </div>
          )}

          {vacancies.map((vacancy) => (
            <div
              key={vacancy.id}
              className="
              bg-white
              border
              rounded-xl
              p-6
              shadow-sm
              hover:shadow-md
              transition
              "
            >
              <div
                className="
              flex
              justify-between
              items-start
              gap-4
              flex-wrap
              "
              >
                <div>
                  <h2
                    className="
                  text-2xl
                  font-bold
                  text-blue-800
                  "
                  >
                    {vacancy.title}
                  </h2>

                  <p
                    className="
                  mt-2
                  text-gray-600
                  "
                  >
                    {vacancy.department}
                  </p>
                </div>

                <span
                  className="
                  bg-green-100
                  text-green-700
                  px-4
                  py-1
                  rounded-full
                  text-sm
                  "
                >
                  Открыта
                </span>
              </div>

              <div
                className="
              grid
              md:grid-cols-3
              gap-4
              mt-6
              text-sm
              "
              >
                <div>
                  <b>Тип занятости:</b>
                  <p>{vacancy.employment_type}</p>
                </div>

                <div>
                  <b>Опыт:</b>
                  <p>{vacancy.experience}</p>
                </div>

                <div>
                  <b>Образование:</b>
                  <p>{vacancy.education}</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-bold text-blue-900">Требования</h3>

                <p
                  className="
                mt-2
                text-gray-700
                whitespace-pre-line
                "
                >
                  {vacancy.requirements}
                </p>
              </div>

              <div className="mt-6">
                <h3 className="font-bold text-blue-900">Условия</h3>

                <p
                  className="
                mt-2
                text-gray-700
                whitespace-pre-line
                "
                >
                  {vacancy.conditions}
                </p>
              </div>

              {vacancy.apply_url && (
                <a
                  href={vacancy.apply_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  inline-block
                  mt-6
                  bg-blue-800
                  text-white
                  px-6
                  py-3
                  rounded-lg
                  hover:bg-blue-900
                  transition
                  "
                >
                  Перейти к подаче заявки
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Vacancies;
