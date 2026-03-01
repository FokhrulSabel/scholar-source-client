import React, { Suspense } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Loader from "../components/Loader/Loader";

const MainLayout = () => {
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <Navbar></Navbar>
      <ScrollToTop behavior="smooth" />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
