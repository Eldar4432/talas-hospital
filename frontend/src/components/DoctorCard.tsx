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
    <div className="rounded-xl shadow p-5">
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

      <p className="text-blue-700">{doctor.position}</p>

      <p className="mt-2">Опыт: {doctor.experience}</p>

      <p className="text-gray-600 mt-2">{doctor.education}</p>
    </div>
  );
}

export default DoctorCard;
