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
      .then((res) => setDoctors(res.data))
      .catch(console.error);
  }, []);

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="py-12">
      <div
        className="
max-w-6xl
mx-auto
px-6
"
      >
        <div className="mb-8">
          <h1
            className="
text-3xl
font-semibold
text-slate-800
"
          >
            Наши врачи
          </h1>

          <p
            className="
mt-2
text-sm
text-slate-500
"
          >
            Специалисты Таласской областной объединённой больницы
          </p>
        </div>

        <div className="mb-6">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Поиск врача..."
            className="
w-full
md:w-80
border
rounded-md
px-3
py-2
text-sm
outline-none
focus:border-blue-500
"
          />
        </div>

        <div
          className="
grid
sm:grid-cols-2
lg:grid-cols-3
gap-4
"
        >
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Doctors;
