import DoctorsCard from "../components/DoctorCard";
import { doctors } from "../data/doctors";

function Doctors() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-800 text-center">
          Наши врачи
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {doctors.map((doctor) => (
            <DoctorsCard key={doctor.name} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Doctors;
