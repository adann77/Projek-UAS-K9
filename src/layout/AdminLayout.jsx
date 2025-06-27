import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { 
  FiHome, 
  FiUsers, 
  FiUserCheck, 
  FiFileText, 
  FiSettings, 
  FiMenu,
  FiX,
  FiChevronLeft,
  FiChevronRight
} from "react-icons/fi";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex font-sans bg-gray-50">
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } bg-blue-600 shadow-lg transition-all duration-300 ease-in-out relative`}
      >
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-6 bg-white text-blue-600 p-1.5 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10"
        >
          {isSidebarOpen ? (
            <FiChevronLeft className="w-4 h-4" />
          ) : (
            <FiChevronRight className="w-4 h-4" />
          )}
        </button>

        <div className="p-6">
          {/* Logo & Title */}
          <div className="flex items-center gap-3 mb-10">
            <img
              src="/img/logo rekam medis.png"
              alt="SIMEDI Logo"
              className="h-10 w-10 object-contain flex-shrink-0"
            />
            {isSidebarOpen && (
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">SIMEDI</span>
                <span className="text-xs text-blue-100">Admin Panel</span>
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            <NavItem 
              to="/admin/dashboard" 
              icon={FiHome} 
              label="Dashboard" 
              isCollapsed={!isSidebarOpen}
            />
            <NavItem 
              to="/admin/pasien" 
              icon={FiUsers} 
              label="Manajemen Pasien" 
              isCollapsed={!isSidebarOpen}
            />
            <NavItem 
              to="/admin/medis" 
              icon={FiUserCheck} 
              label="Tenaga Medis" 
              isCollapsed={!isSidebarOpen}
            />
            <NavItem 
              to="/admin/rekam-medis" 
              icon={FiFileText} 
              label="Rekam Medis" 
              isCollapsed={!isSidebarOpen}
            />
            <NavItem 
              to="/admin/pengaturan" 
              icon={FiSettings} 
              label="Pengaturan" 
              isCollapsed={!isSidebarOpen}
            />
          </nav>
        </div>

       
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 min-h-screen overflow-y-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={toggleSidebar}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <FiMenu className="w-5 h-5 text-gray-600" />
              </button>
              <h1 className="text-2xl font-semibold text-gray-800">
                Sistem Informasi Rekam Medis
              </h1>
            </div>
           
          </div>
        </header>

        {/* Content Area */}
        <div className="p-6">
          <Outlet />
        </div>
      </main>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

const NavItem = ({ to, icon: Icon, label, isCollapsed }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group relative ${
        isActive
          ? "bg-white bg-opacity-20 text-white shadow-md"
          : "text-blue-100 hover:bg-blue-500 hover:bg-opacity-30 hover:text-white"
      } ${isCollapsed ? 'justify-center' : ''}`
    }
  >
    <Icon className="w-5 h-5 flex-shrink-0" />
    {!isCollapsed && (
      <span className="font-medium text-sm whitespace-nowrap">{label}</span>
    )}
    
    {/* Tooltip for collapsed state */}
    {isCollapsed && (
      <div className="absolute left-full ml-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50 shadow-lg">
        {label}
        <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900"></div>
      </div>
    )}
  </NavLink>
);

export default AdminLayout;