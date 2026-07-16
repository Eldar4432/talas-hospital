import { useEffect, useState } from "react";
import { api } from "../api/api";

interface Doctor {
  id: number;
  name: string;
  position: string;
  experience: string;
  education: string;
  image: string;
  specialization: string;
  department: string;
  biography: string;
}

function AdminDoctors() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [form, setForm] = useState({
    name: "",
    position: "",
    experience: "",
    education: "",
    specialization: "",
    department: "",
    biography: "",
  });

  const loadDoctors = async () => {
    const res = await api.get("/doctors");

    setDoctors(res.data);
  };

  useEffect(() => {
    loadDoctors();
  }, []);

  const saveDoctor = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", form.name);
    data.append("position", form.position);
    data.append("experience", form.experience);
    data.append("education", form.education);
    data.append("specialization", form.specialization);
    data.append("department", form.department);
    data.append("biography", form.biography);

    if (image) {
      data.append("image", image);
    }

    if (editingId) {
      await api.put(`/doctors/${editingId}`, data);
    } else {
      await api.post("/doctors", data);
    }

    clearForm();

    loadDoctors();
  };

  const editDoctor = (doctor: Doctor) => {
    setEditingId(doctor.id);

    setForm({
      name: doctor.name,
      position: doctor.position,
      experience: doctor.experience,
      education: doctor.education,
      specialization: doctor.specialization || "",
      department: doctor.department || "",
      biography: doctor.biography || "",
    });

    setImage(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const clearForm = () => {
    setEditingId(null);

    setForm({
      name: "",
      position: "",
      experience: "",
      education: "",
      specialization: "",
      department: "",
      biography: "",
    });

    setImage(null);
  };

  const deleteDoctor = async (id: number) => {
    await api.delete(`/doctors/${id}`);

    loadDoctors();
  };

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-blue-800">Управление врачами</h1>

        <form onSubmit={saveDoctor} className="mt-8 space-y-3">
          <input
            className="border p-3 w-full"
            placeholder="Имя"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <input
            className="border p-3 w-full"
            placeholder="Должность"
            value={form.position}
            onChange={(e) =>
              setForm({
                ...form,
                position: e.target.value,
              })
            }
          />

          <input
            className="border p-3 w-full"
            placeholder="Опыт"
            value={form.experience}
            onChange={(e) =>
              setForm({
                ...form,
                experience: e.target.value,
              })
            }
          />

          <input
            className="border p-3 w-full"
            placeholder="Образование"
            value={form.education}
            onChange={(e) =>
              setForm({
                ...form,
                education: e.target.value,
              })
            }
          />

          <input
            className="border p-3 rounded w-full"
            placeholder="Специализация"
            value={form.specialization}
            onChange={(e) =>
              setForm({
                ...form,
                specialization: e.target.value,
              })
            }
          />

          <input
            className="border p-3 rounded w-full"
            placeholder="Отделение"
            value={form.department}
            onChange={(e) =>
              setForm({
                ...form,
                department: e.target.value,
              })
            }
          />

          <textarea
            className="border p-3 rounded w-full"
            rows={5}
            placeholder="Биография врача"
            value={form.biography}
            onChange={(e) =>
              setForm({
                ...form,
                biography: e.target.value,
              })
            }
          />

          <input
            type="file"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
          />

          <button className="bg-blue-700 text-white px-5 py-2 rounded">
            {editingId ? "Сохранить изменения" : "Добавить врача"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={clearForm}
              className="ml-3 bg-gray-400 text-white px-5 py-2 rounded"
            >
              Отмена
            </button>
          )}
        </form>

        <div className="mt-10">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="border p-4 mt-3 rounded">
              <h2 className="font-bold">{doctor.name}</h2>

              <p>{doctor.position}</p>

              <button
                onClick={() => editDoctor(doctor)}
                className="text-blue-600 mr-4"
              >
                Редактировать
              </button>

              <button
                onClick={() => deleteDoctor(doctor.id)}
                className="text-red-600"
              >
                Удалить
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdminDoctors;
