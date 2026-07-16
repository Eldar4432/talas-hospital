import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Departments from "./pages/Departments";
import Doctors from "./pages/Doctors";
import News from "./pages/News.tsx";
import Contacts from "./pages/Contacts";
import Documents from "./pages/Documents";
import DoctorDetails from "./pages/DoctorDetails";
import DepartmentDetails from "./pages/DepartmentDetails";
import Appointment from "./pages/Appointment";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import AdminDoctors from "./pages/AdminDoctors";
import AdminNews from "./pages/AdminNews";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminAppointments from "./pages/AdminAppointments";
import AdminDepartments from "./pages/AdminDepartments";
import AdminContacts from "./pages/AdminContacts";
import AdminDocuments from "./pages/AdminDocuments";

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
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/admin/doctors"
          element={
            <ProtectedRoute>
              <AdminDoctors />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/news"
          element={
            <ProtectedRoute>
              <AdminNews />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/appointments"
          element={
            <ProtectedRoute>
              <AdminAppointments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/contacts"
          element={
            <ProtectedRoute>
              <AdminContacts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/departments"
          element={
            <ProtectedRoute>
              <AdminDepartments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/documents"
          element={
            <ProtectedRoute>
              <AdminDocuments />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
