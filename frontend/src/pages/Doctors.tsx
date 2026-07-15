import { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";
import { api } from "../api/api";

interface Doctor {
  id: number;
  name: string;
  position: string;
  experience: string;
  education: string;
  image: string;
}

function Doctors() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    api
      .get("/doctors")
      .then((res) => {
        setDoctors(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-800 text-center">
          Наши врачи
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Doctors;
