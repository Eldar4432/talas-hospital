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
  const [search, setSearch] = useState("");

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
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-800">Наши врачи</h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Врачи Таласской областной объединённой больницы, оказывающие
            квалифицированную медицинскую помощь
          </p>
        </div>
        <input
          className="
              mt-8
              border
              p-3
              rounded-lg
              w-full
              max-w-xl
              mx-auto
              block
              "
          placeholder="Поиск врача..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {" "}
          {doctors
            .filter((doctor) =>
              doctor.name.toLowerCase().includes(search.toLowerCase()),
            )
            .map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Doctors;
