import { Link } from "react-router-dom";
import logo from "../assets/images/logotoob.png";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Логотип больницы"
                className="w-16 h-16 object-contain"
              />

              <h2 className="text-xl font-bold">
                Таласская областная объединённая больница
              </h2>
            </div>

            <p className="mt-4 text-blue-100">
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

            <div className="mt-3 space-y-2">
              <Link to="/about" className="block hover:text-blue-200">
                О больнице
              </Link>

              <Link to="/departments" className="block hover:text-blue-200">
                Отделения
              </Link>

              <Link to="/news" className="block hover:text-blue-200">
                Новости
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-5 text-center">
          <p>© 2026 Таласская областная объединённая больница</p>

          <p className="mt-2 text-blue-200 text-sm">
            Разработка и техническая поддержка: Эльдар Айбеков
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
