import React from "react";
import Navbar from "../components/layout/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/layout/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen mx-auto px-4">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
