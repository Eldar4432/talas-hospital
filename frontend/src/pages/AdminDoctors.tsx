import { useEffect, useState } from "react";
import { api } from "../api/api";

interface Doctor {
  id: number;
  name: string;
  position: string;
  experience: string;
  education: string;
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
    image: "",
  });

  const loadDoctors = () => {
    api.get("/doctors").then((res) => setDoctors(res.data));
  };

  useEffect(() => {
    loadDoctors();
  }, []);

  const addDoctor = async (e: React.FormEvent) => {
    e.preventDefault();

    // await api.post("/doctors", form);

    const data = new FormData();

    data.append("name", form.name);
    data.append("position", form.position);
    data.append("experience", form.experience);
    data.append("education", form.education);

    if (image) {
      data.append("image", image);
    }

    await api.post("/doctors", data);

    setForm({
      name: "",
      position: "",
      experience: "",
      education: "",
      image: "",
    });

    loadDoctors();
  };

  const deleteDoctor = async (id: number) => {
    await api.delete(`/doctors/${id}`);

    loadDoctors();
  };

  const updateDoctor = async () => {
    if (!editingId) return;

    await api.put(`/doctors/${editingId}`, form);

    setEditingId(null);

    setForm({
      name: "",
      position: "",
      experience: "",
      education: "",
      image: "",
    });

    loadDoctors();
  };

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-blue-800">Управление врачами</h1>

        <form onSubmit={addDoctor} className="mt-8 space-y-3">
          <input
            className="border p-3 w-full"
            placeholder="Имя"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            className="border p-3 w-full"
            placeholder="Должность"
            value={form.position}
            onChange={(e) => setForm({ ...form, position: e.target.value })}
          />

          <input
            className="border p-3 w-full"
            placeholder="Опыт"
            value={form.experience}
            onChange={(e) => setForm({ ...form, experience: e.target.value })}
          />

          <input
            className="border p-3 w-full"
            placeholder="Образование"
            value={form.education}
            onChange={(e) => setForm({ ...form, education: e.target.value })}
          />

          <input
            type="file"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
          />

          <button className="bg-blue-700 text-white px-5 py-2 rounded">
            {editingId ? "Сохранить изменения" : "Добавить врача"}
          </button>
        </form>

        <div className="mt-10">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="border p-4 mt-3 rounded">
              <h2 className="font-bold">{doctor.name}</h2>

              <p>{doctor.position}</p>

              <button
                onClick={() => {
                  setEditingId(doctor.id);

                  setForm({
                    name: doctor.name,
                    position: doctor.position,
                    experience: doctor.experience,
                    education: doctor.education,
                    image: "",
                  });
                }}
                className="text-blue-600 mr-4"
              >
                Редактировать
              </button>

              <button
                onClick={() => deleteDoctor(doctor.id)}
                className="text-red-600 mt-3"
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
