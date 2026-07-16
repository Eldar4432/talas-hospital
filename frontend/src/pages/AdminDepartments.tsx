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
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Управление отделениями</h1>

      <form onSubmit={saveDepartment} className="space-y-4 mb-10">
        <input
          className="border p-3 w-full"
          placeholder="Название отделения"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <textarea
          className="border p-3 w-full"
          placeholder="Описание"
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />

        <input
          className="border p-3 w-full"
          placeholder="Услуги через запятую"
          value={form.services}
          onChange={(e) =>
            setForm({
              ...form,
              services: e.target.value,
            })
          }
        />

        <input
          className="border p-3 w-full"
          placeholder="График работы"
          value={form.schedule}
          onChange={(e) =>
            setForm({
              ...form,
              schedule: e.target.value,
            })
          }
        />

        <button className="bg-blue-700 text-white px-5 py-2 rounded">
          {editingId ? "Сохранить изменения" : "Добавить отделение"}
        </button>

        {editingId && (
          <button
            type="button"
            onClick={clearForm}
            className="bg-gray-500 text-white px-5 py-2 rounded ml-3"
          >
            Отмена
          </button>
        )}
      </form>

      <div className="grid md:grid-cols-3 gap-5">
        {departments.map((item) => (
          <div key={item.id} className="border p-5 rounded">
            <h2 className="font-bold text-xl">{item.name}</h2>

            <p>{item.description}</p>

            <p className="mt-2 font-semibold">Услуги:</p>

            <ul>
              {item.services.map((service, index) => (
                <li key={index}>- {service}</li>
              ))}
            </ul>

            <p className="mt-2">{item.schedule}</p>

            <button
              onClick={() => editDepartment(item)}
              className="text-blue-600 mr-4 mt-3"
            >
              Редактировать
            </button>

            <button
              onClick={() => deleteDepartment(item.id)}
              className="text-red-600"
            >
              Удалить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDepartments;
