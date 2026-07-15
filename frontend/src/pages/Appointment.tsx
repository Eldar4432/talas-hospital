import { useEffect, useState } from "react";
import { api } from "../api/api";

interface Doctor {
  id: number;
  name: string;
  position: string;
}

function Appointment() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  const [form, setForm] = useState({
    patient_name: "",
    phone: "",
    doctor_id: "",
    appointment_date: "",
    message: "",
  });

  useEffect(() => {
    api.get("/doctors").then((res) => setDoctors(res.data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await api.post("/appointments", {
      ...form,
      doctor_id: Number(form.doctor_id),
    });

    alert("Запись успешно отправлена");

    setForm({
      patient_name: "",
      phone: "",
      doctor_id: "",
      appointment_date: "",
      message: "",
    });
  };

  return (
    <section className="py-16">
      <div className="max-w-xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-800">Запись на прием</h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            className="w-full border p-3 rounded"
            placeholder="Ваше имя"
            value={form.patient_name}
            onChange={(e) =>
              setForm({
                ...form,
                patient_name: e.target.value,
              })
            }
          />

          <input
            className="w-full border p-3 rounded"
            placeholder="Телефон"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
          />

          <select
            className="w-full border p-3 rounded"
            value={form.doctor_id}
            onChange={(e) =>
              setForm({
                ...form,
                doctor_id: e.target.value,
              })
            }
          >
            <option value="">Выберите врача</option>

            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name} — {doctor.position}
              </option>
            ))}
          </select>

          <input
            type="date"
            className="w-full border p-3 rounded"
            value={form.appointment_date}
            onChange={(e) =>
              setForm({
                ...form,
                appointment_date: e.target.value,
              })
            }
          />

          <textarea
            className="w-full border p-3 rounded"
            placeholder="Комментарий"
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }
          />

          <button className="bg-blue-700 text-white px-6 py-3 rounded">
            Записаться
          </button>
        </form>
      </div>
    </section>
  );
}

export default Appointment;
