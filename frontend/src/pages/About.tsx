import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHospitalInfo } from "../api/hospitalApi";
import type { HospitalInfo } from "../api/hospitalApi";

import hospitalImg from "../assets/images/DJI_0003.jpg.jpeg";
import adminImg from "../assets/images/administation.jpeg";
import d1 from "../assets/images/DJI_0003.jpg.jpeg";
import d2 from "../assets/images/DJI_0005.jpg.jpeg";
import d3 from "../assets/images/DJI_0077.jpg.jpeg";
import d4 from "../assets/images/DJI_0052.jpg.jpeg";
import eyes from "../assets/images/eyesdepatment.jpeg";

function About() {
  const [hospital, setHospital] = useState<HospitalInfo | null>(null);

  useEffect(() => {
    getHospitalInfo()
      .then((data) => setHospital(data))
      .catch((error) => console.error(error));
  }, []);

  const images = [hospitalImg, d1, d2, d3, d4, eyes];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight")
        setCurrentIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft")
        setCurrentIndex((i) => (i - 1 + images.length) % images.length);
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, images.length]);

  if (!hospital) {
    return <div className="py-16 text-center">Загрузка...</div>;
  }

  // try to extract founding year from history text
  const foundingMatch = hospital.history && hospital.history.match(/(\d{4})/);
  const foundingYear = foundingMatch ? foundingMatch[1] : "1977";

  // static stats (can be replaced with real data later)
  const stats = {
    departments: 18,
    doctors: 145,
    beds: 520,
    patientsPerYear: 32000,
  };

  return (
    <main className="pb-16">
      {/* Hero */}
      <section className="relative h-80 md:h-96 bg-gray-100">
        <img
          src={hospitalImg}
          alt="Больница"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-semibold">О больнице</h1>
            <p className="mt-3 max-w-2xl text-lg md:text-xl text-blue-100">
              {hospital.description ||
                "Крупное лечебное учреждение Таласской области, оказывающее широкий спектр медицинных услуг."}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 -mt-20 relative z-20">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Intro */}
          <div className="md:flex md:items-start md:gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-blue-800">
                {hospital.name}
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                {hospital.history}
              </p>
            </div>

            <aside className="mt-6 md:mt-0 md:w-64">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-600">
                  Год основания
                </h3>
                <div className="text-2xl font-bold text-blue-800 mt-1">
                  {foundingYear}
                </div>
              </div>

              <div className="mt-4 bg-blue-50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-600">
                  Роль в системе здравоохранения
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  Оказание специализированной и экстренной помощи для населения
                  Таласской области.
                </p>
              </div>
            </aside>
          </div>

          {/* Mission & Values */}
          <section className="mt-8">
            <h3 className="text-xl font-semibold text-blue-800">
              Миссия и ценности
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">Миссия</h4>
                <p className="mt-2 text-sm text-gray-700">{hospital.mission}</p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">Качество медицинской помощи</h4>
                <p className="mt-2 text-sm text-gray-700">
                  Стандарты доказательной медицины и постоянное повышение
                  квалификации персонала.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">Забота о пациентах</h4>
                <p className="mt-2 text-sm text-gray-700">
                  Индивидуальный подход, безопасность и уважение к пациенту.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">Профессионализм</h4>
                <p className="mt-2 text-sm text-gray-700">
                  Высокие стандарты работы и командная культура.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">Современные технологии</h4>
                <p className="mt-2 text-sm text-gray-700">
                  Инвестиции в оборудование и цифровые решения для точной
                  диагностики.
                </p>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="mt-10">
            <h3 className="text-xl font-semibold text-blue-800">
              Основные показатели
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              <div className="p-4 bg-blue-50 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-800">
                  {stats.departments}
                </div>
                <div className="text-sm text-gray-700">Отделений</div>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-800">
                  {stats.doctors}
                </div>
                <div className="text-sm text-gray-700">Врачей</div>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-800">
                  {stats.beds}
                </div>
                <div className="text-sm text-gray-700">Койко-мест</div>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-800">
                  {stats.patientsPerYear.toLocaleString()}
                </div>
                <div className="text-sm text-gray-700">Пациентов в год</div>
              </div>
            </div>
          </section>

          {/* Gallery */}
          <section className="mt-10">
            <h3 className="text-xl font-semibold text-blue-800">
              Галерея больницы
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Фотографии зданий, отделений и коллектива.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              {images.map((src, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setLightboxOpen(true);
                  }}
                  className="overflow-hidden rounded-md bg-gray-100"
                >
                  <img
                    src={src}
                    alt={`gallery-${idx}`}
                    className="w-full h-40 object-cover"
                  />
                </button>
              ))}
            </div>

            {lightboxOpen && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                onClick={() => setLightboxOpen(false)}
              >
                <div
                  className="relative max-w-4xl w-full mx-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={images[currentIndex]}
                    alt={`light-${currentIndex}`}
                    className="w-full h-[60vh] object-contain rounded"
                  />

                  <button
                    onClick={() =>
                      setCurrentIndex(
                        (i) => (i - 1 + images.length) % images.length,
                      )
                    }
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2"
                    aria-label="Prev"
                  >
                    ‹
                  </button>

                  <button
                    onClick={() =>
                      setCurrentIndex((i) => (i + 1) % images.length)
                    }
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2"
                    aria-label="Next"
                  >
                    ›
                  </button>

                  <button
                    onClick={() => setLightboxOpen(false)}
                    className="absolute right-2 top-2 bg-white/80 rounded-full p-2"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}
          </section>

          {/* Leadership & Quick links / Contacts */}
          <section className="mt-10 grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-1 flex items-start gap-4">
              <img
                src={adminImg}
                alt="Главный врач"
                className="w-28 h-28 object-cover rounded-lg shadow"
              />
              <div>
                <h4 className="font-semibold">Главный врач</h4>
                <div className="text-sm text-gray-700 mt-1">
                  Доктор медицинских наук, руководитель лечебного учреждения.
                  Ответственный за стратегию развития и качество медицинской
                  помощи.
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h4 className="font-semibold">Быстрые ссылки</h4>
                  <p className="text-sm text-gray-600">
                    Перейти к важным разделам сайта
                  </p>
                </div>

                <div className="flex gap-2">
                  <Link
                    to="/doctors"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Наши врачи
                  </Link>
                  <Link
                    to="/departments"
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200"
                  >
                    Отделения
                  </Link>
                  <Link
                    to="/contacts"
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200"
                  >
                    Контакты
                  </Link>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold">Контактная информация</h4>
                <div className="mt-2 text-sm text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <strong>Адрес:</strong>
                    <div>г. Талас</div>
                  </div>

                  <div>
                    <strong>Телефон:</strong>
                    <div>+996 (997) 70-40-07</div>
                  </div>

                  <div>
                    <strong>Email:</strong>
                    <div>talasoob@gmail.com</div>
                  </div>

                  <div>
                    <strong>Часы работы:</strong>
                    <div>Пн–Пт: 09:00–17:00; Сб: 09:00–13:00; Вс: выходной</div>
                  </div>
                </div>

                <div className="mt-4">
                  <h5 className="text-sm font-medium text-gray-600">Карта</h5>
                  <div className="mt-2 w-full h-40 bg-gray-200 rounded overflow-hidden">
                    {/* Placeholder for embedded map — replace with iframe when coordinates are known */}
                    <iframe
                      title="map"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=70.0%2C41.0%2C72.0%2C43.0&layer=mapnik"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default About;
