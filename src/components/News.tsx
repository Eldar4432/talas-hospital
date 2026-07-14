const news = [
  {
    title: "Открытие нового медицинского кабинета",
    date: "14 июля 2026",
    text: "В больнице открыт новый кабинет для улучшения качества обслуживания пациентов.",
  },
  {
    title: "Профилактический медицинский осмотр",
    date: "10 июля 2026",
    text: "Жители области могут пройти бесплатный профилактический осмотр.",
  },
  {
    title: "Повышение квалификации врачей",
    date: "5 июля 2026",
    text: "Специалисты больницы прошли обучение по современным методам лечения.",
  },
];

function News() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-800">
          Новости больницы
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {news.map((item) => (
            <article
              key={item.title}
              className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <p className="text-sm text-gray-500">{item.date}</p>

              <h3 className="text-xl font-bold mt-3 text-blue-700">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600">{item.text}</p>

              <button className="mt-5 text-blue-700 font-semibold">
                Читать далее →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;
