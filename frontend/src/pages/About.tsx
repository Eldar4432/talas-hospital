import { useEffect, useState } from "react";
import { getHospitalInfo } from "../api/hospitalApi";
import type { HospitalInfo } from "../api/hospitalApi";

function About() {
  const [hospital, setHospital] = useState<HospitalInfo | null>(null);

  useEffect(() => {
    getHospitalInfo()
      .then((data) => setHospital(data))
      .catch((error) => console.error(error));
  }, []);

  if (!hospital) {
    return <div className="py-16 text-center">Загрузка...</div>;
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-800">О больнице</h1>

        <div className="mt-8 space-y-6 text-lg text-gray-700">
          <h2 className="text-2xl font-bold">{hospital.name}</h2>

          <p>{hospital.description}</p>

          <p>{hospital.history}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-blue-50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-blue-800">Наша миссия</h2>

            <p className="mt-3">{hospital.mission}</p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-blue-800">Наши ценности</h2>

            <p className="mt-3">{hospital.values}</p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-blue-800">Развитие</h2>

            <p className="mt-3">{hospital.development}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
