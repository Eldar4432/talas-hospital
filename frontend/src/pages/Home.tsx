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
      <StatisticsSection />
      <ServicesSection />
      <DepartmentsSection />
      <DoctorsSection />
      <NewsSection />
      <ContactsSection />
    </main>
  );
}

export default Home;
