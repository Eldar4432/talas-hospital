import { useEffect, useState } from "react";
import {
  getHospitalInfo,
  type HospitalInfo as HospitalInfoType,
} from "../api/hospitalInfoApi";

function HospitalInfo() {
  const [info, setInfo] = useState<HospitalInfoType | null>(null);

  useEffect(() => {
    getHospitalInfo()
      .then((data) => setInfo(data))
      .catch((error) => console.error(error));
  }, []);

  if (!info) {
    return <div className="py-10 text-center">Загрузка...</div>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-blue-800">{info.name}</h2>

        <p className="mt-4 text-lg text-gray-700">{info.description}</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-blue-800">История больницы</h2>

        <p className="mt-3 text-gray-700">{info.history}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-blue-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-800">Наша миссия</h3>

          <p className="mt-3 text-gray-700">{info.mission}</p>
        </div>

        <div className="bg-blue-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-800">Наши ценности</h3>

          <p className="mt-3 text-gray-700">{info.values}</p>
        </div>

        <div className="bg-blue-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-800">Развитие</h3>

          <p className="mt-3 text-gray-700">{info.development}</p>
        </div>
      </div>
    </div>
  );
}

export default HospitalInfo;
