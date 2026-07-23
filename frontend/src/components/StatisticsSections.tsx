import StatisticCard from "./StatisticCard";
import { statistics } from "../data/statistics";

function StatisticsSection() {
  return (
    <section className="bg-blue-50/40 py-10">
      <div className="mx-auto max-w-5xl px-5">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {statistics.map((statistic) => (
            <StatisticCard key={statistic.title} statistic={statistic} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;
