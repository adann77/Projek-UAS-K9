import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Kontak = () => {
  return (
    <section className="bg-blue-50 px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Kiri: Deskripsi dan Info Kontak */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-blue-600 font-semibold mb-2">Butuh Bantuan?</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Hubungi Kami</h2>
          <p className="text-gray-600 mb-6">
            Tim kami siap membantu Anda dengan pertanyaan seputar rekam medis digital, akun, atau fitur lainnya.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <Mail className="text-blue-600" /> support@medicare.id
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-blue-600" /> +62 812-3456-7890
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-blue-600" /> Jl. Kesehatan No. 123, Jakarta
            </li>
          </ul>
        </div>

        {/* Kanan: Form Kontak */}
        <form className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <input
            type="text"
            placeholder="Nama Anda"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-blue-400"
          />
          <input
            type="email"
            placeholder="Email Anda"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-blue-400"
          />
          <textarea
            placeholder="Pesan Anda"
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-blue-400"
          ></textarea>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
};

export default Kontak;
