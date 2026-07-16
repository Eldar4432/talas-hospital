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
      title: "Заявки",
      path: "/admin/appointments",
      icon: "📩",
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
      <header className="bg-blue-800 text-white px-8 py-5 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">🏥 Панель управления больницей</h1>
          <p className="text-sm text-blue-100">{user.name}</p>
          <p className="text-xs text-blue-200">{user.role}</p>{" "}
        </div>
        <button onClick={logout} className="bg-red-600 px-4 py-2 rounded-lg">
          Выйти
        </button>
      </header>

      <div className="flex">
        <aside className="w-64 bg-white min-h-screen shadow p-5">
          <nav className="space-y-3">
            <nav className="space-y-2">
              {menu.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `
 block
 px-4
 py-2
 rounded-lg
 transition
 ${isActive ? "bg-blue-100 text-blue-800 font-bold" : "hover:bg-gray-100"}
 `
                  }
                >
                  {item.icon} {item.title}
                </NavLink>
              ))}
            </nav>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
