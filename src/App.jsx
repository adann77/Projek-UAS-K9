import React from "react";
import "./assets/tailwind.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Guest Pages
import GuestMedicalPage from "./guest/GuestMedicalPage";
import Reviews from "./guest/Reviews";
import ContactUs from "./guest/ContactUs";
import AboutUs from "./guest/AboutUs";
import Service from "./guest/Service";
import ServiceDetailPage from "./guest/ServiceDetailPage";
import Artikel from "./guest/Artikel";
import DetailArtikel from "./guest/DetailArtikel";
import FAQPage from "./guest/FAQPage";
import BookingPage from "./guest/BookingPage";

// Auth Pages
import Login from "./auth/Login";
import Register from "./auth/Register";

// Layouts
import GuestLayout from "./layout/GuestLayout";
import AuthLayout from "./layout/AuthLayout";

function App() {
  return (
    <Routes>
      {/* Layout untuk halaman tamu */}
      <Route element={<GuestLayout />}>
        <Route path="/guest" element={<GuestMedicalPage />} />
        <Route path="/" element={<GuestMedicalPage />} />
        <Route path="/reviews" element={<Reviews />} /> 
        <Route path="/ContactUs" element={<ContactUs />} /> 
        <Route path="/AboutUs" element={<AboutUs />} />    
        <Route path="/service" element={<Service />} />  
        <Route path="/service/:id" element={<ServiceDetailPage />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/artikel/:id" element={<DetailArtikel />} />
        <Route path="FAQ" element={<FAQPage />} />
        <Route path="/booking/:id" element={<BookingPage />} />

      </Route>

      {/* Layout untuk halaman login/register */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
