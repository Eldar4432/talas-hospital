import DepartmentsSection from "../components/DepartmentsSection";
import DoctorsSection from "../components/DoctorsSection";
import NewsSection from "../components/NewsSelection";
import Hero from "../components/Hero";
import StatisticsSection from "../components/StatisticsSections";
import Doctors from "./Doctors";
import ContactsSection from "../components/ContactsSelections";
import ServicesSection from "../components/ServicesSections";

function Home() {
  return (
    <main>
      <Hero />
      <StatisticsSection />
      <ServicesSection />
      <DepartmentsSection />
      <NewsSection />
      <Doctors />
      <ContactsSection />
      {/* <DoctorsSection /> */}
    </main>
  );
}

export default Home;
