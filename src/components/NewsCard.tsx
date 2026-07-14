type NewsItem = {
  title: string;
  date: string;
  text: string;
};

function NewsCard({ news }: { news: NewsItem }) {
  return (
    <article className="rounded-xl shadow p-6 border">
      <p className="text-gray-500">{news.date}</p>

      <h2 className="text-xl font-bold mt-3 text-blue-700">{news.title}</h2>

      <p className="mt-3 text-gray-600">{news.text}</p>

      <button className="mt-5 text-blue-700">Читать далее →</button>
    </article>
  );
}

export default NewsCard;
