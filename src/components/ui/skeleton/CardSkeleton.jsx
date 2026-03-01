import React from "react";

const CardSkeleton = ({ count = 8 }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="bg-white dark:bg-base-200 rounded-xl shadow p-4 space-y-4 animate-pulse"
        >
          <div className="h-40 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>

          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>

          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>

          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
        </div>
      ))}
    </div>
  );
};

export default CardSkeleton;
