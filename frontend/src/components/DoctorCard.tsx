import { Link } from "react-router-dom";

interface Doctor {
  id: number;
  name: string;
  position: string;
  experience: string;
  education: string;
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
      border
      border-slate-200
      rounded-xl
      overflow-hidden
      hover:shadow-md
      transition
      "
    >
      {/* Фото */}

      <div
        className="
        h-52
        bg-slate-100
        overflow-hidden
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
          object-top
          "
        />
      </div>

      {/* Информация */}

      <div className="p-4">
        <h2
          className="
          text-base
          font-semibold
          text-slate-800
          "
        >
          {doctor.name}
        </h2>

        <p
          className="
          mt-1
          text-sm
          text-blue-700
          "
        >
          {doctor.position}
        </p>

        <div
          className="
          mt-3
          text-sm
          text-slate-600
          "
        >
          <p>
            <span className="text-slate-400">Опыт:</span> {doctor.experience}
          </p>
        </div>

        <Link
          to={`/doctors/${doctor.id}`}
          className="
          inline-flex
          mt-4
          text-sm
          font-medium
          text-blue-700
          hover:underline
          "
        >
          Подробнее →
        </Link>
      </div>
    </div>
  );
}

export default DoctorCard;
