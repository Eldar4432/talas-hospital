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
    <article className="group overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      {news.image && (
        <img
          src={`http://localhost:5000${news.image}`}
          alt={news.title}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      )}

      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-blue-500">
          {new Date(news.date).toLocaleDateString("ru-RU")}
        </p>

        <h2 className="mt-3 text-lg font-semibold leading-snug text-blue-900">
          {news.title}
        </h2>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
          {news.text}
        </p>

        <Link
          to={`/news/${news.id}`}
          className="mt-5 inline-flex items-center text-sm font-medium text-blue-800 transition hover:text-blue-900"
        >
          Читать далее →
        </Link>
      </div>
    </article>
  );
}

export default NewsCard;
