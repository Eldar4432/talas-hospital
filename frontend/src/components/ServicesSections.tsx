import ServiceCard from "./ServiceCard";
import { services } from "../data/services";

function ServicesSection() {
  return (
    <section className="bg-blue-50/60 py-10">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mb-7">
          <h2 className="text-2xl font-semibold text-blue-800">
            Медицинские услуги
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Больница оказывает широкий спектр медицинских услуг для диагностики,
            лечения и профилактики заболеваний.
          </p>
        </div>

        <div
          className="
          grid
          gap-4
          sm:grid-cols-2
          xl:grid-cols-3
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
