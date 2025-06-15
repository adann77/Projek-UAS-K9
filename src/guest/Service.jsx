import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaStethoscope,
  FaHeartbeat,
  FaVials,
  FaXRay,
  FaNotesMedical,
  FaBrain,
} from "react-icons/fa";

const services = [
  {
    id: "umum",
    title: "Konsultasi Dokter Umum",
    description: "Konsultasi medis umum dengan dokter berpengalaman.",
    price: 150000,
    duration: 30,
    category: "Konsultasi",
    icon: <FaStethoscope />,
    iconColor: "text-blue-600", // Warna biru untuk konsultasi umum
  },
  {
    id: "jantung",
    title: "Pemeriksaan Jantung",
    description: "Pemeriksaan lengkap kesehatan jantung dan EKG.",
    price: 350000,
    duration: 45,
    category: "Pemeriksaan",
    icon: <FaHeartbeat />,
    iconColor: "text-red-600", // Warna merah untuk jantung
  },
  {
    id: "darah",
    title: "Tes Laboratorium Darah",
    description: "Pemeriksaan darah lengkap dan analisis komprehensif.",
    price: 200000,
    duration: 15,
    category: "Laboratorium",
    icon: <FaVials />,
    iconColor: "text-red-500", // Warna merah untuk darah
  },
  {
    id: "radiologi",
    title: "Pemeriksaan Radiologi",
    description: "CT Scan, Rontgen, dan MRI untuk diagnosis lanjutan.",
    price: 500000,
    duration: 60,
    category: "Pemeriksaan",
    icon: <FaXRay />,
    iconColor: "text-gray-600", // Warna abu-abu untuk radiologi
  },
  {
    id: "spesialis",
    title: "Konsultasi Spesialis",
    description: "Bertemu langsung dengan dokter spesialis sesuai kebutuhan.",
    price: 250000,
    duration: 40,
    category: "Konsultasi",
    icon: <FaNotesMedical />,
    iconColor: "text-green-600", // Warna hijau untuk spesialis
  },
  {
    id: "saraf",
    title: "Pemeriksaan Saraf",
    description: "Pemeriksaan menyeluruh untuk masalah neurologis.",
    price: 400000,
    duration: 50,
    category: "Pemeriksaan",
    icon: <FaBrain />,
    iconColor: "text-purple-600", // Warna ungu untuk saraf/otak
  },
];

const Service = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("Semua");

  const filteredServices = services.filter((service) => {
    const matchCategory =
      category === "Semua" || service.category === category;
    const matchSearch = service.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
   <div className="bg-white min-h-screen font-sans text-gray-800">
            {/* Header */}
            <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-10">
              <div className="text-2xl font-bold text-blue-600">SIMEDI</div>
              <nav className="space-x-6 font-medium text-gray-700 hidden md:flex">
                <Link to="/guest" className="text-blue-600 font-semibold">
                  Home
                </Link>
                <Link to="/aboutus" className="hover:text-blue-600 transition-colors">
                  AboutUs
                </Link>
                <Link to="/service" className="hover:text-blue-600 transition-colors">
                  Service
                </Link>
                <Link to="/artikel" className="hover:text-blue-600 transition-colors">
                  Artikel
                </Link>
                <Link to="/FAQ" className="hover:text-blue-600 transition-colors">
                  FAQ
                </Link>
      
                <Link
                  to="/ContactUs"
                  className="hover:text-blue-600 transition-colors"
                >
                  ContactUs
                </Link>
                <Link
                  to="/reviews"
                  className="hover:text-blue-600 transition-colors"
                >
                  Reviews
                </Link>
              </nav>
              <div className="space-x-3">
                <Link
                  to="/login"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow-md transition-colors"
                >
                  Sign up
                </Link>
              </div>
            </header>

      {/* Main */}
      <main className="px-4 sm:px-6 py-12 max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
          Layanan Rekam Medis Kami
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Pilih layanan kesehatan terbaik untuk kebutuhan medis Anda
        </p>

        {/* Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 bg-white p-6 rounded-xl shadow">
          <input
            type="text"
            placeholder="Cari layanan medis..."
            className="w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="w-full sm:w-1/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Semua">Semua</option>
            <option value="Konsultasi">Konsultasi</option>
            <option value="Pemeriksaan">Pemeriksaan</option>
            <option value="Laboratorium">Laboratorium</option>
          </select>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="p-6">
                <div className="bg-white p-3 rounded-lg shadow inline-block mb-4 transition-all duration-300 group-hover:rotate-6">
                  {React.cloneElement(service.icon, {
                    className: `w-8 h-8 ${service.iconColor}`,
                  })}
                </div>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full mb-2">
                  Tersedia
                </span>
                <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
                <p className="text-sm text-white/90 mb-4">
                  {service.description}
                </p>
                <div className="flex items-center justify-between text-white font-semibold mb-4">
                  <p>Rp {service.price.toLocaleString()}</p>
                  <p className="flex items-center gap-1 text-sm font-normal">
                    ⏱ {service.duration} menit
                  </p>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <Link
                    to={`/booking/${service.id}`}
                    className="bg-white text-blue-700 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                  >
                    Pesan Sekarang
                  </Link>
                  <Link
                    to={`/service/${service.id}`}
                    className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-700 transition"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Service;