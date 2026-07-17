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
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2
              className="
              text-3xl
              md:text-4xl
              font-bold
              text-blue-900
              "
            >
              Новости больницы
            </h2>

            <p className="mt-3 text-gray-600">
              Последние события и официальная информация учреждения
            </p>
          </div>

          <Link
            to="/news"
            className="
            hidden
            md:block
            text-blue-700
            font-medium
            hover:text-blue-900
            "
          >
            Все новости →
          </Link>
        </div>

        <div
          className="
          grid
          md:grid-cols-3
          gap-6
          "
        >
          {news.slice(0, 3).map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/news"
            className="
            text-blue-700
            font-medium
            "
          >
            Все новости →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
