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
      border-gray-200
      rounded-xl
      py-8
      px-4
      bg-white
      hover:border-blue-300
      transition
      "
    >
      <div
        className="
        text-4xl
        font-bold
        text-blue-800
        "
      >
        {statistic.value}
      </div>

      <p
        className="
        mt-3
        text-gray-600
        "
      >
        {statistic.title}
      </p>
    </div>
  );
}

export default StatisticCard;
