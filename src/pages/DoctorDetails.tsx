import { useParams } from "react-router-dom";
import { doctors } from "../data/doctors";

function DoctorDetails() {
  const { id } = useParams();

  const doctor = doctors.find((item) => item.id === Number(id));

  if (!doctor) {
    return <h1>Врач не найден</h1>;
  }

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-800">{doctor.name}</h1>

        <p className="mt-5 text-xl">Специальность: {doctor.position}</p>

        <p>Стаж: {doctor.experience}</p>

        <p className="mt-5">Образование: {doctor.education}</p>
      </div>
    </section>
  );
}

export default DoctorDetails;
