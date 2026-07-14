import { useParams, Link } from "react-router-dom";
import { doctors } from "../data/doctors";

function DoctorDetails() {
  const { id } = useParams();

  const doctor = doctors.find((item) => item.id === Number(id));

  if (!doctor) {
    return <div className="py-16 text-center">Врач не найден</div>;
  }

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="rounded-xl w-full h-auto max-h-80 object-contain"
          />

          <div>
            <h1 className="text-4xl font-bold text-blue-800">{doctor.name}</h1>

            <p className="mt-4 text-xl">{doctor.position}</p>

            <p className="mt-4">Отделение: {doctor.department}</p>

            <p className="mt-4">Опыт работы: {doctor.experience}</p>

            <p className="mt-4">Образование: {doctor.education}</p>

            <Link
              to="/appointment"
              className="inline-block mt-8 bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              Записаться на прием
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoctorDetails;
