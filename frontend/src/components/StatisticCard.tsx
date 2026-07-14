type Statistic = {
  title: string;
  value: string;
};

function StatisticCard({ statistic }: { statistic: Statistic }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 text-center">
      <h3 className="text-4xl font-bold text-blue-800">{statistic.value}</h3>

      <p className="mt-3 text-gray-600 text-lg">{statistic.title}</p>
    </div>
  );
}

export default StatisticCard;
