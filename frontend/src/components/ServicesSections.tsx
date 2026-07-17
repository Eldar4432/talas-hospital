import ServiceCard from "./ServiceCard";
import { services } from "../data/services";

function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2
            className="
            text-3xl
            md:text-4xl
            font-bold
            text-blue-800
            "
          >
            Медицинские услуги
          </h2>

          <p
            className="
            mt-4
            text-gray-600
            leading-relaxed
            "
          >
            Больница оказывает широкий спектр медицинских услуг для диагностики,
            лечения и профилактики заболеваний.
          </p>
        </div>

        <div
          className="
          grid
          md:grid-cols-3
          gap-6
          mt-10
          "
        >
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
