import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center mb-8">SIMEDI Admin</h1>
        <nav className="space-y-4">
          <NavItem to="./admin/Dashboard" icon="📊" label="Dashboard" />
          <NavItem to="/admin/pasien" icon="🧑‍⚕️" label="Manajemen Pasien" />
          <NavItem to="/admin/medis" icon="👨‍⚕️" label="Tenaga Medis" />
          <NavItem to="/admin/rekam-medis" icon="📄" label="Rekam Medis" />
          <NavItem to="/admin/pengaturan" icon="⚙️" label="Pengaturan" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

const NavItem = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 p-3 rounded-lg hover:bg-blue-700 transition ${
        isActive ? "bg-blue-700 font-semibold" : ""
      }`
    }
  >
    <span className="text-lg">{icon}</span>
    {label}
  </NavLink>
);

export default AdminLayout;
