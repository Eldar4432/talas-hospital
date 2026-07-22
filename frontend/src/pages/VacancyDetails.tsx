import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getVacancies } from "../api/vacanciesApi";
import type { Vacancy } from "../api/vacanciesApi";

function VacancyDetails() {
  const { id } = useParams();

  const [vacancy, setVacancy] = useState<Vacancy | null>(null);

  useEffect(() => {
    getVacancies()
      .then((data) => {
        const found = data.find((item) => item.id === Number(id));

        setVacancy(found || null);
      })
      .catch(console.error);
  }, [id]);

  if (!vacancy) {
    return (
      <div
        className="
      py-16
      text-center
      text-slate-500
      "
      >
        Вакансия не найдена
      </div>
    );
  }

  return (
    <section className="py-12">
      <div
        className="
      max-w-4xl
      mx-auto
      px-6
      "
      >
        <Link
          to="/vacancies"
          className="
          text-sm
          text-blue-700
          hover:underline
          "
        >
          ← Назад к вакансиям
        </Link>

        <div
          className="
          mt-6
          bg-white
          border
          rounded-xl
          p-6
          "
        >
          <div
            className="
            flex
            justify-between
            gap-4
            "
          >
            <div>
              <h1
                className="
                text-2xl
                font-semibold
                text-slate-800
                "
              >
                {vacancy.title}
              </h1>

              <p
                className="
                mt-2
                text-blue-700
                "
              >
                {vacancy.department}
              </p>
            </div>

            <span
              className="
              h-fit
              bg-green-50
              text-green-700
              text-xs
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
            mt-8
            grid
            md:grid-cols-2
            gap-5
            text-sm
            "
          >
            <Info title="Тип занятости" value={vacancy.employment_type} />

            <Info title="Опыт работы" value={vacancy.experience} />

            <Info title="Образование" value={vacancy.education} />

            <Info title="Заработная плата" value={vacancy.salary} />
          </div>

          <Block title="Описание вакансии" text={vacancy.description} />

          <Block title="Требования" text={vacancy.requirements} />

          <Block title="Условия работы" text={vacancy.conditions} />

          {vacancy.apply_url && (
            <a
              href={vacancy.apply_url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                mt-6
                bg-blue-700
                text-white
                px-5
                py-2.5
                rounded-md
                text-sm
                hover:bg-blue-800
                "
            >
              Подать заявку
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

function Info({ title, value }: { title: string; value: string }) {
  return (
    <div>
      <p
        className="
text-xs
text-slate-400
"
      >
        {title}
      </p>

      <p
        className="
mt-1
text-slate-700
"
      >
        {value || "Не указано"}
      </p>
    </div>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  if (!text) return null;

  return (
    <div className="mt-8">
      <h2
        className="
text-base
font-semibold
text-slate-800
"
      >
        {title}
      </h2>

      <p
        className="
mt-2
text-sm
text-slate-600
whitespace-pre-line
leading-6
"
      >
        {text}
      </p>
    </div>
  );
}

export default VacancyDetails;
