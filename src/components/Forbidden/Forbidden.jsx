import React from "react";
import { Link } from "react-router";
import { ShieldX } from "lucide-react";

const Forbidden = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-base-100 shadow-2xl rounded-3xl p-10 text-center border border-base-300">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-error/10 p-6 rounded-full">
            <ShieldX className="w-12 h-12 text-error" />
          </div>
        </div>

        {/* 403 Number */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-error tracking-tight">
          403
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-base-content">
          Access Forbidden
        </h2>

        {/* Description */}
        <p className="text-base-content/70 mt-4 leading-relaxed">
          You don’t have permission to access this page. Please log in with the
          appropriate role or return to the homepage.
        </p>

        {/* Divider */}
        <div className="divider my-6"></div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="btn btn-primary px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            Go Home
          </Link>

          <Link
            to="/login"
            className="btn btn-outline px-6 rounded-xl hover:bg-base-200 transition-all duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Forbidden;
