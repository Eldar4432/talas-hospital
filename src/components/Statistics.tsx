const stats = [
  {
    number: "80+",
    text: "Врачей",
  },
  {
    number: "20+",
    text: "Отделений",
  },
  {
    number: "50+",
    text: "Лет работы",
  },
  {
    number: "100000+",
    text: "Пациентов ежегодно",
  },
];

function Statistics() {
  return (
    <section className="py-16 bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {stats.map((item) => (
          <div key={item.text} className="text-center">
            <h2 className="text-4xl font-bold">{item.number}</h2>

            <p className="mt-3 text-lg">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;
