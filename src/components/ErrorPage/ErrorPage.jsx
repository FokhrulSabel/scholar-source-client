import { SearchX } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-base-100 shadow-2xl rounded-3xl p-10 text-center border border-base-300">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-primary/10 p-6 rounded-full">
            <SearchX className="w-12 h-12 text-primary" />
          </div>
        </div>

        {/* 404 Number */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-primary tracking-tight">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-base-content">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-base-content/70 mt-4 leading-relaxed">
          The page you’re looking for doesn’t exist or may have been moved.
          Please check the URL or navigate back to safety.
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

          <button
            onClick={() => window.history.back()}
            className="btn btn-outline px-6 rounded-xl hover:bg-base-200 transition-all duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
