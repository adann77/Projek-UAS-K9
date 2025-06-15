import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../guest/Footer";

const GuestLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">{children}</main>

      <Outlet />
      <Footer/>
    </div>
  );
};

export default GuestLayout;