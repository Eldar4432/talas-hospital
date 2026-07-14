import NewsCard from "../components/NewsCard";
import { news } from "../data/news";

function News() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-800 text-center">
          Новости больницы
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {news.map((item) => (
            <NewsCard key={item.title} news={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;
