import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { getNews } from "../api/newsApi";
import type { News } from "../api/newsApi";
import { Link } from "react-router-dom";

function NewsSection() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    getNews().then(setNews).catch(console.error);
  }, []);

  return (
    <section className="bg-blue-50/70 py-12">
      <div className="mx-auto max-w-5xl px-5">
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
