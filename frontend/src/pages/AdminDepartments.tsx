import { useEffect, useState } from "react";
import { api } from "../api/api";

interface Department {
  id: number;
  name: string;
  description: string;
  services: string[];
  schedule: string;
}

function AdminDepartments() {
  const [departments, setDepartments] = useState<Department[]>([]);

  const [editingId, setEditingId] = useState<number | null>(null);

  const [form, setForm] = useState({
    name: "",
    description: "",
    services: "",
    schedule: "",
  });

  const loadDepartments = async () => {
    const res = await api.get("/departments");

    setDepartments(res.data);
  };

  useEffect(() => {
    loadDepartments();
  }, []);

  const saveDepartment = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      name: form.name,

      description: form.description,

      services: form.services.split(",").map((item) => item.trim()),

      schedule: form.schedule,
    };

    if (editingId) {
      await api.put(`/departments/${editingId}`, data);
    } else {
      await api.post("/departments", data);
    }

    clearForm();

    loadDepartments();
  };

  const editDepartment = (item: Department) => {
    setEditingId(item.id);

    setForm({
      name: item.name,

      description: item.description,

      services: item.services.join(", "),

      schedule: item.schedule,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const deleteDepartment = async (id: number) => {
    await api.delete(`/departments/${id}`);

    loadDepartments();
  };

  const clearForm = () => {
    setEditingId(null);

    setForm({
      name: "",
      description: "",
      services: "",
      schedule: "",
    });
  };

  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-slate-900">
            Управление отделениями
          </h1>
          <p className="mt-2 text-sm text-slate-500 max-w-2xl">
            Добавляйте и редактируйте отделения в минималистичном стиле.
          </p>
        </div>

        <form
          onSubmit={saveDepartment}
          className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-5 mb-10"
        >
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Название отделения
            </label>
            <input
              className="w-full border border-slate-300 rounded-2xl px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              placeholder="Название отделения"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Описание
            </label>
            <textarea
              className="w-full border border-slate-300 rounded-2xl p-4 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              placeholder="Описание"
              value={form.description}
              onChange={(e) =>
                setForm({
                  ...form,
                  description: e.target.value,
                })
              }
              rows={4}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Услуги (через запятую)
            </label>
            <input
              className="w-full border border-slate-300 rounded-2xl px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              placeholder="Услуги через запятую"
              value={form.services}
              onChange={(e) =>
                setForm({
                  ...form,
                  services: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              График работы
            </label>
            <input
              className="w-full border border-slate-300 rounded-2xl px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              placeholder="График работы"
              value={form.schedule}
              onChange={(e) =>
                setForm({
                  ...form,
                  schedule: e.target.value,
                })
              }
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center rounded-2xl bg-blue-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-900">
              {editingId ? "Сохранить изменения" : "Добавить отделение"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={clearForm}
                className="inline-flex items-center rounded-2xl bg-slate-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-600"
              >
                Отмена
              </button>
            )}
          </div>
        </form>

        <div className="grid gap-5 md:grid-cols-2">
          {departments.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm space-y-4"
            >
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  {item.name}
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  {item.description}
                </p>
              </div>

              <div className="space-y-2 text-sm text-slate-600">
                <p className="font-medium text-slate-800">Услуги:</p>
                <ul className="list-disc list-inside space-y-1">
                  {item.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
                <p className="text-slate-500">{item.schedule}</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => editDepartment(item)}
                  className="text-sm font-medium text-blue-800 hover:text-blue-900"
                >
                  Редактировать
                </button>
                <button
                  onClick={() => deleteDepartment(item.id)}
                  className="text-sm font-medium text-red-600 hover:text-red-700"
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdminDepartments;
