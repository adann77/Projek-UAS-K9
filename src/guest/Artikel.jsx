import React, { useState } from "react";
import { Link } from "react-router-dom";

// Data Artikel
const articles = [
  {
    id: 1,
    title: "Pentingnya Pemeriksaan Kesehatan Rutin",
    category: "Kesehatan Umum",
    content: "Pemeriksaan rutin membantu mendeteksi penyakit lebih awal...",
    image: "Pemeriksaan-Rutin.jpg",
  },
  {
    id: 2,
    title: "Tips Menjaga Jantung Sehat",
    category: "Jantung",
    content: "Olahraga teratur dan pola makan seimbang sangat penting...",
    image: "olahraga.jpg",
  },
  {
    id: 3,
    title: "Apa Itu MRI dan Kapan Harus Dilakukan?",
    category: "Radiologi",
    content:
      "MRI digunakan untuk melihat kondisi internal tubuh secara detail...",
    image: "mri.webp",
  },
  {
    id: 4,
    title: "Cara Mengelola Diabetes Secara Efektif",
    category: "Penyakit Kronis",
    content:
      "Mengelola diabetes memerlukan pengaturan makan, olahraga, dan pengobatan...",
    image: "cemilan-diabetes.webp",
  },
  {
    id: 5,
    title: "Vaksinasi: Perlindungan Terbaik untuk Anak-Anak",
    category: "Imunisasi",
    content:
      "Vaksinasi sangat penting untuk mencegah penyakit menular sejak dini...",
    image: "imunisasi.jpg",
  },
  {
    id: 6,
    title: "Menjaga Kesehatan Mental di Tengah Kesibukan",
    category: "Kesehatan Mental",
    content: "Kesehatan mental sama pentingnya dengan kesehatan fisik...",
    image: "mental.png",
  },
];

const categories = [
  "Semua",
  "Kesehatan Umum",
  "Jantung",
  "Radiologi",
  "Penyakit Kronis",
  "Imunisasi",
  "Kesehatan Mental",
];

const Artikel = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const articlesPerPage = 3;

  const filteredArticles =
    selectedCategory === "Semua"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const displayedArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

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
      {/* Konten */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Artikel & Berita Kesehatan
        </h1>

        {/* Filter Kategori */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-full border transition ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 border-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Daftar Artikel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col"
            >
              <img
                src={`/img/${article.image}`}
                alt={article.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x300?text=No+Image";
                }}
              />
              <div className="p-4 flex flex-col flex-grow">
                <span className="text-sm text-blue-600 font-medium">
                  {article.category}
                </span>
                <h2 className="text-xl font-semibold mt-2 mb-1">
                  {article.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{article.content}</p>
                <Link
                  to={`/artikel/${article.id}`}
                  className="mt-auto inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-10 h-10 rounded-full border transition ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "text-blue-600 border-blue-600 bg-white"
              } hover:bg-blue-500 hover:text-white`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artikel;
