import { useEffect, useState } from "react";
import { api } from "../api/api";

interface HospitalInfo {
  id: number;
  name: string;
  description: string;
  history: string;
  mission: string;
  values: string;
  development: string;
}

function AdminHospitalInfo() {
  const [info, setInfo] = useState<HospitalInfo | null>(null);

  const loadInfo = async () => {
    const res = await api.get("/hospital-info");

    setInfo(res.data);
  };

  useEffect(() => {
    loadInfo();
  }, []);

  const updateInfo = async () => {
    if (!info) return;

    await api.put("/hospital-info", info);

    alert("Информация обновлена");

    loadInfo();
  };

  if (!info) {
    return <div className="p-10">Загрузка...</div>;
  }

  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold text-blue-800 mb-8">
        Информация о больнице
      </h1>

      <div className="space-y-4">
        <input
          className="border p-3 w-full"
          value={info.name}
          onChange={(e) =>
            setInfo({
              ...info,
              name: e.target.value,
            })
          }
        />

        <textarea
          className="border p-3 w-full"
          rows={3}
          value={info.description}
          onChange={(e) =>
            setInfo({
              ...info,
              description: e.target.value,
            })
          }
        />

        <textarea
          className="border p-3 w-full"
          rows={4}
          placeholder="История"
          value={info.history}
          onChange={(e) =>
            setInfo({
              ...info,
              history: e.target.value,
            })
          }
        />

        <textarea
          className="border p-3 w-full"
          rows={3}
          placeholder="Миссия"
          value={info.mission}
          onChange={(e) =>
            setInfo({
              ...info,
              mission: e.target.value,
            })
          }
        />

        <textarea
          className="border p-3 w-full"
          rows={3}
          placeholder="Ценности"
          value={info.values}
          onChange={(e) =>
            setInfo({
              ...info,
              values: e.target.value,
            })
          }
        />

        <textarea
          className="border p-3 w-full"
          rows={3}
          placeholder="Развитие"
          value={info.development}
          onChange={(e) =>
            setInfo({
              ...info,
              development: e.target.value,
            })
          }
        />

        <button
          onClick={updateInfo}
          className="bg-blue-700 text-white px-6 py-3 rounded"
        >
          Сохранить изменения
        </button>
      </div>
    </section>
  );
}

export default AdminHospitalInfo;
