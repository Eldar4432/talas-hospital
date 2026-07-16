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
    <div className="bg-white rounded-xl shadow p-6 border">
      <h3 className="text-xl font-bold text-blue-700">{department.name}</h3>
      <p className="mt-3 text-gray-600">{department.description}</p>
      <div className="mt-4">
        <h4 className="font-semibold">Услуги:</h4>

        <ul className="mt-2 text-gray-600">
          {department.services.map((service, index) => (
            <li key={index}>• {service}</li>
          ))}
        </ul>
      </div>
      <p className="mt-4">
        <span className="font-semibold">График:</span> {department.schedule}
      </p>
      <Link
        to={`/departments/${department.id}`}
        className="mt-5 inline-block text-blue-700 font-semibold"
      >
        Подробнее →
      </Link>{" "}
    </div>
  );
}

export default DepartmentCard;
