import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const GuestMedicalPage = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen text-gray-800 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-10">
        <div className="flex items-center space-x-2">
          <span className="text-2xl text-blue-600">🩺</span>
          <h1 className="text-xl font-bold">
            <span className="text-gray-900">MEDI</span>
            <span className="text-blue-600">CARE</span>
          </h1>
        </div>
        <nav className="space-x-6 font-medium text-gray-700">
          <Link to="/guest" className="hover:text-blue-600">Home</Link>
          <Link to="/keunggulan" className="hover:text-blue-600">Keunggulan</Link>
          <Link to="/kontak" className="hover:text-blue-600">Kontak</Link>
        </nav>
        <div className="space-x-3">
          <Link to="/login" className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">
            Login
          </Link>
          <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow-md">
            Register
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center px-8 py-20">
        <motion.div 
          className="md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold leading-snug">
            Rekam Medis <span className="text-blue-600">Digital</span> & Aman
          </h2>
          <p className="text-gray-600 text-lg">
            Simpan dan akses riwayat kesehatan Anda dari mana saja, kapan saja.
          </p>
          <Link to="/register">
            <button className="bg-blue-600 text-white px-6 py-3 mt-4 rounded-lg shadow-lg hover:bg-blue-700">
              Daftar Sekarang
            </button>
          </Link>
        </motion.div>
        <motion.div 
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
        >
          <img src="/img/rekam medis.jpg" alt="Ilustrasi Medis" className="max-w-md w-full rounded-xl shadow-lg" />
        </motion.div>
      </section>

      {/* Statistics */}
      <section className="px-8 py-12 bg-blue-600 text-white text-center">
        <h3 className="text-3xl font-bold mb-6">Sudah Dipercaya Ribuan Pengguna</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-4xl font-bold">20K+</h4>
            <p className="text-lg">Pengguna Aktif</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold">500+</h4>
            <p className="text-lg">Faskes Terintegrasi</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold">99.9%</h4>
            <p className="text-lg">Uptime & Keamanan</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-8 py-16 bg-white">
        <h3 className="text-3xl font-bold text-center mb-10">Mengapa Memilih MEDICARE?</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            { title: "Akses 24/7", desc: "Data medis Anda selalu siap diakses kapan pun." },
            { title: "Privasi Terjamin", desc: "Kami menerapkan sistem enkripsi tingkat tinggi." },
            { title: "User Friendly", desc: "Mudah digunakan bahkan untuk lansia." }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 border rounded-lg shadow hover:shadow-xl transition bg-blue-50"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimoni */}
      <section className="px-8 py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <h3 className="text-3xl font-bold text-center mb-10">Apa Kata Mereka</h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { text: "Sekarang saya bisa lihat riwayat anak saya dengan mudah!", name: "Ibu Sari" },
            { text: "Membantu sekali saat kontrol ke dokter.", name: "Pak Budi" },
            { text: "Tidak perlu bawa kertas lagi. Keren!", name: "Lala" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
              <p>"{item.text}"</p>
              <span className="block mt-4 font-semibold">- {item.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Sekunder */}
      <section className="text-center px-8 py-20 bg-blue-700 text-white">
        <h3 className="text-3xl font-bold mb-4">Mulai Kelola Kesehatan Anda Hari Ini</h3>
        <p className="mb-6">Coba GRATIS dan rasakan kemudahannya sekarang juga.</p>
        <Link to="/register">
          <button className="bg-white text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-100 font-semibold">
            Daftar Gratis
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center text-gray-500 text-sm py-6 border-t mt-10">
        &copy; {new Date().getFullYear()} MEDICARE. All rights reserved.
      </footer>
    </div>
  );
};

export default GuestMedicalPage;
