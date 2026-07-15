import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";

function AdminLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", form);

      localStorage.setItem("token", response.data.token);

      navigate("/admin");
    } catch (error) {
      alert("Неверный логин или пароль");
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-md mx-auto px-6">
        <h1 className="text-3xl font-bold text-blue-800">
          Вход администратора
        </h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            className="w-full border p-3 rounded"
            placeholder="Логин"
            value={form.username}
            onChange={(e) =>
              setForm({
                ...form,
                username: e.target.value,
              })
            }
          />

          <input
            type="password"
            className="w-full border p-3 rounded"
            placeholder="Пароль"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
          />

          <button className="bg-blue-700 text-white px-6 py-3 rounded">
            Войти
          </button>
        </form>
      </div>
    </section>
  );
}

export default AdminLogin;
