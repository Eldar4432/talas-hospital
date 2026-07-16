import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../api/api";

interface Doctor {
  id: number;
  name: string;
  position: string;
  experience: string;
  education: string;
  specialization: string;
  department: string;
  biography: string;
  image: string;
}

function DoctorDetails() {
  const { id } = useParams();

  const [doctor, setDoctor] = useState<Doctor | null>(null);

  useEffect(() => {
    api
      .get(`/doctors/${id}`)
      .then((res) => {
        setDoctor(res.data);
      })
      .catch(console.error);
  }, [id]);

  if (!doctor) {
    return (
      <div className="py-16 text-center text-gray-600">Врач не найден</div>
    );
  }

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <Link
          to="/doctors"
          className="text-blue-700 hover:underline inline-block mb-8"
        >
          ← Все врачи
        </Link>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Фото */}

          <div>
            <img
              src={
                doctor.image
                  ? `http://localhost:5000${doctor.image}`
                  : "/doctor-placeholder.jpg"
              }
              alt={doctor.name}
              className="
              w-full
              h-[450px]
              object-cover
              rounded-2xl
              shadow
              "
            />
          </div>

          {/* Информация */}

          <div>
            <h1 className="text-4xl font-bold text-blue-800">{doctor.name}</h1>

            <p className="text-xl mt-3 text-gray-700">{doctor.position}</p>

            <div className="mt-8 space-y-4">
              <div className="bg-blue-50 rounded-xl p-5">
                <h3 className="font-bold text-blue-800">⭐ Специализация</h3>

                <p className="mt-2 text-gray-700">
                  {doctor.specialization || "Не указано"}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-blue-800">🏥 Отделение</h3>

                <p className="mt-2 text-gray-700">
                  {doctor.department || "Не указано"}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-blue-800">💼 Опыт работы</h3>

                <p className="mt-2 text-gray-700">{doctor.experience}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Дополнительная информация */}

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-blue-800">🎓 Образование</h2>

            <p className="mt-4 text-gray-700 leading-7">{doctor.education}</p>
          </div>

          <div className="bg-white shadow rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-blue-800">👨‍⚕️ О враче</h2>

            <p className="mt-4 text-gray-700 leading-7">
              {doctor.biography || "Информация отсутствует"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoctorDetails;
