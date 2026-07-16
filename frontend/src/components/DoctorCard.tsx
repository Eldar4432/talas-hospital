import { Link } from "react-router-dom";

interface Doctor {
  id: number;
  name: string;
  position: string;
  experience: string;
  education: string;
  image: string;
}

function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="rounded-xl shadow p-5 bg-white border">
      <img
        src={
          doctor.image
            ? `http://localhost:5000${doctor.image}`
            : "/doctor-placeholder.jpg"
        }
        alt={doctor.name}
        className="w-full h-64 object-cover rounded-lg"
      />

      <h2 className="text-xl font-bold mt-4">{doctor.name}</h2>

      <p className="text-blue-700 mt-1">{doctor.position}</p>

      <p className="mt-2">Опыт: {doctor.experience}</p>

      <p className="text-gray-600 mt-2">{doctor.education}</p>

      <Link
        to={`/doctors/${doctor.id}`}
        className="inline-block mt-5 bg-blue-700 text-white px-5 py-2 rounded-lg"
      >
        Подробнее
      </Link>
    </div>
  );
}

export default DoctorCard;
