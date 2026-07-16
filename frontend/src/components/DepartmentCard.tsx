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
    <div
      className="
      bg-white
      border
      border-gray-200
      rounded-lg
      p-6
      hover:border-blue-300
      transition
      "
    >
      {/* Название */}

      <h3
        className="
        text-xl
        font-semibold
        text-blue-800
        "
      >
        {department.name}
      </h3>

      {/* Описание */}

      <p
        className="
        mt-4
        text-gray-600
        leading-relaxed
        line-clamp-3
        "
      >
        {department.description}
      </p>

      {/* Информация */}

      <div className="mt-6 space-y-3 text-sm text-gray-700">
        <div>
          <span className="font-semibold text-gray-800">
            Медицинские услуги:
          </span>

          <p className="mt-1">{department.services.length} направлений</p>
        </div>

        <div>
          <span className="font-semibold text-gray-800">Режим работы:</span>

          <p className="mt-1">{department.schedule}</p>
        </div>
      </div>

      {/* Кнопка */}

      <Link
        to={`/departments/${department.id}`}
        className="
        mt-6
        inline-flex
        items-center
        text-blue-700
        font-medium
        hover:text-blue-900
        transition
        "
      >
        Подробнее
        <span className="ml-2">→</span>
      </Link>
    </div>
  );
}

export default DepartmentCard;
