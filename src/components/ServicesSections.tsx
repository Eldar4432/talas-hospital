import ServiceCard from "./ServiceCard";
import { services } from "../data/services";

function ServicesSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-800">
          Медицинские услуги
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
