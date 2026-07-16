import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api/api";

interface Doctor {
  id: number;
  name: string;
  position: string;
  experience: string;
  education: string;
  image: string;
}

function DoctorDetails() {
  const { id } = useParams();

  const [doctor, setDoctor] = useState<Doctor | null>(null);

  useEffect(() => {
    api
      .get(`/doctors/${id}`)
      .then((res) => {
        setDoctor(res.data);
      })
      .catch(console.error);
  }, [id]);

  if (!doctor) {
    return <div className="py-16 text-center">Врач не найден</div>;
  }

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <img
            src={
              doctor.image
                ? `http://localhost:5000${doctor.image}`
                : "/doctor-placeholder.jpg"
            }
            alt={doctor.name}
            className="rounded-xl w-full h-80 object-cover"
          />

          <div>
            <h1 className="text-4xl font-bold text-blue-800">{doctor.name}</h1>
            <p className="mt-4 text-xl">{doctor.position}</p>
            <div className="bg-gray-50 rounded-xl p-6 mt-6">
              <h2 className="text-2xl font-bold text-blue-800">Опыт работы</h2>

              <p className="mt-3">{doctor.experience}</p>
            </div>{" "}
            <div className="bg-blue-50 rounded-xl p-6 mt-8">
              <h2 className="text-2xl font-bold text-blue-800">Образование</h2>

              <p className="mt-3 text-gray-700">{doctor.education}</p>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoctorDetails;
