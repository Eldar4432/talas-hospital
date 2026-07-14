import { Link } from "react-router-dom";
import hospitalImage from "../assets/images/hospital.jpg";
import { hospital } from "../data/hospital";

function Hero() {
  return (
    <section className="relative">
      <img
        src={hospitalImage}
        alt="Таласская больница"
        className="w-full h-[500px] object-cover"
      />

      <div className="absolute inset-0 bg-blue-900/60 flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold max-w-4xl">
            {hospital.name}
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-2xl">
            {hospital.description}
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <Link
              to="/contacts"
              className="bg-white text-blue-800 px-8 py-3 rounded-lg font-bold"
            >
              Записаться на прием
            </Link>

            <Link
              to="/doctors"
              className="border border-white px-8 py-3 rounded-lg font-bold"
            >
              Наши врачи
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
