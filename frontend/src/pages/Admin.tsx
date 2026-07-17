import { Link, useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/admin/login");
  };

  const menu = [
    {
      title: "Врачи",
      description: "Добавление, редактирование и удаление врачей",
      link: "/admin/doctors",
      icon: "👨‍⚕️",
    },

    {
      title: "Новости",
      description: "Управление новостями больницы",
      link: "/admin/news",
      icon: "📰",
    },
    {
      title: "Отделения",
      description: "Управление отделениями больницы",
      link: "/admin/departments",
      icon: "🏢",
    },

    {
      title: "О больнице",
      description: "Информация, миссия, история",
      link: "/admin/hospital-info",
      icon: "🏥",
    },

    {
      title: "Контакты",
      description: "Телефон, адрес, график работы",
      link: "/admin/contacts",
      icon: "📞",
    },
    {
      title: "Документы",
      description: "Лицензии, приказы и официальные документы",
      link: "/admin/documents",
      icon: "📄",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-800">
          Административная панель
        </h1>

        <p className="mt-3 text-xl font-semibold">
          Добро пожаловать, {user.name}
        </p>

        <p className="text-gray-500">Роль: {user.role}</p>

        <button
          onClick={logout}
          className="
    bg-red-600
    text-white
    px-5
    py-2
    rounded-lg
    "
        >
          Выйти
        </button>

        <p className="mt-3 text-gray-600">
          Управление информацией сайта больницы
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {menu.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              className="
              border
              rounded-xl
              p-6
              shadow
              hover:shadow-lg
              transition
              bg-white
              "
            >
              <div className="text-4xl">{item.icon}</div>

              <h2 className="text-xl font-bold mt-4 text-blue-800">
                {item.title}
              </h2>

              <p className="mt-2 text-gray-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Admin;
