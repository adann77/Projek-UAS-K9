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
    if (!form.email || !form.email.includes("@")) newErrors.email = "Email tidak valid.";
    if (!form.no_hp || form.no_hp.length < 10) newErrors.no_hp = "Nomor HP tidak valid.";
    if (!form.keluhan) newErrors.keluhan = "Keluhan wajib diisi.";
    if (!form.tanggal_periksa) newErrors.tanggal_periksa = "Tanggal wajib diisi.";
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
      await pasienAPI.tambahPasien(form); // Panggil API Supabase
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
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-10">
        <div className="text-2xl font-bold text-blue-600">SIMEDI</div>
        <nav className="space-x-6 font-medium text-gray-700 hidden md:flex">
          <Link to="/guest" className="text-blue-600 font-semibold">Home</Link>
          <Link to="/aboutus" className="hover:text-blue-600">AboutUs</Link>
          <Link to="/service" className="hover:text-blue-600">Service</Link>
          <Link to="/artikel" className="hover:text-blue-600">Artikel</Link>
          <Link to="/FAQ" className="hover:text-blue-600">FAQ</Link>
          <Link to="/ContactUs" className="hover:text-blue-600">ContactUs</Link>
          <Link to="/reviews" className="hover:text-blue-600">Reviews</Link>
        </nav>
        <div className="space-x-3">
          <Link to="/login" className="text-blue-600 font-medium hover:underline">Log in</Link>
          <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow-md">Sign up</Link>
        </div>
      </header>

      {/* Booking Form */}
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow mt-10">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Form Pemesanan</h2>

        <div className="mb-6 p-4 bg-blue-50 rounded shadow text-gray-700">
          <p><strong>Layanan:</strong> {service.title}</p>
          <p><strong>Harga:</strong> Rp {service.price.toLocaleString()}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nama */}
          <div className="flex items-center border rounded px-3 py-2">
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
          {errors.nama_lengkap && <p className="text-red-500 text-sm">{errors.nama_lengkap}</p>}

          {/* Email */}
          <div className="flex items-center border rounded px-3 py-2">
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
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          {/* No HP */}
          <div className="flex items-center border rounded px-3 py-2">
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
          {errors.no_hp && <p className="text-red-500 text-sm">{errors.no_hp}</p>}

          {/* Keluhan */}
          <textarea
            name="keluhan"
            placeholder="Keluhan"
            value={form.keluhan}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 outline-none"
          />
          {errors.keluhan && <p className="text-red-500 text-sm">{errors.keluhan}</p>}

          {/* Tanggal */}
          <div className="flex items-center border rounded px-3 py-2">
            <FaCalendarAlt className="text-blue-500 mr-2" />
            <input
              type="date"
              name="tanggal_periksa"
              value={form.tanggal_periksa}
              onChange={handleChange}
              className="w-full outline-none"
            />
          </div>
          {errors.tanggal_periksa && <p className="text-red-500 text-sm">{errors.tanggal_periksa}</p>}

          {/* Waktu */}
          <div className="flex items-center border rounded px-3 py-2">
            <FaClock className="text-blue-500 mr-2" />
            <input
              type="time"
              name="waktu_periksa"
              value={form.waktu_periksa}
              onChange={handleChange}
              className="w-full outline-none"
            />
          </div>
          {errors.waktu_periksa && <p className="text-red-500 text-sm">{errors.waktu_periksa}</p>}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full mt-4 shadow"
          >
            {loading ? "Mengirim..." : "Kirim Pemesanan"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
