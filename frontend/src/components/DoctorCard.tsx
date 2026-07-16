interface Doctor {
  id: number;
  name: string;
  position: string;
  experience: string;
  education: string;
  image: string;
}

import { Link } from "react-router-dom";

function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      shadow-md
      overflow-hidden
      border
      hover:shadow-xl
      transition
      "
    >
      <div className="h-72 bg-gray-100 flex items-center justify-center">
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
          "
        />
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold text-blue-800">{doctor.name}</h2>

        <p className="mt-2 text-blue-600 font-medium">{doctor.position}</p>

        <div className="mt-4 space-y-2 text-gray-600">
          <p>
            <span className="font-semibold">Опыт:</span> {doctor.experience}
          </p>

          <p>
            <span className="font-semibold">Образование:</span>{" "}
            {doctor.education}
          </p>
        </div>

        <Link
          to={`/doctors/${doctor.id}`}
          className="
          inline-block
          mt-5
          text-blue-700
          font-semibold
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
