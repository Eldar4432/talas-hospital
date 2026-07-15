import { useEffect, useState } from "react";
import { api } from "../api/api";

interface Appointment {
  id: number;
  patient_name: string;
  phone: string;
  appointment_date: string;
  message: string;
  doctor_name: string;
  status: string;
}

function AdminAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const [statuses, setStatuses] = useState<Record<number, string>>({});

  const loadAppointments = async () => {
    const res = await api.get("/appointments");

    setAppointments(res.data);
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  const deleteAppointment = async (id: number) => {
    await api.delete(`/appointments/${id}`);

    loadAppointments();
  };

  const changeStatus = (id: number, status: string) => {
    setStatuses({
      ...statuses,
      [id]: status,
    });
  };

  const saveStatus = async (id: number) => {
    await api.put(`/appointments/${id}`, {
      status: statuses[id],
    });

    loadAppointments();
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Заявки пациентов</h1>

      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead>
            <tr className="border">
              <th className="border p-2">Пациент</th>

              <th className="border p-2">Телефон</th>

              <th className="border p-2">Врач</th>

              <th className="border p-2">Дата</th>

              <th className="border p-2">Сообщение</th>

              <th className="border p-2">Статус</th>

              <th className="border p-2">Действие</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((item) => (
              <tr key={item.id}>
                <td className="border p-2">{item.patient_name}</td>

                <td className="border p-2">{item.phone}</td>

                <td className="border p-2">{item.doctor_name}</td>

                <td className="border p-2">{item.appointment_date}</td>

                <td className="border p-2">{item.message}</td>

                <td className="border p-2">
                  <select
                    value={statuses[item.id] ?? item.status}
                    onChange={(e) => changeStatus(item.id, e.target.value)}
                    className="border p-1 rounded"
                  >
                    <option value="Новая">Новая</option>

                    <option value="Подтверждена">Подтверждена</option>

                    <option value="Завершена">Завершена</option>
                  </select>

                  <button
                    onClick={() => saveStatus(item.id)}
                    className="bg-green-600 text-white px-3 py-1 rounded ml-2"
                  >
                    Сохранить
                  </button>
                </td>

                <td className="border p-2">
                  <button
                    onClick={() => deleteAppointment(item.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminAppointments;
