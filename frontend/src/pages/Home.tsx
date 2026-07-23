import DepartmentsSection from "../components/DepartmentsSection";
import DoctorsSection from "../components/DoctorsSection";
import NewsSection from "../components/NewsSelection";
import Hero from "../components/Hero";
import StatisticsSection from "../components/StatisticsSections";
import ContactsSection from "../components/ContactsSelections";
import ServicesSection from "../components/ServicesSections";

function Home() {
  return (
    <main>
      <Hero />
      <NewsSection />

      <StatisticsSection />
      <ServicesSection />
      <DepartmentsSection />
      <DoctorsSection />
      <ContactsSection />
    </main>
  );
}

export default Home;
