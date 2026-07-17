import { Link } from "react-router-dom";
import logo from "../assets/images/logotoob.png";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Больница */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Логотип больницы"
                className="
                w-12
                h-12
                object-contain
                "
              />

              <div>
                <h2
                  className="
                  text-lg
                  font-bold
                  leading-tight
                "
                >
                  Таласская областная объединённая больница
                </h2>

                <p
                  className="
                  text-sm
                  text-blue-200
                  mt-1
                "
                >
                  имени Чолпона Мамбетова
                </p>
              </div>
            </div>

            <p
              className="
              mt-5
              text-blue-100
              text-sm
              leading-6
            "
            >
              Медицинская помощь и обслуживание жителей Таласской области.
            </p>
          </div>

          {/* Контакты */}
          <div>
            <h3
              className="
              font-semibold
              text-lg
            "
            >
              Контакты
            </h3>

            <div
              className="
              mt-4
              space-y-2
              text-blue-100
              text-sm
            "
            >
              <p>📍 г. Талас</p>

              <p>☎ Регистратура: +996 997 704 007</p>

              <p>✉ info@hospital.kg</p>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h3
              className="
              font-semibold
              text-lg
            "
            >
              Разделы сайта
            </h3>

            <div
              className="
              mt-4
              space-y-2
              text-sm
            "
            >
              <Link
                to="/about"
                className="
                block
                text-blue-100
                hover:text-white
                transition
                "
              >
                О больнице
              </Link>

              <Link
                to="/departments"
                className="
                block
                text-blue-100
                hover:text-white
                transition
                "
              >
                Отделения
              </Link>

              <Link
                to="/doctors"
                className="
                block
                text-blue-100
                hover:text-white
                transition
                "
              >
                Врачи
              </Link>

              <Link
                to="/news"
                className="
                block
                text-blue-100
                hover:text-white
                transition
                "
              >
                Новости
              </Link>

              <Link
                to="/documents"
                className="
                block
                text-blue-100
                hover:text-white
                transition
                "
              >
                Документы
              </Link>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}

        <div
          className="
          border-t
          border-blue-700
          mt-10
          pt-6
          text-center
          text-sm
          "
        >
          <p className="text-blue-100">
            © 2026 Таласская областная объединённая больница
          </p>

          <p
            className="
            mt-2
            text-blue-300
          "
          >
            Разработка и техническая поддержка:
            <span className="text-white font-medium"> Эльдар Айбеков</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
