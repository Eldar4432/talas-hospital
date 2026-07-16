import { useEffect, useState } from "react";
import DepartmentCard from "./DepartmentCard";
import { getDepartments } from "../api/departmentsApi";
import type { Department } from "../api/departmentsApi";

function DepartmentsSection() {
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    getDepartments().then(setDepartments).catch(console.error);
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-800">
          Наши отделения
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {departments.slice(0, 4).map((department) => (
            <DepartmentCard key={department.id} department={department} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DepartmentsSection;
