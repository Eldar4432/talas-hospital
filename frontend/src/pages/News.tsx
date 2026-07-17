import { useEffect, useState } from "react";
import { getNews } from "../api/newsApi";
import type { News } from "../api/newsApi";
import NewsCard from "../components/NewsCard";

function News() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    getNews().then(setNews).catch(console.error);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900">Новости больницы</h1>

          <p className="mt-3 text-gray-600">
            Последние события, объявления и информация учреждения
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;
