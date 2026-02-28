// DashboardStatSkeleton.jsx
import React from "react";

const DashboardStatSkeleton = ({ count = 4 }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 animate-pulse">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="p-6 bg-white dark:bg-base-200 rounded-xl shadow space-y-3"
        >
          <div className="h-6 w-1/2 bg-gray-300 rounded"></div>
          <div className="h-8 w-1/3 bg-gray-400 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStatSkeleton;
