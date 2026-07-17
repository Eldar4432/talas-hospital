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
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Заголовок */}

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
            Наши отделения
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            В структуру больницы входят специализированные отделения,
            обеспечивающие диагностику, лечение и медицинское сопровождение
            пациентов.
          </p>
        </div>

        {/* Карточки */}

        <div
          className="
          grid
          md:grid-cols-3
          gap-8
          mt-10
          "
        >
          {departments.slice(0, 3).map((department) => (
            <DepartmentCard key={department.id} department={department} />
          ))}
        </div>

        {/* Кнопка */}

        {departments.length > 3 && (
          <div className="text-center mt-10">
            <Link
              to="/departments"
              className="
              inline-block
              border
              border-blue-700
              text-blue-700
              px-6
              py-3
              rounded-lg
              hover:bg-blue-700
              hover:text-white
              transition
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
