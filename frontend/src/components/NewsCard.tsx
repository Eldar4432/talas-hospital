import { Link } from "react-router-dom";

interface News {
  id: number;
  title: string;
  date: string;
  text: string;
  image: string;
}

function NewsCard({ news }: { news: News }) {
  return (
    <article
      className="
      bg-white
      border
      border-gray-200
      rounded-xl
      overflow-hidden
      hover:shadow-lg
      transition
      "
    >
      {news.image && (
        <img
          src={`http://localhost:5000${news.image}`}
          alt={news.title}
          className="
          w-full
          h-48
          object-cover
          "
        />
      )}

      <div className="p-6">
        <p
          className="
          text-sm
          text-gray-500
          "
        >
          {new Date(news.date).toLocaleDateString("ru-RU")}
        </p>

        <h2
          className="
          mt-3
          text-xl
          font-semibold
          text-blue-900
          "
        >
          {news.title}
        </h2>

        <p
          className="
          mt-3
          text-gray-600
          line-clamp-3
          "
        >
          {news.text}
        </p>

        <Link
          to={`/news/${news.id}`}
          className="
          inline-block
          mt-5
          text-blue-700
          font-medium
          hover:text-blue-900
          "
        >
          Читать далее →
        </Link>
      </div>
    </article>
  );
}

export default NewsCard;
