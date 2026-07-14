import DepartmentsCard from "../components/DepartmentCard";
import NewsCard from "../components/NewsCard";
import DoctorsSection from "../components/DoctorsSection";
import ContactsCard from "../components/ContactCard";
import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import Doctors from "./Doctors";

function Home() {
  return (
    <main>
      <Hero />
      <Statistics />
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-blue-800">
            Забота о здоровье жителей Таласской области
          </h2>

          <p className="mt-6 text-xl text-gray-600">
            Современная медицинская помощь, опытные специалисты и забота о
            каждом пациенте.
          </p>

          <button className="mt-8 bg-blue-700 text-white px-8 py-3 rounded-lg">
            Записаться на прием
          </button>
        </div>
      </section>
      <DepartmentsCard />
      <Doctors />
      <NewsCard />
      <ContactsCard />
      <DoctorsSection />
    </main>
  );
}

export default Home;
