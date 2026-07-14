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
          <a href="/departments">Отделения</a>
          <a href="/doctors">Врачи</a>
          <a href="/news">Новости</a>
          <a href="/contacts">Контакты</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
