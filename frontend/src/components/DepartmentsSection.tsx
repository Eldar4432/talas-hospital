import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DepartmentCard from "./DepartmentCard";
import { getDepartments } from "../api/departmentsApi";
import type { Department } from "../api/departmentsApi";

function DepartmentsSection() {
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    getDepartments().then(setDepartments).catch(console.error);
  }, []);

  return (
    <section className="bg-blue-50/60 py-10">
      <div className="mx-auto max-w-5xl px-5">
        {/* Заголовок */}

        <div className="mb-7">
          <h2 className="text-2xl font-semibold text-blue-800">
            Наши отделения
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            В структуру больницы входят специализированные отделения,
            обеспечивающие диагностику, лечение и медицинское сопровождение
            пациентов.
          </p>
        </div>

        {/* Карточки */}

        <div
          className="
          grid
          gap-4
          sm:grid-cols-2
          xl:grid-cols-3
          "
        >
          {departments.slice(0, 3).map((department) => (
            <DepartmentCard key={department.id} department={department} />
          ))}
        </div>

        {/* Кнопка */}

        {departments.length > 3 && (
          <div className="mt-7">
            <Link
              to="/departments"
              className="
              inline-flex
              items-center
              rounded-2xl
              bg-blue-800
              px-5
              py-3
              text-sm
              font-medium
              text-white
              transition
              hover:bg-blue-900
              "
            >
              Все отделения
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default DepartmentsSection;
