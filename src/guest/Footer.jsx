import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">SIMEDI</h3>
            <p className="text-blue-100 leading-relaxed">
              Platform digital untuk menyimpan, mengelola, dan membagikan data rekam medis secara aman dan praktis. Solusi terdepan untuk kemudahan akses informasi kesehatan Anda.
            </p>
            <p className="text-blue-100 leading-relaxed">
              Dengan teknologi terkini, kami memastikan keamanan dan privasi data medis Anda terjaga dengan baik.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-blue-700 hover:bg-blue-800 p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-blue-700 hover:bg-blue-800 p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-blue-700 hover:bg-blue-800 p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Tautan Berguna</h3>
            <div className="space-y-3">
              <a href="#" className="block text-blue-100 hover:text-white transition-colors">
                Home
              </a>
              <a href="#" className="block text-blue-100 hover:text-white transition-colors">
                AboutUs
              </a>
              <a href="#" className="block text-blue-100 hover:text-white transition-colors">
                Service
              </a>
              <a href="#" className="block text-blue-100 hover:text-white transition-colors">
                Artikel
              </a>
              <a href="#" className="block text-blue-100 hover:text-white transition-colors">
                FAQ
              </a>
              <a href="#" className="block text-blue-100 hover:text-white transition-colors">
                ContactUs
              </a>
              <a href="#" className="block text-blue-100 hover:text-white transition-colors">
                Reviews
              </a>
            </div>
          </div>

          {/* Address & Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Alamat & Kontak</h3>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-300" />
                <div>
                  <span className="text-blue-100 block">+62 761 234 5678</span>
                  <span className="text-blue-200 text-sm">Senin - Jumat: 08:00 - 17:00 WIB</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-300" />
                <div>
                  <span className="text-blue-100 block">support@simedi.com</span>
                  <span className="text-blue-200 text-sm">Kami akan merespon dalam 1x24 jam</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-blue-300" />
                <div>
                  <span className="text-blue-100 block">Jl. Sudirman No. 123</span>
                  <span className="text-blue-200 text-sm">Pekanbaru, Riau 28282</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-40 bg-gradient-to-br from-green-50 via-blue-50 to-green-100">
                {/* Map Grid Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                    {Array.from({ length: 48 }).map((_, i) => (
                      <div key={i} className="border border-gray-200"></div>
                    ))}
                  </div>
                </div>
                
                {/* Street Network */}
                <div className="absolute inset-0">
                  {/* Main horizontal roads */}
                  <div className="absolute w-full h-2 bg-gray-300 top-12"></div>
                  <div className="absolute w-full h-2 bg-gray-300 top-24"></div>
                  <div className="absolute w-full h-1 bg-gray-400 top-6"></div>
                  <div className="absolute w-full h-1 bg-gray-400 top-32"></div>
                  
                  {/* Main vertical roads */}
                  <div className="absolute h-full w-2 bg-gray-300 left-16"></div>
                  <div className="absolute h-full w-2 bg-gray-300 left-32"></div>
                  <div className="absolute h-full w-1 bg-gray-400 left-24"></div>
                  <div className="absolute h-full w-1 bg-gray-400 left-40"></div>
                  
                  {/* Jl. Sudirman (main street) */}
                  <div className="absolute w-full h-3 bg-yellow-400 top-18 opacity-80"></div>
                  <div className="absolute top-14 left-2 text-xs font-semibold text-gray-700 bg-white px-1 rounded">
                    Jl. Sudirman
                  </div>
                </div>
                
                {/* Buildings and Landmarks */}
                <div className="absolute inset-0">
                  {/* Commercial buildings */}
                  <div className="absolute w-8 h-6 bg-blue-200 top-8 left-10 rounded shadow-sm"></div>
                  <div className="absolute w-6 h-8 bg-blue-200 top-26 left-12 rounded shadow-sm"></div>
                  <div className="absolute w-10 h-6 bg-blue-200 top-6 left-34 rounded shadow-sm"></div>
                  <div className="absolute w-8 h-8 bg-blue-200 top-28 left-36 rounded shadow-sm"></div>
                  
                  {/* Office buildings */}
                  <div className="absolute w-6 h-10 bg-gray-400 top-4 left-26 rounded shadow-md"></div>
                  <div className="absolute w-8 h-12 bg-gray-400 top-2 left-42 rounded shadow-md"></div>
                  
                  {/* Parks and green areas */}
                  <div className="absolute w-14 h-8 bg-green-300 rounded-lg top-3 left-4 opacity-70"></div>
                  <div className="absolute w-10 h-6 bg-green-300 rounded-lg top-30 left-28 opacity-70"></div>
                  <div className="absolute w-8 h-8 bg-green-300 rounded-full top-26 right-4 opacity-70"></div>
                </div>
                
                {/* Location Marker - Jl. Sudirman No. 123 */}
                <div className="absolute top-16 left-20 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative">
                    <div className="w-6 h-6 bg-red-500 rounded-full border-3 border-white shadow-lg flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-red-500 w-1 h-2"></div>
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-red-500"></div>
                  </div>
                </div>
                
                {/* Area Labels */}
                <div className="absolute top-1 left-1 text-xs text-gray-600 bg-white bg-opacity-80 px-1 rounded">
                  Pekanbaru
                </div>
                <div className="absolute bottom-1 right-1 text-xs text-gray-600 bg-white bg-opacity-80 px-1 rounded">
                  Riau
                </div>
                
                {/* Map Controls */}
                <div className="absolute top-2 right-2 flex flex-col space-y-1">
                  <button className="w-7 h-7 bg-white rounded-sm shadow-md text-sm font-bold text-gray-700 hover:bg-gray-50 flex items-center justify-center">
                    +
                  </button>
                  <button className="w-7 h-7 bg-white rounded-sm shadow-md text-sm font-bold text-gray-700 hover:bg-gray-50 flex items-center justify-center">
                    −
                  </button>
                </div>
                
                {/* Compass */}
                <div className="absolute bottom-2 left-2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center">
                  <div className="text-xs font-bold text-gray-700">N</div>
                  <div className="absolute w-0 h-0 border-l-1 border-r-1 border-b-2 border-transparent border-b-red-500 top-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-blue-500 mt-8 pt-6 text-center">
          <p className="text-blue-200">© 2025 SIMEDI. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;