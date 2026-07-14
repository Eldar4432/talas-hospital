import hospitalImage from "../assets/images/hospital.jpg";

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
          <h1 className="text-5xl font-bold">
            Таласская областная объединённая больница
          </h1>

          <p className="mt-6 text-xl max-w-2xl">
            Качественная медицинская помощь, современные технологии и забота о
            здоровье каждого пациента.
          </p>

          <button className="mt-8 bg-white text-blue-800 px-8 py-3 rounded-lg font-bold">
            Записаться на прием
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
