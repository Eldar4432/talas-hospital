import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Departments from "./pages/Departments";
import Doctors from "./pages/Doctors";
import News from "./pages/News";
import Contacts from "./pages/Contacts";
import DoctorDetails from "./pages/DoctorDetails";
import DepartmentDetails from "./pages/DepartmentDetails";
import Appointment from "./pages/Appointment";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorDetails />} />
        <Route path="/departments/:id" element={<DepartmentDetails />} />
        <Route path="/news" element={<News />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
