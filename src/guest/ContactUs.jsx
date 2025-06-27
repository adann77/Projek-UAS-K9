import React, { useState } from "react";
import { kontakAPI } from "../services/kontakAPI";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  FileText,
} from "lucide-react";


// Contact Info Card Component
const ContactInfoCard = ({ icon: Icon, title, info, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
          <Icon className="text-blue-600" size={24} />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">{title}</h3>
          <p className="text-blue-600 font-medium">{info}</p>
        </div>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

// Form Input Component
const FormInput = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  isTextarea = false,
  rows = 4,
}) => {
  const inputClasses =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200";

  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {isTextarea ? (
        <textarea
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={inputClasses}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={inputClasses}
        />
      )}
    </div>
  );
};

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email_kontak: "",
    nomorhp: "",
    kategori: "",
    subjek: "",
    pesan: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    if (
      !formData.nama ||
      !formData.email_kontak ||
      !formData.nomorhp ||
      !formData.subjek ||
      !formData.pesan
    ) {
      alert("Mohon lengkapi semua field yang wajib diisi");
      return;
    }

    setIsSubmitting(true);

    // Simulasi pengiriman form
    setTimeout(() => {
      setSubmitMessage(
        "Pesan Anda telah berhasil dikirim! Tim kami akan merespons dalam 1x24 jam."
      );
      setFormData({
        nama: "",
        email_kontak: "",
        nomorhp: "",
        kategori: "",
        subjek: "",
        pesan: "",
      });
      setIsSubmitting(false);

      // Hapus pesan sukses setelah 5 detik
      setTimeout(() => setSubmitMessage(""), 5000);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Kirim Pesan</h2>
        <p className="text-gray-600">
          Silakan isi form di bawah ini untuk mengirim pertanyaan atau pengaduan
          Anda. Tim kami akan merespons dalam waktu 1x24 jam.
        </p>
      </div>

      {submitMessage && (
        <div className="mb-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded">
          {submitMessage}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <FormInput
          label="Nama Lengkap"
          placeholder="Masukkan nama lengkap Anda"
          value={formData.nama}
          onChange={handleInputChange("nama")}
          required
        />
        <FormInput
          label="Email"
          type="email"
          placeholder="nama@email.com"
          value={formData.email_kontak}
          onChange={handleInputChange("email_kontak")}
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <FormInput
          label="Nomor Telepon"
          type="tel"
          placeholder="08xxxxxxxxxx"
          value={formData.nomorhp}
          onChange={handleInputChange("nomorhp")}
        />
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Kategori <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.kategori}
            onChange={handleInputChange("kategori")}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">Pilih kategori</option>
            <option value="akses-rekam-medis">Akses Rekam Medis</option>
            <option value="masalah-teknis">Masalah Teknis</option>
            <option value="keluhan-layanan">Keluhan Layanan</option>
            <option value="permintaan-informasi">Permintaan Informasi</option>
            <option value="saran-perbaikan">Saran Perbaikan</option>
            <option value="lainnya">Lainnya</option>
          </select>
        </div>
      </div>

      <FormInput
        label="Subjek"
        placeholder="Ringkasan singkat mengenai pesan Anda"
        value={formData.subjek}
        onChange={handleInputChange("subjek")}
        required
      />

      <FormInput
        label="Pesan"
        placeholder="Jelaskan pertanyaan atau keluhan Anda secara detail..."
        value={formData.pesan}
        onChange={handleInputChange("pesan")}
        required
        isTextarea
        rows={6}
      />

      <button
        type="button"
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors duration-200 font-semibold flex items-center justify-center gap-2 mt-6"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Mengirim...
          </>
        ) : (
          <>
            <Send size={20} />
            Kirim Pesan
          </>
        )}
      </button>
    </div>
  );
};

// Contact Us Page Component
const ContactUs = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon",
      info: "+62 761 234 5678",
      description: "Senin - Jumat: 08:00 - 17:00 WIB",
    },
    {
      icon: Mail,
      title: "Email",
      info: "support@simedi.com",
      description: "Kami akan merespons dalam 1x24 jam",
    },
    {
      icon: MapPin,
      title: "Alamat",
      info: "Jl. Sudirman No. 123",
      description: "Pekanbaru, Riau 28282",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      info: "24/7 Online Support",
      description: "Sistem tersedia sepanjang waktu",
    },
  ];

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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <MessageCircle size={64} className="mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl font-bold mb-4">Hubungi Kami</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Kami siap membantu Anda dengan pertanyaan seputar sistem rekam
              medis dan layanan kesehatan digital
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16">
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <ContactInfoCard
                key={index}
                icon={info.icon}
                title={info.title}
                info={info.info}
                description={info.description}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* FAQ Quick Access */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <FileText className="text-blue-600 mr-3" size={24} />
                  <h3 className="font-semibold text-gray-800">FAQ</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Cek dulu pertanyaan yang sering ditanyakan sebelum menghubungi
                  kami.
                </p>
                <Link
                  to="/faq"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center transition-colors"
                >
                  Lihat FAQ →
                </Link>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <h3 className="font-semibold text-red-800 mb-2">
                  Kontak Darurat
                </h3>
                <p className="text-red-700 text-sm mb-3">
                  Untuk masalah urgent yang memerlukan penanganan segera:
                </p>
                <div className="space-y-2">
                  <p className="text-red-800 font-medium">
                    📞 +62 761 234 9999
                  </p>
                  <p className="text-red-700 text-sm">Tersedia 24 jam</p>
                </div>
              </div>

              {/* Service Status */}
              <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                <h3 className="font-semibold text-green-800 mb-2">
                  Status Layanan
                </h3>
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-green-800 font-medium">
                    Semua sistem normal
                  </span>
                </div>
                <p className="text-green-700 text-sm">
                  Terakhir diperbarui: Hari ini, 14:30 WIB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
