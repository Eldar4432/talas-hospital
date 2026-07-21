import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Departments from "./pages/Departments";
import Doctors from "./pages/Doctors";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails.tsx";
import Contacts from "./pages/Contacts";
import Documents from "./pages/Documents";
import DoctorDetails from "./pages/DoctorDetails";
import DepartmentDetails from "./pages/DepartmentDetails";
import Appointment from "./pages/Appointment";
import Vacancies from "./pages/Vacancies.tsx";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import AdminDoctors from "./pages/AdminDoctors";
import AdminNews from "./pages/AdminNews";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDepartments from "./pages/AdminDepartments";
import AdminContacts from "./pages/AdminContacts";
import AdminDocuments from "./pages/AdminDocuments";
import AdminHospitalInfo from "./pages/AdminHospitalInfo";
import AdminLayout from "./components/AdminLayout.tsx";

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
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Admin />} />

          <Route path="doctors" element={<AdminDoctors />} />

          <Route path="news" element={<AdminNews />} />

          <Route path="contacts" element={<AdminContacts />} />

          <Route path="departments" element={<AdminDepartments />} />

          <Route path="documents" element={<AdminDocuments />} />

          <Route path="hospital-info" element={<AdminHospitalInfo />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
