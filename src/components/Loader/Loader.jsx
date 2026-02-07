import React from "react";

const Loader = ({ fullScreen = true }) => {
  return (
    <div
      className={`${
        fullScreen ? "min-h-screen" : "h-40"
      } flex flex-col justify-center items-center gap-4`}
    >
      {/* Spinner */}
      <span className="loading loading-spinner loading-lg text-primary"></span>

      {/* Loading Text */}
      <p className="text-lg font-semibold animate-pulse">
        Loading<span className="ml-1">...</span>
      </p>
    </div>
  );
};

export default Loader;
