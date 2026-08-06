import { Link } from "react-router-dom";
import hospitalImage from "../assets/images/DJI_0003.jpg.jpeg";
import shanhaiImage from "../assets/images/DJI_0005.jpg.jpeg";

import eyesdepartmentImage from "../assets/images/eyesdepatment.jpeg";
import administationImage from "../assets/images/administation.jpeg";
import kardiologiaImage from "../assets/images/DJI_0077.jpg.jpeg";
import receptionImage from "../assets/images/DJI_0052.jpg.jpeg";
import { useEffect, useState } from "react";
import { getHospitalInfo } from "../api/hospitalInfoApi";
import type { HospitalInfo } from "../api/hospitalInfoApi";

const heroImages = [
  hospitalImage,
  shanhaiImage,
  eyesdepartmentImage,
  administationImage,
  kardiologiaImage,
  receptionImage,
];

function Hero() {
  const [hospital, setHospital] = useState<HospitalInfo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [slideActive, setSlideActive] = useState(false);

  useEffect(() => {
    getHospitalInfo().then(setHospital).catch(console.error);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNextIndex((current) =>
        current === null ? (currentIndex + 1) % heroImages.length : current,
      );
      setSlideActive(false);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    if (nextIndex === null) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      setSlideActive(true);
    });

    const timeout = setTimeout(() => {
      setCurrentIndex(nextIndex);
      setNextIndex(null);
      setSlideActive(false);
    }, 700);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timeout);
    };
  }, [nextIndex]);

  if (!hospital) {
    return null;
  }

  return (
    <section className="relative overflow-hidden">
      <img
        src={heroImages[currentIndex]}
        alt="Таласская областная объединенная больница"
        className="w-full h-[420px] md:h-[460px] object-cover"
      />

      {nextIndex !== null && (
        <img
          src={heroImages[nextIndex]}
          alt="Таласская областная больница"
          className={`absolute inset-0 w-full h-[420px] md:h-[460px] object-cover transform transition-transform duration-700 ease-in-out ${
            slideActive ? "translate-x-0" : "translate-x-full"
          }`}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-blue-900/60 to-blue-900/30" />

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full text-white">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wider text-blue-100 mb-4">
              Таласская область
            </p>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {hospital.name}
            </h1>

            <p className="mt-5 text-base md:text-lg text-blue-50 leading-7">
              {hospital.description}
            </p>

            <div className="mt-8">
              <Link
                to="/doctors"
                className="inline-flex items-center bg-white text-blue-900 px-7 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
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
