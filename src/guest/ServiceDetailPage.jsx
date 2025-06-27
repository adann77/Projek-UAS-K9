import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
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
  },
  {
    id: "jantung",
    title: "Pemeriksaan Jantung",
    description: "Pemeriksaan lengkap kesehatan jantung dan EKG.",
    price: 350000,
    duration: 45,
    category: "Pemeriksaan",
    icon: <FaHeartbeat />,
  },
  {
    id: "darah",
    title: "Tes Laboratorium Darah",
    description: "Pemeriksaan darah lengkap dan analisis komprehensif.",
    price: 200000,
    duration: 15,
    category: "Laboratorium",
    icon: <FaVials />,
  },
  {
    id: "radiologi",
    title: "Pemeriksaan Radiologi",
    description: "CT Scan, Rontgen, dan MRI untuk diagnosis lanjutan.",
    price: 500000,
    duration: 60,
    category: "Pemeriksaan",
    icon: <FaXRay />,
  },
  {
    id: "spesialis",
    title: "Konsultasi Spesialis",
    description: "Bertemu langsung dengan dokter spesialis sesuai kebutuhan.",
    price: 250000,
    duration: 40,
    category: "Konsultasi",
    icon: <FaNotesMedical />,
  },
  {
    id: "saraf",
    title: "Pemeriksaan Saraf",
    description: "Pemeriksaan menyeluruh untuk masalah neurologis.",
    price: 400000,
    duration: 50,
    category: "Pemeriksaan",
    icon: <FaBrain />,
  },
];

const ServiceDetailPage = () => {
  const { id } = useParams();
  const service = services.find((item) => item.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Layanan tidak ditemukan
          </h2>
          <Link to="/service" className="text-blue-600 underline">
            Kembali ke daftar layanan
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
    {/* Header */}
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center space-x-3">
        <img
          src="/img/logo rekam medis.png" 
          alt="Logo SIMEDI"
          className="h-12 w-12 object-contain p-1"
        />
        <span className="text-2xl font-bold text-blue-600">SIMEDI</span>
      </div>
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
          <Link to="/reviews" className="hover:text-blue-600 transition-colors">
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

      {/* Detail Layanan */}
      <div className="px-4 py-10 max-w-4xl mx-auto">
        <Link
          to="/service"
          className="flex items-center gap-2 text-blue-600 hover:underline mb-6"
        >
          <FaArrowLeft />
          Kembali ke layanan
        </Link>

        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 rounded-3xl shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white p-4 rounded-full shadow-lg">
              {React.cloneElement(service.icon, {
                className: "text-blue-600 w-8 h-8",
              })}
            </div>
            <div>
              <h1 className="text-3xl font-bold">{service.title}</h1>
              <p className="text-sm text-white/80">{service.category}</p>
            </div>
          </div>

          <p className="text-white text-lg mb-6">{service.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white text-blue-800 p-4 rounded-xl shadow">
              <p className="text-sm font-semibold">Harga</p>
              <p className="text-xl font-bold">
                Rp {service.price.toLocaleString()}
              </p>
            </div>
            <div className="bg-white text-blue-800 p-4 rounded-xl shadow">
              <p className="text-sm font-semibold">Durasi</p>
              <p className="text-xl font-bold">{service.duration} menit</p>
            </div>
          </div>

          {/* Tombol Pesan Sekarang */}
          <Link
            to={`/booking/${service.id}`}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-md"
          >
            Pesan Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
