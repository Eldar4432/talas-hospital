import { NavLink, Outlet, useNavigate } from "react-router-dom";

function AdminLayout() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const menu = [
    {
      title: "Главная",
      path: "/admin",
      icon: "🏠",
    },

    {
      title: "Врачи",
      path: "/admin/doctors",
      icon: "👨‍⚕️",
    },

    {
      title: "Новости",
      path: "/admin/news",
      icon: "📰",
    },

    {
      title: "Отделения",
      path: "/admin/departments",
      icon: "🏥",
    },

    {
      title: "Контакты",
      path: "/admin/contacts",
      icon: "📞",
    },

    {
      title: "О больнице",
      path: "/admin/hospital-info",
      icon: "ℹ️",
    },

    {
      title: "Вакансии",
      path: "/admin/vacancies",
      icon: "💼",
    },

    {
      title: "Документы",
      path: "/admin/documents",
      icon: "📄",
    },
  ];

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-800 text-white px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-lg font-semibold">🏥 Панель управления</h1>
          <p className="text-sm text-blue-100">{user.name}</p>
          <p className="text-xs text-blue-200">{user.role}</p>
        </div>
        <button
          onClick={logout}
          className="bg-red-600 px-4 py-2 rounded-lg text-sm"
        >
          Выйти
        </button>
      </header>

      <div className="flex">
        <aside className="w-56 bg-white min-h-screen shadow-sm p-5">
          <nav className="space-y-2 text-sm">
            {menu.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `
 block
 px-3
 py-2
 rounded-lg
 transition
 ${isActive ? "bg-blue-100 text-blue-800 font-semibold" : "hover:bg-gray-100 text-slate-700"}
 `
                }
              >
                {item.icon} {item.title}
              </NavLink>
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
