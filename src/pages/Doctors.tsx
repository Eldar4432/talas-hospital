const doctors = [
  {
    name: "Иван Иванов",
    position: "Хирург",
    experience: "15 лет",
  },
  {
    name: "Айгуль Садыкова",
    position: "Кардиолог",
    experience: "12 лет",
  },
  {
    name: "Бакыт Токтосунов",
    position: "Терапевт",
    experience: "10 лет",
  },
];

function Doctors() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-800 text-center">Врачи</h1>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="bg-white shadow rounded-xl p-6 text-center"
            >
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto"></div>

              <h2 className="text-xl font-bold mt-5">{doctor.name}</h2>

              <p className="text-blue-700">{doctor.position}</p>

              <p className="text-gray-600">Стаж: {doctor.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Doctors;
