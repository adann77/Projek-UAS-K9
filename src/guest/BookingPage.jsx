import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaClock } from "react-icons/fa";

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
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Nama wajib diisi.";
    if (!form.email || !form.email.includes("@")) newErrors.email = "Email tidak valid.";
    if (!form.phone || form.phone.length < 10) newErrors.phone = "Nomor HP tidak valid.";
    if (!form.date) newErrors.date = "Tanggal wajib diisi.";
    if (!form.time) newErrors.time = "Waktu wajib diisi.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Booking berhasil dikirim!");
      console.log("Data booking:", form);
      setForm({ name: "", email: "", phone: "", date: "", time: "" });
      setErrors({});
    }
  };

  if (!service) return <div className="p-10 text-red-500">Layanan tidak ditemukan</div>;

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
              name="name"
              placeholder="Nama Lengkap"
              value={form.name}
              onChange={handleChange}
              className="w-full outline-none"
            />
          </div>
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

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

          {/* Telepon */}
          <div className="flex items-center border rounded px-3 py-2">
            <FaPhone className="text-blue-500 mr-2" />
            <input
              type="tel"
              name="phone"
              placeholder="Nomor HP"
              value={form.phone}
              onChange={handleChange}
              className="w-full outline-none"
            />
          </div>
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

          {/* Tanggal */}
          <div className="flex items-center border rounded px-3 py-2">
            <FaCalendarAlt className="text-blue-500 mr-2" />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full outline-none"
            />
          </div>
          {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}

          {/* Waktu */}
          <div className="flex items-center border rounded px-3 py-2">
            <FaClock className="text-blue-500 mr-2" />
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full outline-none"
            />
          </div>
          {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full mt-4 shadow"
          >
            Kirim Pemesanan
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
