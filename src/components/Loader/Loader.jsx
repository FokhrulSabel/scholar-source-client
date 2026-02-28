import React from "react";
import { PiGraduationCapLight } from "react-icons/pi";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-base-100">
      <div className="relative h-14 w-14">
        <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
        <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <PiGraduationCapLight className="text-primary text-3xl animate-pulse" />
        </div>
      </div>

      <p className="mt-4 text-sm font-semibold text-base-content animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default Loader;
