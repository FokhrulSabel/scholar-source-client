import React from "react";

const SkeletonCard = () => {
  return (
    <div className="animate-pulse bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-64 flex flex-col justify-between shadow-lg">
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-4" />
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-2" />
      <div className="h-4 bg-gray-300 rounded w-1/3" />
      <div className="mt-auto space-y-2">
        <div className="h-4 bg-gray-300 rounded w-full" />
        <div className="h-4 bg-gray-300 rounded w-3/4" />
      </div>
    </div>
  );
};

export default SkeletonCard;
