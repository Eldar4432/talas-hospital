type Department = {
  title: string;
  description: string;
};

function DepartmentCard({ department }: { department: Department }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 border">
      <h3 className="text-xl font-bold text-blue-700">{department.title}</h3>

      <p className="mt-3 text-gray-600">{department.description}</p>

      <button className="mt-5 text-blue-700 font-semibold">Подробнее →</button>
    </div>
  );
}

export default DepartmentCard;
