import React from "react";
import { Link } from "react-router-dom";
import teamData from "../data/teamData.json";

const AboutUs = () => {
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
      {/* Section Konten */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Konten Kiri */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1 animate-fade-in-up">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight transition-all duration-500 hover:text-blue-600 cursor-default">
                  Masa Depan
                  <br />
                  <span className="text-blue-600 hover:text-blue-700 transition-colors duration-300">
                    Kesehatan Berkualitas
                  </span>
                </h2>
              </div>
              <div className="space-y-4 sm:space-y-6 text-gray-600 leading-relaxed">
                <p className="text-sm sm:text-base lg:text-lg transition-all duration-300 hover:text-gray-800 hover:scale-[1.02] cursor-default p-2 rounded-lg hover:bg-white hover:shadow-sm">
                  <strong className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
                    Sejarah Kami:
                  </strong>{" "}
                  SIMEDI diresmikan pada tahun 2010, kami telah melayani ribuan
                  pasien dengan dedikasi tinggi. Berawal dari klinik kecil, kini
                  kami berkembang menjadi pusat kesehatan terpercaya dengan
                  fasilitas modern dan teknologi terdepan.
                </p>
                <p className="text-sm sm:text-base lg:text-lg transition-all duration-300 hover:text-gray-800 hover:scale-[1.02] cursor-default p-2 rounded-lg hover:bg-white hover:shadow-sm">
                  <strong className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
                    Visi Kami:
                  </strong>{" "}
                  Menjadi penyedia layanan kesehatan terdepan yang memberikan
                  perawatan komprehensif, inovatif, dan berstandar internasional
                  untuk meningkatkan kualitas hidup masyarakat.
                </p>
                <p className="text-sm sm:text-base lg:text-lg transition-all duration-300 hover:text-gray-800 hover:scale-[1.02] cursor-default p-2 rounded-lg hover:bg-white hover:shadow-sm">
                  <strong className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
                    Misi Kami:
                  </strong>{" "}
                  Menyediakan layanan kesehatan holistik dengan mengutamakan
                  kepuasan pasien, teknologi canggih, dan tim medis profesional
                  yang berpengalaman lebih dari 15 tahun.
                </p>
              </div>
              <div className="pt-2 sm:pt-4">
                <Link to="/service">
                  <button className="group w-full sm:w-auto inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm sm:text-base relative overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                    <span className="relative z-10">Pelajari Lebih Lanjut</span>
                    <svg
                      className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300 relative z-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-gray-200">
                <div className="text-center group cursor-default">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-1 sm:mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-700">
                    15+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                    Tahun Pengalaman
                  </div>
                </div>
                <div className="text-center group cursor-default">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-1 sm:mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-700">
                    10K+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                    Pasien Dilayani
                  </div>
                </div>
                <div className="text-center group cursor-default">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-1 sm:mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-700">
                    50+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                    Tenaga Medis
                  </div>
                </div>
              </div>
            </div>

            {/* Konten Kanan */}
            <div className="relative order-1 lg:order-2 group">
              <div className="relative bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl sm:shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-105 hover:rotate-1">
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-300 rounded-full opacity-20 transition-all duration-500 group-hover:scale-110 group-hover:opacity-30"></div>
                <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-blue-400 rounded-full opacity-20 transition-all duration-500 group-hover:scale-110 group-hover:opacity-30"></div>
                <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-md sm:shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-md sm:shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-xl">
                        <svg
                          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white transition-transform duration-300 hover:scale-110"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 w-full">
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6">
                            <svg
                              className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                          </div>
                          <div className="flex-1 space-y-2">
                            <div className="h-2 sm:h-3 bg-gray-200 rounded-full transition-colors duration-300 hover:bg-blue-200"></div>
                            <div className="h-2 sm:h-3 bg-gray-200 rounded-full w-3/4 transition-colors duration-300 hover:bg-blue-200"></div>
                          </div>
                        </div>
                        <div className="bg-blue-50 rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all duration-300 hover:bg-blue-100 hover:scale-105 cursor-pointer">
                          <div className="flex items-center justify-between mb-2 sm:mb-3">
                            <div className="text-xs sm:text-sm font-semibold text-blue-800 transition-colors duration-300 hover:text-blue-900">
                              Konsultasi Medis
                            </div>
                            <div className="text-xs text-blue-600 transition-colors duration-300 hover:text-blue-700">
                              Berlangsung
                            </div>
                          </div>
                          <div className="space-y-1.5 sm:space-y-2">
                            <div className="h-1.5 sm:h-2 bg-blue-200 rounded-full transition-colors duration-300 hover:bg-blue-300"></div>
                            <div className="h-1.5 sm:h-2 bg-blue-200 rounded-full w-4/5 transition-colors duration-300 hover:bg-blue-300"></div>
                            <div className="h-1.5 sm:h-2 bg-blue-200 rounded-full w-3/5 transition-colors duration-300 hover:bg-blue-300"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-4 sm:space-x-6 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-red-200 hover:scale-110 hover:rotate-12 cursor-pointer">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 transition-transform duration-300 hover:scale-110"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-green-200 hover:scale-110 hover:rotate-12 cursor-pointer">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 transition-transform duration-300 hover:scale-110"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-blue-200 hover:scale-110 hover:rotate-12 cursor-pointer">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 transition-transform duration-300 hover:scale-110"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-2 sm:p-3 lg:p-4 transition-all duration-300 hover:shadow-2xl hover:scale-110 hover:-translate-y-1 cursor-pointer">
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600 transition-colors duration-300 hover:text-blue-700">
                    4.9
                  </div>
                  <div className="text-xs text-gray-500 transition-colors duration-300 hover:text-gray-700">
                    Rating
                  </div>
                  <div className="flex justify-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 text-yellow-400 fill-current transition-all duration-300 hover:scale-125 hover:text-yellow-500"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* End Konten Kanan */}
          </div>
        </div>
      </section>

      {/* Section Our Team */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4 transition-all duration-300 hover:bg-blue-100 hover:scale-105 cursor-pointer">
              <svg
                className="w-4 h-4 mr-2 transition-transform duration-300 hover:rotate-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Tim Medis Profesional
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 transition-all duration-500 hover:text-blue-600 cursor-default">
              Tim Medis{" "}
              <span className="text-blue-600 hover:text-blue-700 transition-colors duration-300">
                Berpengalaman
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-300 hover:text-gray-800 cursor-default">
              Didukung oleh tenaga medis profesional yang berpengalaman dan
              berdedikasi tinggi dalam memberikan pelayanan kesehatan terbaik
              untuk setiap pasien
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {teamData.team.map((member, index) => (
              <div
                key={member.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative">
                  <div className="aspect-w-1 aspect-h-1 h-64 sm:h-80 overflow-hidden">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/60 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110">
                    {member.experience}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-all duration-300 cursor-pointer">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold text-sm sm:text-base mb-2 transition-colors duration-300 group-hover:text-blue-700">
                      {member.position}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105">
                      <svg
                        className="w-3 h-3 mr-1 transition-transform duration-300 group-hover:rotate-12"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {member.specialization}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 transition-all duration-300 group-hover:text-gray-800">
                    {member.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
                        <svg
                          className="w-4 h-4 text-green-600 transition-transform duration-300 group-hover:scale-110"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-700">
                        Tersedia
                      </span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm hover:underline transition-all duration-300 hover:scale-105 relative overflow-hidden px-2 py-1 rounded">
                      <span className="relative z-10">Lihat Profil</span>
                      <span className="absolute inset-0 bg-blue-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded"></span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 sm:mt-16 lg:mt-20">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 sm:p-12 transition-all duration-500 hover:shadow-xl hover:scale-[1.02] group">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 transition-colors duration-300 group-hover:text-blue-600">
                Siap Melayani Kesehatan Anda
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto transition-colors duration-300 group-hover:text-gray-800">
                Tim medis kami siap memberikan konsultasi dan perawatan terbaik
                sesuai dengan kebutuhan kesehatan Anda
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/service"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl inline-block text-center relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                  <span className="relative z-10">Buat Janji Konsultasi</span>
                </Link>
                <Link
                  to="/ContactUs"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-1 inline-block text-center relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                  <span className="relative z-10">Hubungi Kami</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .hover\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
