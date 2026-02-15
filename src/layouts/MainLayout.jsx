import React from "react";

import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const MainLayout = () => {
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <Navbar></Navbar>
      <ScrollToTop behavior="smooth" />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
