import { useEffect, useState } from "react";
import { getNews } from "../api/newsApi";
import type { News } from "../api/newsApi";

function News() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    getNews()
      .then((data) => setNews(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-800 text-center">
          Новости больницы
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {news.map((item) => (
            <article key={item.id} className="rounded-xl shadow p-6 border">
              <p className="text-gray-500">
                {new Date(item.date).toLocaleDateString("ru-RU")}
              </p>

              <h2 className="text-xl font-bold mt-3 text-blue-700">
                {item.title}
              </h2>

              <p className="mt-3 text-gray-600">{item.text}</p>

              <button className="mt-5 text-blue-700">Читать далее →</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;
