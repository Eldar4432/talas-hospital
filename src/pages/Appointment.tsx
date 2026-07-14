import { useState } from "react";
import { doctors } from "../data/doctors";

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "",
    doctor: "",
    date: "",
    message: "",
  });

  const filteredDoctors = doctors.filter(
    (doctor) => doctor.department === formData.department,
  );

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(formData);

    alert("Заявка отправлена!");
  }

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-800 text-center">
          Запись на прием
        </h1>

        <p className="text-center mt-4 text-gray-600">
          Заполните форму, и мы свяжемся с вами.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5 bg-white shadow-lg rounded-xl p-8 border"
        >
          <input
            type="text"
            name="name"
            placeholder="ФИО"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="">Выберите отделение</option>

            <option>Хирургическое отделение</option>

            <option>Терапевтическое отделение</option>

            <option>Детское отделение</option>
          </select>

          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="">Выберите врача</option>

            {filteredDoctors.map((doctor) => (
              <option key={doctor.id} value={doctor.name}>
                {doctor.name} — {doctor.position}
              </option>
            ))}
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <textarea
            name="message"
            placeholder="Дополнительная информация"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 h-32"
          />

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg font-bold hover:bg-blue-800"
          >
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
}

export default Appointment;
