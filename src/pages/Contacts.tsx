function Contacts() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-800">Контакты</h1>

        <div className="mt-8 space-y-4 text-lg">
          <p>📍 Адрес: г. Талас, Кыргызская Республика</p>

          <p>☎ Регистратура: +996 XXX XXX XXX</p>

          <p>🕒 График работы: Пн-Пт 08:00-18:00</p>
        </div>

        <div className="mt-10 h-72 bg-gray-200 rounded-xl flex items-center justify-center">
          Карта больницы
        </div>
      </div>
    </section>
  );
}

export default Contacts;
