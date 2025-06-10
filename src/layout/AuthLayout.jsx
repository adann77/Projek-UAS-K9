import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-white px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl flex flex-col justify-between h-fit">
        {/* Logo MEDICARE */}
        <div className="flex items-center space-x-2 mb-6 justify-center">
          <div className="text-3xl font-bold text-blue-600">🩺</div>
          <h1 className="text-xl font-bold">
            <span className="text-gray-900">MEDI</span>
            <span className="text-blue-600">CARE</span>
          </h1>
        </div>

        {/* Isi Halaman Login/Register */}
        <Outlet />

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          © 2025 MEDICARE. Seluruh hak cipta dilindungi.
        </p>
      </div>
    </div>
  );
}
