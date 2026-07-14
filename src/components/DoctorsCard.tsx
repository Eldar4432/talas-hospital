const doctors = [
  {
    name: "Айбеков Эльдар",
    position: "IT-специалист, Инженер медицинского оборудования",
    experience: "5 лет стажа",
  },
  {
    name: "Иванов Иван Иванович",
    position: "Хирург",
    experience: "15 лет стажа",
  },
  {
    name: "Садыкова Айгуль",
    position: "Кардиолог",
    experience: "12 лет стажа",
  },
];

function Doctors() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-800">
          Наши врачи
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                Фото
              </div>

              <h3 className="mt-5 text-xl font-bold">{doctor.name}</h3>

              <p className="text-blue-700 mt-2">{doctor.position}</p>

              <p className="text-gray-600 mt-2">{doctor.experience}</p>

              <button className="mt-5 bg-blue-700 text-white px-5 py-2 rounded-lg">
                Подробнее
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Doctors;
