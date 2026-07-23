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
      border-blue-100
      rounded-2xl
      overflow-hidden
      shadow-sm
      transition
      hover:border-blue-200
      hover:shadow-md
      "
    >
      {/* Фото */}

      <div
        className="
        aspect-[3/4]
        w-full
        bg-blue-50
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
          object-center
          "
        />
      </div>

      {/* Информация */}

      <div className="p-4">
        <h2
          className="
          text-base
          font-semibold
          text-blue-800
          "
        >
          {doctor.name}
        </h2>

        <p
          className="
          mt-1
          text-sm
          text-slate-600
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
          text-blue-800
          hover:text-blue-900
          "
        >
          Подробнее →
        </Link>
      </div>
    </div>
  );
}

export default DoctorCard;
