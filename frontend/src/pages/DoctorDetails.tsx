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
      .then((res) => setDoctor(res.data))
      .catch(console.error);
  }, [id]);

  if (!doctor) {
    return (
      <div className="py-20 text-center text-gray-500">Врач не найден</div>
    );
  }

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-5xl mx-auto px-5">
        <Link to="/doctors" className="text-sm text-blue-700 hover:underline">
          ← Вернуться к списку врачей
        </Link>

        <div
          className="
          mt-6
          bg-white
          border
          border-gray-200
          rounded-lg
          p-6
          flex
          flex-col
          md:flex-row
          gap-8
        "
        >
          {/* Фото */}

          <div className="flex justify-center md:block">
            <div
              className="
              w-56
              aspect-[3/4]
              overflow-hidden
              border
              border-gray-200
              rounded-lg
              bg-gray-100
              "
            >
              <img
                src={
                  doctor.image
                    ? `http://localhost:5000${doctor.image}`
                    : "/doctor-placeholder.jpg"
                }
                alt={doctor.name}
                className="
                w-full
                h-full
                object-cover
                object-center
                "
              />
            </div>
          </div>

          {/* Основная информация */}

          <div className="flex-1">
            <h1
              className="
              text-2xl
              font-semibold
              text-blue-900
            "
            >
              {doctor.name}
            </h1>

            <p
              className="
              mt-2
              text-gray-600
              "
            >
              {doctor.position}
            </p>

            <div
              className="
              mt-6
              grid
              sm:grid-cols-2
              gap-4
            "
            >
              <InfoBlock title="Специализация" value={doctor.specialization} />

              <InfoBlock title="Отделение" value={doctor.department} />

              <InfoBlock title="Опыт работы" value={doctor.experience} />

              <InfoBlock title="Образование" value={doctor.education} />
            </div>
          </div>
        </div>

        {/* Биография */}

        <div
          className="
          mt-6
          bg-white
          border
          border-gray-200
          rounded-lg
          p-6
        "
        >
          <h2
            className="
            text-lg
            font-semibold
            text-blue-900
          "
          >
            О враче
          </h2>

          <p
            className="
            mt-3
            text-gray-700
            leading-7
            text-sm
          "
          >
            {doctor.biography || "Информация отсутствует"}
          </p>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ title, value }: { title: string; value?: string }) {
  return (
    <div
      className="
      bg-gray-50
      border
      border-gray-200
      rounded-md
      p-4
    "
    >
      <p
        className="
        text-xs
        uppercase
        text-gray-500
      "
      >
        {title}
      </p>

      <p
        className="
        mt-1
        text-sm
        text-gray-800
      "
      >
        {value || "Не указано"}
      </p>
    </div>
  );
}

export default DoctorDetails;
