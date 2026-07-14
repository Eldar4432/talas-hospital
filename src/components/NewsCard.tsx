type NewsItem = {
  title: string;
  date: string;
  text: string;
};

function NewsCard({ news }: { news: NewsItem }) {
  return (
    <article className="bg-white rounded-xl shadow p-6 border">
      <p className="text-sm text-gray-500">{news.date}</p>

      <h3 className="text-xl font-bold text-blue-700 mt-3">{news.title}</h3>

      <p className="text-gray-600 mt-3">{news.text}</p>

      <button className="mt-5 text-blue-700 font-semibold">
        Читать далее →
      </button>
    </article>
  );
}

export default NewsCard;
