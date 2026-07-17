import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { getNews } from "../api/newsApi";
import type { News } from "../api/newsApi";

function NewsSection() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    getNews().then(setNews).catch(console.error);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">Новости больницы</h2>

          <p className="mt-3 text-gray-600">
            Последние события и важная информация
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.slice(0, 3).map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
