import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getDepartments } from "../api/departmentsApi";
import type { Department } from "../api/departmentsApi";

function DepartmentDetails() {
  const { id } = useParams();

  const [department, setDepartment] = useState<Department | null>(null);

  useEffect(() => {
    getDepartments()
      .then((data) => {
        const found = data.find((item) => item.id === Number(id));

        setDepartment(found || null);
      })
      .catch(console.error);
  }, [id]);

  if (!department) {
    return (
      <div className="py-16 text-center text-gray-600">
        Отделение не найдено
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <Link to="/departments" className="text-blue-700 hover:underline">
          ← Все отделения
        </Link>

        {/* Заголовок */}

        <div className="mt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800">
            {department.name}
          </h1>
        </div>

        {/* Описание */}

        <div className="mt-8 bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-blue-800">Об отделении</h2>

          <p className="mt-4 text-gray-700 leading-8 text-lg">
            {department.description}
          </p>
        </div>

        {/* Услуги */}

        <div className="mt-8 bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-blue-800">Услуги отделения</h2>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            {department.services.map((service, index) => (
              <div
                key={index}
                className="
                flex
                items-center
                gap-3
                bg-blue-50
                rounded-xl
                p-4
                text-gray-700
                "
              >
                <span className="text-blue-700 font-bold">✓</span>

                {service}
              </div>
            ))}
          </div>
        </div>

        {/* График */}

        <div className="mt-8 bg-blue-800 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold">Режим работы</h2>

          <p className="mt-4 text-lg">🕒 {department.schedule}</p>
        </div>
      </div>
    </section>
  );
}

export default DepartmentDetails;
