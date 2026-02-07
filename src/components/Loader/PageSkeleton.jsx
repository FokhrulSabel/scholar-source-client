import React from "react";

const PageSkeleton = () => {
  return (
    <div className="p-6 space-y-6 animate-pulse">
      {/* Page Header */}
      <div className="space-y-3">
        <div className="h-8 w-64 bg-base-300 rounded"></div>
        <div className="h-4 w-96 bg-base-300 rounded"></div>
      </div>

      {/* Cards Grid Skeleton */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="p-4 border border-base-300 rounded-xl space-y-4"
          >
            <div className="h-40 bg-base-300 rounded-lg"></div>
            <div className="h-4 w-3/4 bg-base-300 rounded"></div>
            <div className="h-4 w-1/2 bg-base-300 rounded"></div>
            <div className="h-10 w-full bg-base-300 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageSkeleton;
