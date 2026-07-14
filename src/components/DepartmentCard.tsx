const departments = [
  {
    title: "Хирургическое отделение",
    description: "Оказание хирургической помощи и проведение операций.",
  },
  {
    title: "Терапевтическое отделение",
    description: "Диагностика и лечение внутренних заболеваний.",
  },
  {
    title: "Реанимационное отделение",
    description: "Круглосуточная помощь пациентам в тяжелом состоянии.",
  },
  {
    title: "Родильное отделение",
    description: "Медицинская помощь женщинам и новорожденным.",
  },
];

function Departments() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-800">
          Наши отделения
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {departments.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl shadow-md border hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-700">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Departments;
