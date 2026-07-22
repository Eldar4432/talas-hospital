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
      rounded-2xl
      overflow-hidden
      shadow-sm
      transition
      hover:shadow-md
      "
    >
      {/* Фото */}

      <div
        className="
        aspect-[4/5]
        w-full
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
          object-center
          "
        />
      </div>

      {/* Информация */}

      <div className="p-3">
        <h2
          className="
          text-sm
          font-semibold
          text-slate-800
          "
        >
          {doctor.name}
        </h2>

        <p
          className="
          mt-1
          text-xs
          text-blue-700
          "
        >
          {doctor.position}
        </p>

        <div
          className="
          mt-2
          text-xs
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
          mt-3
          text-xs
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
