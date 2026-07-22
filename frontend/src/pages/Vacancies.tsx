import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getVacancies } from "../api/vacanciesApi";
import type { Vacancy } from "../api/vacanciesApi";

function Vacancies() {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);

  useEffect(() => {
    getVacancies().then(setVacancies).catch(console.error);
  }, []);

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h1
            className="
            text-3xl
            font-semibold
            text-slate-800
            "
          >
            Вакансии
          </h1>

          <p
            className="
            mt-2
            text-sm
            text-slate-500
            "
          >
            Открытые вакансии Таласской областной объединённой больницы
          </p>
        </div>

        {vacancies.length === 0 && (
          <div
            className="
            border
            rounded-lg
            p-6
            text-center
            text-sm
            text-slate-500
            "
          >
            В настоящее время открытых вакансий нет.
          </div>
        )}

        <div
          className="
          grid
          md:grid-cols-2
          gap-5
          "
        >
          {vacancies.map((vacancy) => (
            <div
              key={vacancy.id}
              className="
              bg-white
              border
              border-slate-200
              rounded-lg
              p-5
              hover:shadow-md
              transition
              "
            >
              <div
                className="
                flex
                justify-between
                gap-3
                "
              >
                <div>
                  <h2
                    className="
                    text-lg
                    font-semibold
                    text-slate-800
                    "
                  >
                    {vacancy.title}
                  </h2>

                  <p
                    className="
                    mt-1
                    text-sm
                    text-blue-700
                    "
                  >
                    {vacancy.department}
                  </p>
                </div>

                <span
                  className="
                  h-fit
                  text-xs
                  bg-green-50
                  text-green-700
                  px-3
                  py-1
                  rounded-full
                  "
                >
                  Открыта
                </span>
              </div>

              <div
                className="
                mt-4
                grid
                grid-cols-2
                gap-3
                text-sm
                "
              >
                <div>
                  <p className="text-slate-400">Занятость</p>

                  <p className="text-slate-700">{vacancy.employment_type}</p>
                </div>

                <div>
                  <p className="text-slate-400">Опыт</p>

                  <p className="text-slate-700">{vacancy.experience}</p>
                </div>
              </div>

              {vacancy.education && (
                <div className="mt-4">
                  <p className="text-xs text-slate-400">Образование</p>

                  <p
                    className="
                    text-sm
                    text-slate-700
                    line-clamp-2
                  "
                  >
                    {vacancy.education}
                  </p>
                </div>
              )}

              <Link
                to={`/vacancies/${vacancy.id}`}
                className="
                inline-flex
                mt-5
                text-sm
                text-blue-700
                font-medium
                hover:underline
                "
              >
                Подробнее →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Vacancies;
