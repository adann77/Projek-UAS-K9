import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-white px-4 font-sans text-gray-800">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl flex flex-col justify-between h-fit">
        {/* Logo SIMEDI */}
        <div className="flex items-center space-x-3 mb-6 justify-center">
          <img
            src="/img/logo rekam medis.png"
            alt="Logo SIMEDI"
            className="h-12 w-12 object-contain p-1"
          />
          <span className="text-2xl font-bold text-blue-600">SIMEDI</span>
        </div>

        {/* Isi Halaman Login/Register */}
        <Outlet />

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          © 2025 SIMEDI. Seluruh hak cipta dilindungi.
        </p>
      </div>
    </div>
  );
}
