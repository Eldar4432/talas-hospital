function Contacts() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-800">
          Контакты
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-blue-700">Адрес</h3>

            <p className="mt-3 text-gray-600">
              г. Талас, Кыргызская Республика
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-blue-700">Телефон</h3>

            <p className="mt-3 text-gray-600">
              Регистратура: +996 997 704 007{" "}
            </p>

            <p className="text-gray-600">
              Приемное отделение: +996 997 704 007
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-blue-700">Режим работы</h3>

            <p className="mt-3 text-gray-600">Понедельник - Суббота</p>

            <p className="text-gray-600">09:00 - 18:00</p>
          </div>
        </div>

        <div className="mt-10 bg-gray-200 h-64 rounded-xl flex items-center justify-center">
          Карта больницы
        </div>
      </div>
    </section>
  );
}

export default Contacts;
