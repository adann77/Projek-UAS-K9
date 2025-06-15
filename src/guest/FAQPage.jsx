import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Star } from 'lucide-react';

// Data FAQ dan Testimonials
const faqData = {
  faqs: [
    {
      id: 1,
      question: "Bagaimana cara mengakses rekam medis saya?",
      answer: "Anda dapat mengakses rekam medis melalui portal pasien online dengan menggunakan nomor ID pasien dan kata sandi yang telah diberikan oleh rumah sakit. Rekam medis tersedia 24/7 melalui sistem kami yang aman."
    },
    {
      id: 2,
      question: "Apakah data rekam medis saya aman?",
      answer: "Ya, sistem kami menggunakan enkripsi tingkat militer dan mematuhi standar keamanan HIPAA. Semua data medis disimpan dengan protokol keamanan berlapis untuk melindungi privasi dan kerahasiaan informasi kesehatan Anda."
    },
    {
      id: 3,
      question: "Bisakah saya berbagi rekam medis dengan dokter lain?",
      answer: "Tentu saja. Anda dapat dengan mudah berbagi rekam medis dengan dokter atau fasilitas kesehatan lain melalui sistem sharing yang aman. Cukup berikan akses melalui portal pasien atau minta admin untuk mengirimkan salinan resmi."
    },
    {
      id: 4,
      question: "Bagaimana cara memperbarui informasi personal saya?",
      answer: "Informasi personal dapat diperbarui melalui portal pasien online atau dengan menghubungi bagian administrasi rumah sakit. Untuk perubahan informasi penting seperti alamat atau kontak darurat, verifikasi identitas mungkin diperlukan."
    },
    {
      id: 5,
      question: "Berapa lama rekam medis disimpan dalam sistem?",
      answer: "Rekam medis disimpan secara permanen sesuai dengan regulasi kesehatan nasional. Data elektronik akan tersimpan selama minimal 30 tahun, sedangkan data penting seperti hasil laboratorium dan diagnosis akan disimpan seumur hidup."
    },
    {
      id: 6,
      question: "Apakah saya bisa mendapatkan salinan rekam medis dalam bentuk cetak?",
      answer: "Ya, Anda dapat meminta salinan rekam medis dalam bentuk cetak melalui bagian administrasi. Proses ini biasanya memakan waktu 1-3 hari kerja dan mungkin dikenakan biaya administrasi sesuai dengan kebijakan rumah sakit."
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Dr. Sarah Wijaya",
      role: "Dokter Spesialis Penyakit Dalam",
      date: "15/03/24",
      rating: 5,
      comment: "Sistem rekam medis elektronik ini sangat membantu dalam praktik sehari-hari. Akses yang cepat dan data yang terintegrasi membuat pelayanan pasien menjadi lebih efisien dan akurat."
    },
    {
      id: 2,
      name: "Ahmad Hidayat",
      role: "Pasien",
      date: "12/03/24",
      rating: 5,
      comment: "Sangat terbantu dengan sistem ini. Saya bisa mengakses hasil lab dan resep dokter kapan saja tanpa harus datang ke rumah sakit. Interface-nya juga user-friendly."
    },
    {
      id: 3,
      name: "Siti Nurhaliza",
      role: "Kepala Bagian Administrasi",
      date: "10/03/24",
      rating: 5,
      comment: "Implementasi sistem rekam medis elektronik ini telah meningkatkan efisiensi kerja tim kami secara signifikan. Pencarian data pasien yang dulu memakan waktu berjam-jam, kini hanya butuh beberapa menit."
    }
  ]
};

// Header Component
const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-10">
      <div className="text-2xl font-bold text-blue-600">SIMEDI</div>
      <nav className="space-x-6 font-medium text-gray-700 hidden md:flex">
        <a href="/guest" className="text-blue-600 font-semibold">
          Home
        </a>
        <a href="/aboutus" className="hover:text-blue-600 transition-colors">
          AboutUs
        </a>
        <a href="/service" className="hover:text-blue-600 transition-colors">
          Service
        </a>
        <a href="/artikel" className="hover:text-blue-600 transition-colors">
          Artikel
        </a>
        <a href="/FAQ" className="hover:text-blue-600 transition-colors">
          FAQ
        </a>
        <a href="/ContactUs" className="hover:text-blue-600 transition-colors">
          ContactUs
        </a>
        <a href="/reviews" className="hover:text-blue-600 transition-colors">
          Reviews
        </a>
      </nav>
      <div className="space-x-3">
        <a href="/login" className="text-blue-600 font-medium hover:underline">
          Log in
        </a>
        <a href="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow-md transition-colors">
          Sign up
        </a>
      </div>
    </header>
  );
};

// FAQ Item Component
const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left p-6 flex justify-between items-center hover:bg-blue-50 transition-colors duration-200"
      >
        <h3 className="text-lg font-semibold text-gray-800 pr-4">
          {faq.question}
        </h3>
        {isOpen ? (
          <ChevronUp className="text-blue-600 flex-shrink-0" size={24} />
        ) : (
          <ChevronDown className="text-blue-600 flex-shrink-0" size={24} />
        )}
      </button>
      
      {isOpen && (
        <div className="px-6 pb-6 border-t border-gray-100">
          <p className="text-gray-600 leading-relaxed pt-4">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="border-l-4 border-blue-500 pl-6 py-4">
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
        <div className="ml-auto">
          <div className="flex items-center gap-1">
            {renderStars(testimonial.rating)}
          </div>
          <p className="text-xs text-gray-400 text-right">{testimonial.date}</p>
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">
        {testimonial.comment}
      </p>
    </div>
  );
};

// FAQ Section Component
const FAQSection = ({ faqs, openFAQ, toggleFAQ }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Pertanyaan Yang Sering 
        <span className="text-blue-600"> Ditanyakan</span>
      </h1>
      <p className="text-gray-600 text-lg mb-8">
        Temukan jawaban untuk pertanyaan umum seputar sistem rekam medis elektronik dan layanan kesehatan digital kami.
      </p>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <FAQItem
            key={faq.id}
            faq={faq}
            isOpen={openFAQ === faq.id}
            onToggle={() => toggleFAQ(faq.id)}
          />
        ))}
      </div>
    </div>
  );
};

// Testimonials Section Component
const TestimonialsSection = ({ testimonials }) => {
  const avatarColors = [
    'from-blue-500 to-purple-500',
    'from-green-500 to-teal-500',
    'from-pink-500 to-red-500',
    'from-yellow-500 to-orange-500'
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center mb-6">
        <div className="flex -space-x-3">
          {['S', 'A', 'N', 'M'].map((letter, index) => (
            <div
              key={letter}
              className={`w-12 h-12 bg-gradient-to-r ${avatarColors[index]} rounded-full flex items-center justify-center text-white font-bold`}
            >
              {letter}
            </div>
          ))}
        </div>
        <div className="ml-4">
          <div className="flex items-center gap-2">
            <Users size={20} className="text-blue-600" />
            <span className="font-semibold text-gray-800">500+ Pengguna Aktif</span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100">
        <h4 className="font-semibold text-gray-800 mb-2">Masih ada pertanyaan?</h4>
        <p className="text-gray-600 text-sm mb-4">
          Tim support kami siap membantu Anda 24/7
        </p>
        
        <a href="/contactus">
          <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
            Hubungi Support
          </button>
        </a>
      </div>
    </div>
  );
};

// Main FAQ Page Component
const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FAQSection 
              faqs={faqData.faqs} 
              openFAQ={openFAQ} 
              toggleFAQ={toggleFAQ} 
            />
            <TestimonialsSection testimonials={faqData.testimonials} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;