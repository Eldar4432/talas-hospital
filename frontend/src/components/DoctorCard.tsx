import { Link } from "react-router-dom";

interface Doctor {
  id: number;
  name: string;
  position: string;
  experience: string;
  education: string;
  specialization?: string;
  department?: string;
  biography?: string;
  image: string;
}

interface Props {
  doctor: Doctor;
}

function DoctorCard({ doctor }: Props) {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      shadow
      overflow-hidden
      hover:shadow-xl
      transition
      "
    >
      {/* Фото */}

      <img
        src={
          doctor.image
            ? `http://localhost:5000${doctor.image}`
            : "/doctor-placeholder.jpg"
        }
        alt={doctor.name}
        className="
        w-full
        h-72
        object-cover
        "
      />

      {/* Контент */}

      <div className="p-6">
        <h2 className="text-xl font-bold text-blue-800">{doctor.name}</h2>

        <p className="mt-2 text-gray-700">{doctor.position}</p>

        {doctor.specialization && (
          <p className="mt-3 text-sm text-gray-600">
            ⭐ {doctor.specialization}
          </p>
        )}

        {doctor.department && (
          <p className="mt-2 text-sm text-gray-600">🏥 {doctor.department}</p>
        )}

        <Link
          to={`/doctors/${doctor.id}`}
          className="
          inline-block
          mt-6
          bg-blue-700
          text-white
          px-5
          py-2
          rounded-lg
          hover:bg-blue-800
          transition
          "
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
}

export default DoctorCard;
