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
    <section className="py-12 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-900">Наши врачи</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Профессиональные специалисты с проверенным опытом лечения и лечением
            в государственных стандартах качества.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-6xl gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {doctors.slice(0, 4).map((doctor) => (
            <DoctorsCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
      <div className="text-center mt-9">
        <Link
          to="/doctors"
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-slate-800"
        >
          Все врачи →
        </Link>
      </div>
    </section>
  );
}

export default DoctorsSection;
