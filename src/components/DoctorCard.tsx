import { Link } from "react-router-dom";

type Doctor = {
  id: number;
  name: string;
  position: string;
  experience: string;
  education: string;
  image: string;
};

function DoctorsCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 text-center">
      <div className="w-48 h-48 mx-auto bg-gray-200 rounded-full overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="mt-5 text-xl font-bold">{doctor.name}</h3>

      <p className="text-blue-700 mt-2">{doctor.position}</p>

      <p className="text-gray-600 mt-2">Стаж: {doctor.experience}</p>

      <p className="text-gray-600 mt-2">Образование: {doctor.education}</p>

      <Link
        to={`/doctors/${doctor.id}`}
        className="mt-5 inline-block bg-blue-700 text-white px-5 py-2 rounded-lg"
      >
        Подробнее
      </Link>
    </div>
  );
}

export default DoctorsCard;
