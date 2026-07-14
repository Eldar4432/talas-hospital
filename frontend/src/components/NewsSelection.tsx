import NewsCard from "./NewsCard";
import { news } from "../data/news";

function NewsSection() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-800">
          Новости больницы
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {news.slice(0, 3).map((item) => (
            <NewsCard key={item.title} news={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
