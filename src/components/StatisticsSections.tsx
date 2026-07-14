import StatisticCard from "./StatisticCard";
import { statistics } from "../data/statistics";

function StatisticsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {statistics.map((statistic) => (
            <StatisticCard key={statistic.title} statistic={statistic} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;
