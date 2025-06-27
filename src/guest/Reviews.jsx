import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Stethoscope, Heart, Shield, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import testimonials from '../data/review.json';

const Reviews = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getRoleIcon = (role) => {
    if (role.includes('Dokter')) return <Stethoscope className="w-5 h-5 text-blue-600" />;
    if (role.includes('Perawat')) return <Heart className="w-5 h-5 text-red-500" />;
    if (role.includes('Apoteker')) return <Shield className="w-5 h-5 text-green-600" />;
    return <Users className="w-5 h-5 text-purple-600" />;
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, idx) => (
      <Star
        key={idx}
        className={`w-5 h-5 ${
          idx < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const currentReview = testimonials[currentTestimonial];
  const totalReviews = testimonials.length * 15; // Simulasi total reviews lebih banyak
  const averageRating = (testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1);

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
          <Link to="/guest" className="hover:text-blue-600 transition-colors">
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
            className="text-blue-600 font-semibold"
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

      {/* Main Content */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Stethoscope className="w-4 h-4" />
              Testimonial Pengguna
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Apa Kata 
              <span className="text-blue-600"> Tenaga Medis </span>
              Tentang Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dipercaya oleh ribuan profesional kesehatan di seluruh Indonesia untuk mengelola 
              rekam medis dengan aman, efisien, dan terintegrasi.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Stats & Mini Reviews */}
            <div className="space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Star className="w-6 h-6 text-yellow-600 fill-current" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">{averageRating}</div>
                      <div className="text-sm text-gray-600">Rating Rata-rata</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">{totalReviews}+</div>
                      <div className="text-sm text-gray-600">Reviews</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mini Reviews List */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Review Terbaru
                </h3>
                {testimonials.slice(0, 4).map((testimonial, idx) => (
                  <div 
                    key={testimonial.id}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                      idx === currentTestimonial 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                    onClick={() => setCurrentTestimonial(idx)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        {getRoleIcon(testimonial.role)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-900 text-sm">
                            {testimonial.name}
                          </h4>
                          <div className="flex gap-1">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                        <p className="text-xs text-gray-600 mb-1">
                          {testimonial.role} • {testimonial.hospital}
                        </p>
                        <p className="text-sm text-gray-700 line-clamp-2">
                          {testimonial.review}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Featured Review */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mb-6">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  
                  <div className="text-sm text-gray-500">
                    {currentTestimonial + 1} dari {testimonials.length}
                  </div>
                  
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {currentReview.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {currentReview.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      {getRoleIcon(currentReview.role)}
                      <span className="text-sm">{currentReview.role}</span>
                    </div>
                    <p className="text-sm text-gray-500">{currentReview.hospital}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-1">
                    {renderStars(currentReview.rating)}
                  </div>
                  <span className="text-sm text-gray-600">
                    {currentReview.rating}.0 • {currentReview.date}
                  </span>
                </div>

                {/* Review Text */}
                <blockquote className="text-gray-700 text-lg leading-relaxed italic">
                  "{currentReview.review}"
                </blockquote>

                {/* Trust Badge */}
                <div className="mt-8 p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="flex items-center gap-2 text-green-700">
                    <Shield className="w-5 h-5" />
                    <span className="font-medium text-sm">
                      Verified Healthcare Professional
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-20 -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-200 rounded-full opacity-20 -z-10"></div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Rumah Sakit</div>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-green-600 mb-2">10K+</div>
              <div className="text-sm text-gray-600">Tenaga Medis</div>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">1M+</div>
              <div className="text-sm text-gray-600">Rekam Medis</div>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-red-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;