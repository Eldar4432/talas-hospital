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
    <section className="py-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-slate-900">
            Информация о больнице
          </h1>
          <p className="mt-2 text-sm text-slate-500 max-w-2xl">
            Редактируйте ключевые тексты о миссии, истории и развитии больницы.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Название больницы
            </label>
            <input
              className="w-full border border-slate-300 rounded-2xl px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              value={info.name}
              onChange={(e) =>
                setInfo({
                  ...info,
                  name: e.target.value,
                })
              }
              placeholder="Название больницы"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Описание
            </label>
            <textarea
              className="w-full border border-slate-300 rounded-2xl p-4 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              rows={4}
              value={info.description}
              onChange={(e) =>
                setInfo({
                  ...info,
                  description: e.target.value,
                })
              }
              placeholder="Описание"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              История
            </label>
            <textarea
              className="w-full border border-slate-300 rounded-2xl p-4 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
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
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Миссия
            </label>
            <textarea
              className="w-full border border-slate-300 rounded-2xl p-4 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
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
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Ценности
            </label>
            <textarea
              className="w-full border border-slate-300 rounded-2xl p-4 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
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
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Развитие
            </label>
            <textarea
              className="w-full border border-slate-300 rounded-2xl p-4 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
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
          </div>

          <button
            onClick={updateInfo}
            className="w-full bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-2xl text-sm font-medium transition"
          >
            Сохранить изменения
          </button>
        </div>
      </div>
    </section>
  );
}

export default AdminHospitalInfo;
