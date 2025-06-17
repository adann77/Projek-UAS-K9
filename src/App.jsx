import React, { Suspense, lazy } from "react";
import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";

// Import layouts yang sering digunakan secara normal
import GuestLayout from "./layout/GuestLayout";
import AuthLayout from "./layout/AuthLayout";
import AdminLayout from "./layout/AdminLayout";

// Lazy load halaman yang besar atau jarang diakses
const ServiceDetailPage = lazy(() => import("./guest/ServiceDetailPage"));
const DetailArtikel = lazy(() => import("./guest/DetailArtikel"));
const BookingPage = lazy(() => import("./guest/BookingPage"));

// Lazy load auth pages
const Login = lazy(() => import("./auth/Login"));
const Register = lazy(() => import("./auth/Register"));

// Import halaman utama secara normal untuk performa yang lebih baik
import GuestMedicalPage from "./guest/GuestMedicalPage";
import AboutUs from "./guest/AboutUs";
import Reviews from "./guest/Reviews";
import ContactUs from "./guest/ContactUs";
import Service from "./guest/Service";
import Artikel from "./guest/Artikel";
import FAQPage from "./guest/FAQPage";
import Loading from "./guest/Loading";

//admin
import DashboardAdmin from "./admin/Dashboard";
import DokterPage from "./admin/DokterPage";
import ManajemenPasien from "./admin/ManajemenPasien";
import KontakPage from "./admin/KontakPage";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Layout untuk halaman tamu */}
        <Route element={<GuestLayout />}>
          <Route path="/guest" element={<GuestMedicalPage />} />
          <Route path="/" element={<GuestMedicalPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service/:id" element={<ServiceDetailPage />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/artikel/:id" element={<DetailArtikel />} />
          <Route path="/FAQ" element={<FAQPage />} />
          <Route path="/booking/:id" element={<BookingPage />} />
        </Route>

        {/* Admin pages */}
        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<DashboardAdmin />} />
          <Route path="/dokter" element={<DokterPage />} />
          <Route path="/pasien" element={<ManajemenPasien />} />
          <Route path="/kontak" element={<KontakPage />} />
        </Route>

        {/* Layout untuk halaman login/register */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
