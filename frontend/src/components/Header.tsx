import { Link } from "react-router-dom";
import logo from "../assets/images/logotoob.png";

function Header() {
  return (
    <header className="bg-white shadow-sm">
      {/* Верхняя информационная панель */}
      <div className="bg-blue-800 text-white text-sm">
        <div className="max-w-6xl mx-auto px-6 py-2 flex justify-between items-center">
          <p>☎ Регистратура: +996 997 704 007</p>

          <p>🕒 Пн-Сб: 09:00 - 18:00</p>
        </div>
      </div>

      {/* Основная часть */}
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div
          className="
          flex
          items-center
          justify-between
          gap-6
        "
        >
          {/* Логотип + название */}
          <Link
            to="/"
            className="
            flex
            items-center
            gap-3
            min-w-0
            "
          >
            <img
              src={logo}
              alt="Логотип больницы"
              className="
              w-14
              h-14
              object-contain
              flex-shrink-0
              "
            />

            <div className="min-w-0">
              <h1
                className="
                text-base
                md:text-lg
                font-bold
                text-blue-800
                leading-tight
                "
              >
                Таласская областная объединённая больница
              </h1>

              <p
                className="
                text-xs
                md:text-sm
                text-gray-500
                mt-1
                "
              >
                имени Чолпона Мамбетова
              </p>
            </div>
          </Link>

          {/* Навигация */}
          <nav
            className="
            hidden
            lg:flex
            items-center
            gap-4
            text-sm
            text-gray-700
            whitespace-nowrap
            "
          >
            <Link to="/" className="hover:text-blue-700 transition">
              Главная
            </Link>

            <Link to="/about" className="hover:text-blue-700 transition">
              О больнице
            </Link>

            <Link to="/departments" className="hover:text-blue-700 transition">
              Отделения
            </Link>

            <Link to="/doctors" className="hover:text-blue-700 transition">
              Врачи
            </Link>

            <Link to="/news" className="hover:text-blue-700 transition">
              Новости
            </Link>

            <Link to="/contacts" className="hover:text-blue-700 transition">
              Контакты
            </Link>

            <Link to="/documents" className="hover:text-blue-700 transition">
              Документы
            </Link>
            <Link to="/vacancies" className="hover:text-blue-700">
              Вакансии
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
