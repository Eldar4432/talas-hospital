import { Link } from "react-router-dom";

type Department = {
  id: number;
  name: string;
  description: string;
  services: string[];
  schedule: string;
};

function DepartmentCard({ department }: { department: Department }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition hover:border-blue-200 hover:shadow-md">
      {/* Название */}

      <div className="p-5">
        <h3 className="text-lg font-semibold text-blue-800">
          {department.name}
        </h3>

        {/* Описание */}

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
          {department.description}
        </p>

        {/* Информация */}

        <div className="mt-5 space-y-3 text-sm text-slate-600">
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-blue-500">
              Медицинские услуги
            </p>
            <p className="mt-1">{department.services.length} направлений</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-blue-500">
              Режим работы
            </p>
            <p className="mt-1">{department.schedule}</p>
          </div>
        </div>

        {/* Кнопка */}

        <Link
          to={`/departments/${department.id}`}
          className="mt-5 inline-flex items-center text-sm font-medium text-blue-800 transition hover:text-blue-900"
        >
          Подробнее
          <span className="ml-2">→</span>
        </Link>
      </div>
    </div>
  );
}

export default DepartmentCard;
