const departments = [
  "Хирургическое отделение",
  "Терапевтическое отделение",
  "Реанимация",
  "Родильное отделение",
  "Детское отделение",
  "Приемное отделение",
];

function Departments() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-800 text-center">
          Наши отделения
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {departments.map((department) => (
            <div
              key={department}
              className="bg-white shadow rounded-xl p-6 border"
            >
              <h2 className="text-xl font-bold text-blue-700">{department}</h2>

              <p className="mt-3 text-gray-600">
                Подробная информация об отделении, врачах и медицинских услугах.
              </p>

              <button className="mt-4 text-blue-700">Подробнее →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Departments;
