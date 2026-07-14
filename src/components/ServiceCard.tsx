type Service = {
  title: string;
  description: string;
};

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 border">
      <h3 className="text-xl font-bold text-blue-700">{service.title}</h3>

      <p className="mt-3 text-gray-600">{service.description}</p>
    </div>
  );
}

export default ServiceCard;
