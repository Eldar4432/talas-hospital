import { useEffect, useState } from "react";
import { api } from "../api/api";
import { Link } from "react-router-dom";

interface Appointment {
  id: number;
  patient_name: string;
  phone: string;
  doctor_name: string;
  position: string;
  appointment_date: string;
  message: string;
}

function Admin() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    api.get("/appointments").then((res) => setAppointments(res.data));
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-800">
          Административная панель
        </h1>

        <div className="mt-6 space-y-4">
          {appointments.map((item) => (
            <div key={item.id} className="border rounded-lg p-5 shadow">
              <p>
                <b>Пациент:</b> {item.patient_name}
              </p>

              <p>
                <b>Телефон:</b> {item.phone}
              </p>

              <p>
                <b>Врач:</b> {item.doctor_name}({item.position})
              </p>

              <p>
                <b>Дата:</b> {item.appointment_date}
              </p>

              <p>
                <b>Комментарий:</b> {item.message}
              </p>
              <Link to="/admin/contacts">Контакты</Link>
              <Link to="/admin/documents">Документы</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Admin;
