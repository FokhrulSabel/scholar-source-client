import React from "react";

import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>

      <main className="min-h-screen mx-auto px-4">
        <Outlet />
      </main>

      <Footer></Footer>
    </>
  );
};

export default MainLayout;
