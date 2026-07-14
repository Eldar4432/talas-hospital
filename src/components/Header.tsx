import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-blue-700">
            Таласская областная объединённая больница
          </h1>
        </div>

        <nav className="flex gap-6 text-gray-700">
          <Link to="/">Главная</Link>
          <Link to="/about">О больнице</Link>{" "}
          <Link to="/departments">Отделения</Link>
          <Link to="/doctors">Врачи</Link>
          <Link to="/news">Новости</Link>
          <Link to="/contacts">Контакты</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
