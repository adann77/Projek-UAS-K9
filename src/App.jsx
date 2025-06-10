import React from "react";
import "./assets/tailwind.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Guest Pages
import GuestMedicalPage from "./guest/GuestMedicalPage";
import Keunggulan from "./guest/Keunggulan";
import Kontak from "./guest/Kontak";

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
        <Route path="/keunggulan" element={<Keunggulan />} /> 
        <Route path="/kontak" element={<Kontak />} />         
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
