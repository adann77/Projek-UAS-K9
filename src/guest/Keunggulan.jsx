import React from "react";
import { ShieldCheck, Hospital, Globe } from "lucide-react";

const Keunggulan = () => {
  return (
    <section className="pt-16 md:pt-24 pb-20 px-6 bg-gradient-to-b from-blue-50 to-white text-center">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h4 className="text-sm uppercase tracking-wide text-blue-600 font-semibold mb-2">
          Keunggulan Medicare
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
          Kenapa Memilih Kami?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Kami berkomitmen untuk memberikan akses layanan rekam medis yang
          cepat, aman, dan terintegrasi untuk Anda dan keluarga. Dapatkan
          kendali penuh atas riwayat kesehatan Anda secara digital.
        </p>

        {/* Optional Image */}
        <img
          src="/img/rekam medis.jpg" // ganti dengan gambar Anda di public folder
          alt="Ilustrasi Rekam Medis"
          className="mx-auto mb-12 w-full max-w-md md:max-w-lg"
        />

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white border border-blue-100 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-blue-600 mb-4">
              <Globe size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Akses Cepat & Mudah</h3>
            <p className="text-gray-600 text-sm">
              Data rekam medis Anda dapat diakses kapan saja dan di mana saja
              dengan aman dari berbagai perangkat.
            </p>
          </div>

          <div className="p-6 bg-white border border-blue-100 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-blue-600 mb-4">
              <ShieldCheck size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Privasi Terjamin</h3>
            <p className="text-gray-600 text-sm">
              Sistem enkripsi modern memastikan informasi medis Anda hanya
              diakses oleh pihak yang berwenang.
            </p>
          </div>

          <div className="p-6 bg-white border border-blue-100 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-blue-600 mb-4">
              <Hospital size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Integrasi Rumah Sakit
            </h3>
            <p className="text-gray-600 text-sm">
              Terhubung langsung dengan fasilitas kesehatan untuk kemudahan
              layanan medis dan konsultasi.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <a
          href="/register"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full text-sm font-semibold"
        >
          Coba Sekarang Gratis
        </a>
      </div>
    </section>
  );
};

export default Keunggulan;
