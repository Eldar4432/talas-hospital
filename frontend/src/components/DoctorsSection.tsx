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
    <section className="bg-white py-10">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mb-7">
          <h2 className="text-2xl font-semibold text-blue-800">Наши врачи</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Квалифицированные специалисты Таласской областной объединённой
            больницы.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {doctors.slice(0, 4).map((doctor) => (
            <DoctorsCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
      <div className="mx-auto mt-7 max-w-5xl px-5">
        <Link
          to="/doctors"
          className="inline-flex items-center justify-center rounded-2xl bg-blue-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-900"
        >
          Все врачи →
        </Link>
      </div>
    </section>
  );
}

export default DoctorsSection;
