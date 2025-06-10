import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-full">
      <div className="bg-blue-50 p-6 rounded-xl shadow-md border border-blue-200">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-1">
          Daftar Rekam Medis
        </h2>
        <p className="text-center text-gray-600 mb-6 text-sm">
          Lengkapi data di bawah ini untuk membuat akun baru
        </p>
        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Nama Lengkap</label>
            <input
              type="text"
              placeholder="Contoh: Damar Prasetyo"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-blue-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="nama@email.com"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-blue-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="********"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Daftar
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login di sini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
