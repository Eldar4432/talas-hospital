import { Link } from "react-router-dom";
import logo from "../assets/images/logotoob.png";

function Header() {
  return (
    <header className="bg-white shadow-md">
      {/* Верхняя информация */}
      <div className="bg-blue-800 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between">
          <p>☎ Регистратура: +996 997 704 007</p>

          <p>🕒 Пн-Сб: 09:00 - 18:00</p>
        </div>
      </div>

      {/* Основной Header */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Логотип */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Логотип больницы"
            className="w-16 h-16 object-contain"
          />

          <div>
            <h1 className="text-xl font-bold text-blue-700">
              Таласская областная объединённая больница
            </h1>

            <p className="text-sm text-gray-500">имени Чолпона Мамбетова</p>
          </div>
        </Link>

        {/* Навигация */}
        <nav className="hidden lg:flex gap-6 text-gray-700 items-center">
          <Link to="/" className="hover:text-blue-700">
            Главная
          </Link>

          <Link to="/about" className="hover:text-blue-700">
            О больнице
          </Link>

          <Link to="/departments" className="hover:text-blue-700">
            Отделения
          </Link>

          <Link to="/doctors" className="hover:text-blue-700">
            Врачи
          </Link>

          <Link to="/news" className="hover:text-blue-700">
            Новости
          </Link>

          <Link to="/contacts" className="hover:text-blue-700">
            Контакты
          </Link>

          <Link
            to="/contacts"
            className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800"
          >
            Записаться
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
