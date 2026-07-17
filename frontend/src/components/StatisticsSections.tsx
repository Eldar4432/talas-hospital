import StatisticCard from "./StatisticCard";
import { statistics } from "../data/statistics";

function StatisticsSection() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statistics.map((statistic) => (
            <StatisticCard key={statistic.title} statistic={statistic} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;
