import DepartmentCard from "../components/DepartmentCard";
import { departments } from "../data/departments";

function Departments() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-800 text-center">
          Наши отделения
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {departments.map((department) => (
            <DepartmentCard key={department.id} department={department} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Departments;
