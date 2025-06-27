import React from "react";
import services from "../data/layanan.json";
import testimonials from "../data/testimonials.json";
import { Link } from "react-router-dom";

const GuestMedicalPage = () => {
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

      {/* Hero Section */}
      <section className="px-8 py-16 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-6 z-20 relative">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight group cursor-default">
                <span className="inline-block transition-all duration-300 hover:scale-105 hover:text-blue-700">
                  Kelola & Akses
                </span>{" "}
                <span className="text-blue-600 inline-block transition-all duration-500 hover:scale-110 hover:text-blue-700 hover:drop-shadow-lg">
                  Rekam Medis
                </span>{" "}
                <span className="inline-block transition-all duration-300 hover:scale-105 hover:text-blue-700">
                  Anda
                </span>
              </h1>
              <p className="text-gray-600 text-lg max-w-md transition-all duration-300 hover:text-gray-700 hover:scale-105 cursor-default">
                Platform digital untuk menyimpan, mengelola, dan membagikan data
                rekam medis secara aman dan praktis.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 relative z-10 group">
              <div className="relative flex justify-center items-center">
                {/* Background Circle */}
                <div className="absolute inset-0 bg-blue-300 rounded-full opacity-20 transform scale-110 w-96 h-96 mx-auto transition-all duration-700 group-hover:scale-125 group-hover:opacity-30"></div>
                {/* Doctor Image */}
                <div className="relative z-10 w-full max-w-md">
                  <img
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=600&fit=crop&crop=face"
                    alt="Doctor"
                    className="w-full h-auto object-cover rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl cursor-pointer"
                    style={{
                      aspectRatio: "4/5",
                      maxHeight: "500px",
                      objectPosition: "center top",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Bar */}
          <div className="mt-12 relative z-30">
            <div className="bg-blue-600 text-white rounded-2xl px-8 py-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer">
              <div className="flex justify-around items-center text-center">
                <div className="group transition-all duration-300 hover:scale-110">
                  <div className="text-3xl font-bold transition-all duration-300 group-hover:scale-125 group-hover:text-yellow-300">
                    24/7
                  </div>
                  <div className="text-blue-100 text-sm transition-all duration-300 group-hover:text-white">
                    Online Support
                  </div>
                </div>
                <div className="border-l border-blue-400 h-12 transition-all duration-300 hover:border-blue-200"></div>
                <div className="group transition-all duration-300 hover:scale-110">
                  <div className="text-3xl font-bold transition-all duration-300 group-hover:scale-125 group-hover:text-yellow-300">
                    100+
                  </div>
                  <div className="text-blue-100 text-sm transition-all duration-300 group-hover:text-white">
                    Doctors
                  </div>
                </div>
                <div className="border-l border-blue-400 h-12 transition-all duration-300 hover:border-blue-200"></div>
                <div className="group transition-all duration-300 hover:scale-110">
                  <div className="text-3xl font-bold transition-all duration-300 group-hover:scale-125 group-hover:text-yellow-300">
                    1M+
                  </div>
                  <div className="text-blue-100 text-sm transition-all duration-300 group-hover:text-white">
                    Active Patients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-8 bg-white relative z-40">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 transition-all duration-300 hover:text-blue-600 hover:scale-105 cursor-default">
            Layanan Unggulan Kami
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl shadow-lg transition-all duration-500 text-center cursor-pointer hover:transform hover:scale-105 hover:-translate-y-2 ${
                  index === 1
                    ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-blue-200 hover:shadow-2xl"
                    : "bg-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 hover:text-white border border-gray-100 hover:shadow-2xl"
                }`}
              >
                <div className="text-5xl mb-6 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                  {service.icon}
                </div>
                <h4
                  className={`text-xl font-bold mb-4 transition-all duration-300 ${
                    index === 1
                      ? "text-white group-hover:scale-110"
                      : "text-gray-800 group-hover:text-white group-hover:scale-110"
                  }`}
                >
                  {service.title}
                </h4>
                <p
                  className={`text-sm leading-relaxed transition-all duration-300 group-hover:scale-105 ${
                    index === 1
                      ? "text-blue-100"
                      : "text-gray-600 group-hover:text-blue-100"
                  }`}
                >
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-8 relative z-40">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 transition-all duration-300 hover:text-blue-600 hover:scale-105 cursor-default">
            Testimoni Pasien
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testi, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100 flex flex-col items-center text-center group cursor-pointer"
              >
                <img
                  src={testi.image}
                  alt={testi.name}
                  className="w-20 h-20 object-cover rounded-full border-4 border-blue-600 shadow-md mb-4 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-700"
                />
                <p className="text-gray-700 mb-4 leading-relaxed italic transition-all duration-300 group-hover:text-gray-800 group-hover:scale-105">
                  "{testi.comment}"
                </p>
                <h5 className="font-semibold text-blue-600 text-lg transition-all duration-300 group-hover:text-blue-700 group-hover:scale-110">
                  {testi.name}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuestMedicalPage;
