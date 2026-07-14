const news = [
  {
    title: "Открытие нового медицинского кабинета",
    date: "14 июля 2026",
    text: "В больнице открыт новый кабинет для улучшения качества обслуживания пациентов.",
  },
  {
    title: "Профилактический осмотр населения",
    date: "10 июля 2026",
    text: "Жители Таласской области могут пройти медицинский осмотр.",
  },
  {
    title: "Обучение медицинского персонала",
    date: "5 июля 2026",
    text: "Специалисты больницы повысили квалификацию.",
  },
];

function News() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-800 text-center">
          Новости больницы
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {news.map((item) => (
            <article key={item.title} className="rounded-xl shadow p-6 border">
              <p className="text-gray-500">{item.date}</p>

              <h2 className="text-xl font-bold mt-3 text-blue-700">
                {item.title}
              </h2>

              <p className="mt-3 text-gray-600">{item.text}</p>

              <button className="mt-5 text-blue-700">Читать далее →</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;
