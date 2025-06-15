import React from "react";
import { useParams, Link } from "react-router-dom";

const articles = [
    {
      id: 1,
      title: "Pentingnya Pemeriksaan Kesehatan Rutin",
      category: "Kesehatan Umum",
      content:
        "Pemeriksaan rutin membantu mendeteksi penyakit lebih awal sebelum muncul gejala yang parah. Dengan melakukan cek kesehatan secara berkala seperti tes darah, tekanan darah, dan kadar kolesterol, kita dapat mengantisipasi berbagai kondisi serius. Deteksi dini memungkinkan penanganan lebih cepat dan efektif, sehingga dapat mencegah komplikasi serta menjaga kualitas hidup dalam jangka panjang.",
      image: "Pemeriksaan-Rutin.jpg",
    },
    {
      id: 2,
      title: "Tips Menjaga Jantung Sehat",
      category: "Jantung",
      content:
        "Olahraga teratur seperti berjalan kaki, bersepeda, atau berenang minimal 30 menit per hari sangat baik untuk kesehatan jantung. Selain itu, konsumsi makanan rendah lemak jenuh, perbanyak sayur dan buah, serta hindari merokok dan stres berlebih. Rutin memeriksa tekanan darah dan kolesterol juga penting untuk memantau kondisi jantung. Menjaga berat badan ideal dan tidur yang cukup turut membantu meningkatkan kesehatan jantung secara keseluruhan.",
      image: "olahraga.jpg",
    },
    {
      id: 3,
      title: "Apa Itu MRI dan Kapan Harus Dilakukan?",
      category: "Radiologi",
      content:
        "MRI (Magnetic Resonance Imaging) adalah pemeriksaan pencitraan medis yang menggunakan medan magnet dan gelombang radio untuk menghasilkan gambar detail organ dalam tubuh. MRI sangat berguna untuk mendiagnosis kelainan pada otak, sumsum tulang belakang, persendian, dan organ dalam lainnya tanpa menggunakan radiasi. Prosedur ini aman dan tidak menimbulkan rasa sakit, sehingga sering dijadikan pilihan utama untuk pemeriksaan lanjutan ketika hasil rontgen atau CT scan kurang memadai.",
      image: "mri.webp",
    },
    {
      id: 4,
      title: "Cara Mengelola Diabetes Secara Efektif",
      category: "Penyakit Kronis",
      content:
        "Mengelola diabetes memerlukan komitmen untuk menjalani gaya hidup sehat setiap hari. Konsumsi makanan dengan indeks glikemik rendah, rutin berolahraga, dan minum obat atau insulin sesuai anjuran dokter sangat penting. Monitoring kadar gula darah secara teratur membantu mencegah komplikasi seperti kerusakan mata, ginjal, dan saraf. Edukasi diri dan dukungan keluarga juga sangat membantu dalam menjalani pengelolaan diabetes secara menyeluruh dan konsisten.",
      image: "cemilan-diabetes.webp",
    },
    {
      id: 5,
      title: "Vaksinasi: Perlindungan Terbaik untuk Anak-Anak",
      category: "Imunisasi",
      content:
        "Vaksinasi melindungi anak dari berbagai penyakit menular yang berbahaya seperti campak, polio, dan hepatitis. Pemberian imunisasi sesuai jadwal sangat penting untuk memastikan anak tumbuh sehat dan memiliki kekebalan tubuh yang kuat. Vaksin juga membantu mencegah penyebaran penyakit di lingkungan sekitar, membentuk kekebalan kelompok (herd immunity), dan mengurangi risiko wabah. Penting bagi orang tua untuk memahami jadwal imunisasi dan mengikuti anjuran tenaga medis.",
      image: "imunisasi.jpg",
    },
    {
      id: 6,
      title: "Menjaga Kesehatan Mental di Tengah Kesibukan",
      category: "Kesehatan Mental",
      content:
        "Kesehatan mental tidak kalah penting dari kesehatan fisik, apalagi di tengah aktivitas dan tekanan hidup yang padat. Untuk menjaganya, penting meluangkan waktu istirahat, menjaga kualitas tidur, serta menghindari beban kerja yang berlebihan. Berbagi cerita dengan orang terdekat, melakukan hobi, meditasi, dan olahraga ringan terbukti efektif dalam mengurangi stres. Jika merasa kewalahan, jangan ragu mencari bantuan dari tenaga profesional seperti psikolog atau konselor.",
      image: "mental.png",
    },
  ];
  

const ArtikelDetail = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-600">Artikel tidak ditemukan.</h1>
      </div>
    );
  }

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

      {/* Konten Detail Artikel */}
      <div className="max-w-4xl mx-auto px-4 py-10">
        <img
          src={`/img/${article.image}`}
          alt={article.title}
          className="w-full h-64 object-cover rounded-lg mb-6 shadow"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/600x400?text=No+Image";
          }}
        />
        <span className="text-blue-600 font-semibold text-sm">{article.category}</span>
        <h1 className="text-3xl font-bold mt-2 mb-4">{article.title}</h1>
        <p className="text-gray-700 whitespace-pre-line leading-relaxed">{article.content}</p>

        <div className="mt-10">
          <Link
            to="/artikel"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Kembali ke Artikel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtikelDetail;
