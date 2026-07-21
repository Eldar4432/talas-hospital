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
      title: "Вакансии",
      description: "Управление вакансиями больницы",
      link: "/admin/vacancies",
      icon: "💼",
    },
    {
      title: "Документы",
      description: "Лицензии, приказы и официальные документы",
      link: "/admin/documents",
      icon: "📄",
    },
  ];

  return (
    <section className="py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between mb-10">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">
              Административная панель
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Добро пожаловать, {user.name}
            </p>
            <p className="text-sm text-slate-500">Роль: {user.role}</p>
          </div>

          <button
            onClick={logout}
            className="inline-flex items-center rounded-2xl bg-red-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-700"
          >
            Выйти
          </button>
        </div>

        <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-600">
            Управляйте контентом сайта больницы: врачи, новости, отделения,
            контакты, вакансии и документы.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {menu.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="text-3xl">{item.icon}</div>
              <h2 className="mt-4 text-lg font-semibold text-slate-900">
                {item.title}
              </h2>
              <p className="mt-2 text-sm text-slate-500">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Admin;
