import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { getNews } from "../api/newsApi";
import type { News } from "../api/newsApi";
import { Link } from "react-router-dom";

function NewsSection() {
  const [news, setNews] = useState<News[]>([]);
  const [activeNews, setActiveNews] = useState(0);

  useEffect(() => {
    getNews().then(setNews).catch(console.error);
  }, []);

  useEffect(() => {
    if (news.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveNews((current) => (current + 1) % news.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [news.length]);

  const featuredNews = news[activeNews];

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Актуально
            </div>

            <h2 className="text-2xl font-semibold text-blue-900 md:text-3xl">
              Новости больницы
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              Последние события и официальная информация учреждения
            </p>
          </div>

          <Link
            to="/news"
            className="hidden rounded-2xl bg-blue-800 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-900 md:block"
          >
            Все новости →
          </Link>
        </div>

        {featuredNews && (
          <article className="relative mb-10 min-h-[430px] overflow-hidden rounded-3xl border border-blue-100 bg-blue-900 shadow-lg">
            {featuredNews.image ? (
              <img
                src={`http://localhost:5000${featuredNews.image}`}
                alt={featuredNews.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700"
              />
            ) : (
              <div className="absolute inset-0 bg-blue-800" />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/55 to-blue-900/10" />

            <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-800 md:left-8 md:top-8">
              Главное событие
            </div>

            {news.length > 1 && (
              <div className="absolute right-5 top-5 flex gap-2 md:right-8 md:top-8">
                <button
                  type="button"
                  aria-label="Предыдущая новость"
                  onClick={() =>
                    setActiveNews((activeNews - 1 + news.length) % news.length)
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg text-blue-800 shadow-sm transition hover:bg-white"
                >
                  ←
                </button>
                <button
                  type="button"
                  aria-label="Следующая новость"
                  onClick={() => setActiveNews((activeNews + 1) % news.length)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg text-blue-800 shadow-sm transition hover:bg-white"
                >
                  →
                </button>
              </div>
            )}

            <div className="absolute inset-x-0 bottom-0 max-w-3xl p-5 text-white md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-blue-100">
                {new Date(featuredNews.date).toLocaleDateString("ru-RU")}
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                {featuredNews.title}
              </h3>
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-blue-50 md:text-base">
                {featuredNews.text}
              </p>
              <Link
                to={`/news/${featuredNews.id}`}
                className="mt-5 inline-flex items-center rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-blue-800 transition hover:bg-blue-50"
              >
                Читать новость →
              </Link>
            </div>

            {news.length > 1 && (
              <div className="absolute bottom-6 right-5 flex items-center gap-2 md:right-8">
                {news.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`Открыть новость ${index + 1}`}
                    onClick={() => setActiveNews(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === activeNews
                        ? "w-7 bg-blue-800"
                        : "w-2 bg-blue-200 hover:bg-blue-400"
                    }`}
                  />
                ))}
              </div>
            )}
          </article>
        )}

        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-blue-900">
            Последние новости
          </h3>
          <span className="text-xs text-slate-500">Обновления больницы</span>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {news.slice(0, 3).map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>

        <div className="mt-7 text-center md:hidden">
          <Link
            to="/news"
            className="inline-flex rounded-2xl bg-blue-800 px-4 py-2.5 text-sm font-medium text-white"
          >
            Все новости →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
