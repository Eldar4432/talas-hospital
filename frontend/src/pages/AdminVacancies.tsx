import { useEffect, useState } from "react";
import { api } from "../api/api";
import type { Vacancy } from "../api/vacanciesApi";

function AdminVacancies() {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [showForm, setShowForm] = useState(false);

  const initialForm = {
    title: "",
    department: "",
    employment_type: "",
    experience: "",
    education: "",
    salary: "",
    description: "",
    requirements: "",
    conditions: "",
    apply_url: "",
  };

  const [form, setForm] = useState(initialForm);

  const loadVacancies = () => {
    api
      .get("/vacancies")
      .then((res) => {
        setVacancies(res.data);
      })
      .catch(console.error);
  };

  useEffect(() => {
    loadVacancies();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addVacancy = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.post("/vacancies", form);

      setForm(initialForm);

      setShowForm(false);

      loadVacancies();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteVacancy = async (id: number) => {
    const confirmDelete = confirm("Удалить вакансию?");

    if (!confirmDelete) return;

    await api.delete(`/vacancies/${id}`);

    loadVacancies();
  };

  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">
              Управление вакансиями
            </h1>
            <p className="mt-2 text-sm text-slate-500 max-w-2xl">
              Публикация вакансий Таласской областной больницы
            </p>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg text-sm transition"
          >
            {showForm ? "Закрыть" : "+ Добавить"}
          </button>
        </div>

        {/* Form */}

        {showForm && (
          <form
            onSubmit={addVacancy}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-8"
          >
            <h2 className="text-lg font-semibold text-slate-900 mb-5">
              Новая вакансия
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                ["title", "Название вакансии"],
                ["department", "Отделение"],
                ["employment_type", "Тип занятости"],
                ["experience", "Опыт работы"],
                ["education", "Образование"],
                ["salary", "Заработная плата"],
              ].map(([name, placeholder]) => (
                <input
                  key={name}
                  name={name}
                  placeholder={placeholder}
                  value={form[name as keyof typeof form]}
                  onChange={handleChange}
                  className="border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  required={name === "title"}
                />
              ))}
            </div>

            <textarea
              name="description"
              placeholder="Описание вакансии"
              value={form.description}
              onChange={handleChange}
              rows={3}
              className="w-full mt-4 border border-slate-300 rounded-xl p-4 text-sm text-slate-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />

            <textarea
              name="requirements"
              placeholder="Требования"
              value={form.requirements}
              onChange={handleChange}
              rows={3}
              className="w-full mt-4 border border-slate-300 rounded-xl p-4 text-sm text-slate-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />

            <textarea
              name="conditions"
              placeholder="Условия работы"
              value={form.conditions}
              onChange={handleChange}
              rows={3}
              className="w-full mt-4 border border-slate-300 rounded-xl p-4 text-sm text-slate-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />

            <input
              name="apply_url"
              placeholder="Ссылка для подачи заявки"
              value={form.apply_url}
              onChange={handleChange}
              className="w-full mt-4 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />

            <button
              type="submit"
              className="mt-5 bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-xl text-sm font-medium transition"
            >
              Сохранить
            </button>
          </form>
        )}

        {/* Vacancy list */}

        <div className="space-y-4">
          {vacancies.length === 0 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center text-slate-500">
              Вакансий пока нет
            </div>
          )}

          {vacancies.map((vacancy) => (
            <div
              key={vacancy.id}
              className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    {vacancy.title}
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    {vacancy.department}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3 text-sm text-slate-600">
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      {vacancy.employment_type}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      {vacancy.experience}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      {vacancy.salary}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => deleteVacancy(vacancy.id)}
                  className="border border-slate-200 rounded-xl px-3 py-2 text-red-600 hover:bg-red-50 text-sm"
                >
                  Удалить
                </button>
              </div>

              <p className="mt-4 text-sm text-slate-600 line-clamp-2">
                {vacancy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdminVacancies;
