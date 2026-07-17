import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { getNews } from "../api/newsApi";
import type { News } from "../api/newsApi";

function News() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    getNews().then(setNews).catch(console.error);
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <h1
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-blue-900
            "
          >
            Новости больницы
          </h1>

          <p
            className="
            mt-4
            text-gray-600
            text-lg
            "
          >
            Официальная информация о событиях, мероприятиях и деятельности
            Таласской областной объединённой больницы.
          </p>
        </div>

        <div
          className="
          grid
          md:grid-cols-3
          gap-8
          "
        >
          {news.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;
