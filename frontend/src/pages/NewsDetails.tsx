import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api/api";

interface News {
  id: number;
  title: string;
  date: string;
  text: string;
  image: string;
}

function NewsDetails() {
  const { id } = useParams();

  const [news, setNews] = useState<News | null>(null);

  useEffect(() => {
    api
      .get(`/news/${id}`)
      .then((res) => {
        setNews(res.data);
      })
      .catch(console.error);
  }, [id]);

  if (!news) {
    return <div className="py-20 text-center">Новость не найдена</div>;
  }

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        {news.image && (
          <img
            src={`http://localhost:5000${news.image}`}
            alt={news.title}
            className="
            w-full
            h-96
            object-cover
            rounded-xl
            "
          />
        )}

        <p className="mt-6 text-gray-500">
          {new Date(news.date).toLocaleDateString("ru-RU")}
        </p>

        <h1
          className="
          mt-3
          text-4xl
          font-bold
          text-blue-800
          "
        >
          {news.title}
        </h1>

        <div
          className="
          mt-8
          text-lg
          leading-8
          text-gray-700
          "
        >
          {news.text}
        </div>
      </div>
    </section>
  );
}

export default NewsDetails;
