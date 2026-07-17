import { Link } from "react-router-dom";
import hospitalImage from "../assets/images/hospital.jpg";
import { useEffect, useState } from "react";
import { getHospitalInfo } from "../api/hospitalInfoApi";
import type { HospitalInfo } from "../api/hospitalInfoApi";

function Hero() {
  const [hospital, setHospital] = useState<HospitalInfo | null>(null);

  useEffect(() => {
    getHospitalInfo().then(setHospital).catch(console.error);
  }, []);

  if (!hospital) {
    return null;
  }

  return (
    <section className="relative">
      <img
        src={hospitalImage}
        alt="Таласская областная больница"
        className="
        w-full
        h-[420px]
        md:h-[460px]
        object-cover
        "
      />

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-blue-950/80
        via-blue-900/60
        to-blue-900/30
        "
      />

      <div
        className="
        absolute
        inset-0
        flex
        items-center
      "
      >
        <div
          className="
          max-w-6xl
          mx-auto
          px-6
          w-full
          text-white
        "
        >
          <div className="max-w-3xl">
            <p
              className="
              text-sm
              uppercase
              tracking-wider
              text-blue-100
              mb-4
              "
            >
              Таласская область
            </p>

            <h1
              className="
              text-3xl
              md:text-5xl
              font-bold
              leading-tight
              "
            >
              {hospital.name}
            </h1>

            <p
              className="
              mt-5
              text-base
              md:text-lg
              text-blue-50
              leading-7
              "
            >
              {hospital.description}
            </p>

            <div
              className="
              mt-8
            "
            >
              <Link
                to="/doctors"
                className="
                inline-flex
                items-center
                bg-white
                text-blue-900
                px-7
                py-3
                rounded-lg
                font-semibold
                hover:bg-blue-50
                transition
                "
              >
                Наши врачи →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
