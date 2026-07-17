type NewsItem = {
  id: number;
  title: string;
  date: string;
  text: string;
  image: string;
};

function NewsCard({ news }: { news: NewsItem }) {
  return (
    <article
      className="
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-sm
        border
        hover:shadow-xl
        transition
        duration-300
      "
    >
      <div className="h-52 overflow-hidden">
        <img
          src={
            news.image
              ? `http://localhost:5000${news.image}`
              : "/news-placeholder.jpg"
          }
          alt={news.title}
          className="
            w-full
            h-full
            object-cover
            hover:scale-105
            transition
            duration-500
          "
        />
      </div>

      <div className="p-6">
        <p className="text-sm text-gray-500">
          {new Date(news.date).toLocaleDateString("ru-RU")}
        </p>

        <h3
          className="
          text-xl
          font-bold
          text-blue-800
          mt-3
          line-clamp-2
          "
        >
          {news.title}
        </h3>

        <p
          className="
          mt-3
          text-gray-600
          line-clamp-3
          "
        >
          {news.text}
        </p>

        <button
          className="
          mt-5
          text-blue-700
          font-semibold
          hover:text-blue-900
          "
        >
          Читать далее →
        </button>
      </div>
    </article>
  );
}

export default NewsCard;
