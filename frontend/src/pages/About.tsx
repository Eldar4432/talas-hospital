function About() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-800">О больнице</h1>

        <div className="mt-8 space-y-6 text-lg text-gray-700">
          <p>
            Таласская областная объединённая больница имени Чолпона Мамбетова
            является одним из ведущих медицинских учреждений Таласской области.
          </p>

          <p>
            Больница оказывает специализированную и квалифицированную
            медицинскую помощь населению, используя современные методы
            диагностики и лечения.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-blue-50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-blue-800">Наша миссия</h2>

            <p className="mt-3 text-gray-700">
              Обеспечение доступной и качественной медицинской помощи каждому
              пациенту.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-blue-800">Наши ценности</h2>

            <p className="mt-3 text-gray-700">
              Профессионализм, ответственность и забота о здоровье людей.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-blue-800">Развитие</h2>

            <p className="mt-3 text-gray-700">
              Внедрение современных медицинских и цифровых технологий.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
