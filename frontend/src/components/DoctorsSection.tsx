import { useEffect, useState } from "react";
import { getDoctors } from "../api/doctorstApi";
import type { Doctor } from "../api/doctorstApi";
import DoctorsCard from "./DoctorCard";
import { Link } from "react-router-dom";

function DoctorsSection() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    getDoctors()
      .then((data) => setDoctors(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6">
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
      <div className="text-center mt-10">
        <Link
          to="/doctors"
          className="
    bg-blue-700
    text-white
    px-6
    py-3
    rounded-lg
    "
        >
          Все врачи →
        </Link>
      </div>
    </section>
  );
}

export default DoctorsSection;
