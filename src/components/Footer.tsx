function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold">
              Таласская областная объединённая больница
            </h2>

            <p className="mt-3 text-blue-100">
              Медицинская помощь жителям Таласской области.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg">Контакты</h3>

            <p className="mt-3">📍 г. Талас</p>

            <p>☎ Регистратура</p>

            <p>✉ info@hospital.kg</p>
          </div>

          <div>
            <h3 className="font-bold text-lg">Разделы</h3>

            <p className="mt-3">О больнице</p>

            <p>Отделения</p>

            <p>Новости</p>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-5 text-center">
          <p>© 2026 Таласская областная объединённая больница</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
