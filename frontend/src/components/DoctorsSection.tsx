import { useEffect, useState } from "react";
import { getDoctors } from "../api/doctorstApi";
import type { Doctor } from "../api/doctorstApi";
import DoctorsCard from "./DoctorCard";

function DoctorsSection() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    getDoctors()
      .then((data) => setDoctors(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-800">
          Наши врачи
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {" "}
          {doctors.slice(0, 3).map((doctor) => (
            <DoctorsCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DoctorsSection;
