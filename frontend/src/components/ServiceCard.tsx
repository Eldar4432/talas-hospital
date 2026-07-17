interface Service {
  title: string;
  description: string;
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div
      className="
      bg-white
      border
      border-gray-200
      rounded-xl
      p-6
      hover:border-blue-300
      transition
      "
    >
      <h3
        className="
        text-xl
        font-semibold
        text-blue-800
        "
      >
        {service.title}
      </h3>

      <p
        className="
        mt-3
        text-gray-600
        leading-relaxed
        "
      >
        {service.description}
      </p>
    </div>
  );
}

export default ServiceCard;
