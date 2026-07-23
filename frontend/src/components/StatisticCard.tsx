interface Statistic {
  title: string;
  value: string;
}

function StatisticCard({ statistic }: { statistic: Statistic }) {
  return (
    <div
      className="
      text-center
      border
      border-blue-100
      rounded-2xl
      py-6
      px-3
      bg-white
      shadow-sm
      hover:border-blue-200
      hover:shadow-md
      transition
      "
    >
      <div
        className="
        text-2xl
        font-semibold
        text-blue-800
        "
      >
        {statistic.value}
      </div>

      <p
        className="
        mt-2
        text-sm
        text-slate-600
        "
      >
        {statistic.title}
      </p>
    </div>
  );
}

export default StatisticCard;
