import { useState } from "react";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await api.post("/auth/login", {
      username,
      password,
    });

    localStorage.setItem("token", res.data.token);

    navigate("/admin");
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-5">Вход администратора</h1>

      <form onSubmit={login} className="space-y-4">
        <input
          className="border p-2 block"
          placeholder="Логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="border p-2 block"
          placeholder="Пароль"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-5 py-2">Войти</button>
      </form>
    </div>
  );
}

export default Login;
