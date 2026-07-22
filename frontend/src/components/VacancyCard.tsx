import { Link } from "react-router-dom";

interface Vacancy {
  id: number;
  title: string;
  department: string;
  employment_type: string;
  experience: string;
  salary: string;
  description: string;
  apply_url: string;
}

function VacancyCard({ vacancy }: { vacancy: Vacancy }) {
  return (
    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-xl
        p-5
        hover:shadow-md
        transition
      "
    >
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
          text-sm
          text-blue-700
          mt-1
        "
      >
        {vacancy.department}
      </p>

      <div
        className="
          flex
          flex-wrap
          gap-3
          mt-4
          text-sm
          text-slate-600
        "
      >
        <span>{vacancy.employment_type}</span>

        <span>Опыт: {vacancy.experience}</span>

        {vacancy.salary && <span>{vacancy.salary}</span>}
      </div>

      <p
        className="
          mt-4
          text-sm
          text-slate-600
          line-clamp-3
        "
      >
        {vacancy.description}
      </p>

      <div
        className="
          mt-5
          flex
          justify-between
          items-center
        "
      >
        <Link
          to={`/vacancies/${vacancy.id}`}
          className="
            text-sm
            font-medium
            text-blue-700
            hover:underline
          "
        >
          Подробнее →
        </Link>
      </div>
    </div>
  );
}

export default VacancyCard;
