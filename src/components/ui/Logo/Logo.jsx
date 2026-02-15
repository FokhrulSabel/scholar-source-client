import React from "react";
import { Link } from "react-router";
import logo from "../../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link
        to="/"
        className="group flex items-center gap-3 transition-all duration-300 active:scale-95"
      >
        {/* Logo Icon Container */}
        <div className="relative p-[2px] rounded-xl bg-gradient-to-br from-[#d19ef1] via-[#8b3fd6] to-[#5a189a] shadow-lg shadow-[#8b3fd6]/30 group-hover:shadow-[#8b3fd6]/50 transition-all duration-300">
          <div className="bg-base-100 rounded-xl p-1.5 sm:p-2 flex items-center justify-center">
            <img
              src={logo}
              alt="ScholarSource Logo"
              className="w-6 sm:w-8 h-6 sm:h-8 object-contain group-hover:rotate-6 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Brand Text */}
        <span className="text-xl sm:text-2xl font-extrabold tracking-tight flex items-center">
          <span className="text-base-content">Scholar</span>

          <span className="relative ml-1">
            <span className="bg-gradient-to-r from-[#d19ef1] via-[#8b3fd6] to-[#5a189a] bg-clip-text text-transparent">
              Source
            </span>

            {/* Underline Accent */}
            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#d19ef1] via-[#8b3fd6] to-[#5a189a] rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </span>
        </span>
      </Link>
    </div>
  );
};

export default Logo;
