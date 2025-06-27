import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import { pasienAPI } from "../services/pasienAPI";

const services = [
  { id: "umum", title: "Konsultasi Dokter Umum", price: 150000 },
  { id: "jantung", title: "Pemeriksaan Jantung", price: 350000 },
  { id: "darah", title: "Tes Laboratorium Darah", price: 200000 },
  { id: "radiologi", title: "Pemeriksaan Radiologi", price: 500000 },
  { id: "spesialis", title: "Konsultasi Spesialis", price: 250000 },
  { id: "saraf", title: "Pemeriksaan Saraf", price: 400000 },
];

const BookingPage = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  const [form, setForm] = useState({
    nama_lengkap: "",
    email: "",
    no_hp: "",
    keluhan: "",
    tanggal_periksa: "",
    waktu_periksa: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.nama_lengkap) newErrors.nama_lengkap = "Nama wajib diisi.";
    if (!form.email || !form.email.includes("@"))
      newErrors.email = "Email tidak valid.";
    if (!form.no_hp || form.no_hp.length < 10)
      newErrors.no_hp = "Nomor HP tidak valid.";
    if (!form.keluhan) newErrors.keluhan = "Keluhan wajib diisi.";
    if (!form.tanggal_periksa)
      newErrors.tanggal_periksa = "Tanggal wajib diisi.";
    if (!form.waktu_periksa) newErrors.waktu_periksa = "Waktu wajib diisi.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      await pasienAPI.tambahPasien(form);
      alert("Booking berhasil dikirim!");
      setForm({
        nama_lengkap: "",
        email: "",
        no_hp: "",
        keluhan: "",
        tanggal_periksa: "",
        waktu_periksa: "",
      });
      setErrors({});
    } catch (error) {
      alert("Gagal menyimpan data.");
      console.error("Error:", error);
    }
    setLoading(false);
  };

  if (!service) {
    return <div className="p-10 text-red-500">Layanan tidak ditemukan</div>;
  }

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <img
            src="/img/logo rekam medis.png"
            alt="Logo SIMEDI"
            className="h-12 w-12 object-contain p-1"
          />
          <span className="text-2xl font-bold text-blue-600 transition duration-300 hover:scale-105">
            SIMEDI
          </span>
        </div>
        <nav className="space-x-6 font-medium text-gray-700 hidden md:flex">
          <Link
            to="/guest"
            className="text-blue-600 font-semibold transform transition-transform hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            className="hover:text-blue-600 transform transition-transform hover:scale-105"
          >
            AboutUs
          </Link>
          <Link
            to="/service"
            className="hover:text-blue-600 transform transition-transform hover:scale-105"
          >
            Service
          </Link>
          <Link
            to="/artikel"
            className="hover:text-blue-600 transform transition-transform hover:scale-105"
          >
            Artikel
          </Link>
          <Link
            to="/FAQ"
            className="hover:text-blue-600 transform transition-transform hover:scale-105"
          >
            FAQ
          </Link>
          <Link
            to="/ContactUs"
            className="hover:text-blue-600 transform transition-transform hover:scale-105"
          >
            ContactUs
          </Link>
          <Link
            to="/reviews"
            className="hover:text-blue-600 transform transition-transform hover:scale-105"
          >
            Reviews
          </Link>
        </nav>
        <div className="space-x-3">
          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline transform hover:scale-105 transition-transform duration-300"
          >
            Log in
          </Link>
          <Link
            to="/register"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow-md transform transition-transform duration-300 hover:scale-105"
          >
            Sign up
          </Link>
        </div>
      </header>

      <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow mt-10 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">
          Form Pemesanan
        </h2>

        <div className="mb-6 p-4 bg-blue-50 rounded shadow text-gray-700 transition hover:shadow-md">
          <p>
            <strong>Layanan:</strong> {service.title}
          </p>
          <p>
            <strong>Harga:</strong> Rp {service.price.toLocaleString()}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center border rounded px-3 py-2 transition-all duration-300 hover:shadow-md">
            <FaUser className="text-blue-500 mr-2" />
            <input
              type="text"
              name="nama_lengkap"
              placeholder="Nama Lengkap"
              value={form.nama_lengkap}
              onChange={handleChange}
              className="w-full outline-none"
            />
          </div>
          {errors.nama_lengkap && (
            <p className="text-red-500 text-sm">{errors.nama_lengkap}</p>
          )}

          <div className="flex items-center border rounded px-3 py-2 transition-all duration-300 hover:shadow-md">
            <FaEnvelope className="text-blue-500 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full outline-none"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <div className="flex items-center border rounded px-3 py-2 transition-all duration-300 hover:shadow-md">
            <FaPhone className="text-blue-500 mr-2" />
            <input
              type="tel"
              name="no_hp"
              placeholder="Nomor HP"
              value={form.no_hp}
              onChange={handleChange}
              className="w-full outline-none"
            />
          </div>
          {errors.no_hp && (
            <p className="text-red-500 text-sm">{errors.no_hp}</p>
          )}

          <textarea
            name="keluhan"
            placeholder="Keluhan"
            value={form.keluhan}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 outline-none transition-all duration-300 hover:shadow-md"
          />
          {errors.keluhan && (
            <p className="text-red-500 text-sm">{errors.keluhan}</p>
          )}

          <div className="flex items-center border rounded px-3 py-2 transition-all duration-300 hover:shadow-md">
            <FaCalendarAlt className="text-blue-500 mr-2" />
            <input
              type="date"
              name="tanggal_periksa"
              value={form.tanggal_periksa}
              onChange={handleChange}
              className="w-full outline-none"
            />
          </div>
          {errors.tanggal_periksa && (
            <p className="text-red-500 text-sm">{errors.tanggal_periksa}</p>
          )}

          <div className="flex items-center border rounded px-3 py-2 transition-all duration-300 hover:shadow-md">
            <FaClock className="text-blue-500 mr-2" />
            <input
              type="time"
              name="waktu_periksa"
              value={form.waktu_periksa}
              onChange={handleChange}
              className="w-full outline-none"
            />
          </div>
          {errors.waktu_periksa && (
            <p className="text-red-500 text-sm">{errors.waktu_periksa}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full mt-4 shadow transform hover:scale-105"
          >
            {loading ? "Mengirim..." : "Kirim Pemesanan"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
