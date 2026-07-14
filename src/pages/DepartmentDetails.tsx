import { useParams } from "react-router-dom";
import { departments } from "../data/departments";

function DepartmentDetails() {
  const { id } = useParams();

  const department = departments.find((item) => item.id === Number(id));

  if (!department) {
    return <div className="py-16 text-center">Отделение не найдено</div>;
  }

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-800">{department.name}</h1>

        <p className="mt-6 text-lg text-gray-700">{department.description}</p>

        <div className="mt-10 bg-blue-50 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-blue-800">Услуги отделения</h2>

          <ul className="mt-4 space-y-2">
            {department.services.map((service) => (
              <li key={service}>✓ {service}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-bold">Режим работы:</h2>

          <p>{department.schedule}</p>
        </div>
      </div>
    </section>
  );
}

export default DepartmentDetails;
