import React from "react";
import { FaGlobe, FaUniversity, FaClock } from "react-icons/fa";
import { Link } from "react-router";

const ScholarshipCard = ({ item }) => {
  return (
    <div className="group relative bg-base-100 border border-base-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={item?.image || "/placeholder.jpg"}
          alt={item?.scholarshipName}
          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

        {/* category badge */}
        <span className="absolute top-3 left-3 badge badge-primary badge-sm shadow">
          {item?.subjectCategory}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-grow">

        {/* Title */}
        <h2 className="text-lg font-bold text-base-content leading-snug line-clamp-2 min-h-[48px]">
          {item?.scholarshipName}
        </h2>

        {/* University */}
        <div className="mt-2 space-y-1 text-sm text-base-content/70">
          <div className="flex items-center gap-2">
            <FaUniversity className="text-primary text-xs" />
            <span className="truncate">{item?.universityName}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaGlobe className="text-secondary text-xs" />
            <span>
              {item?.city}, {item?.country}
            </span>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-3 mt-4 text-sm">

          <div className="bg-base-200 rounded-lg p-2 text-center">
            <p className="text-xs opacity-70">Application Fee</p>
            <p className="font-semibold text-primary">
              ${item?.applicationFees}
            </p>
          </div>

          <div className="bg-error/10 rounded-lg p-2 text-center">
            <p className="text-xs opacity-70 flex justify-center items-center gap-1">
              <FaClock className="text-error text-xs" /> Deadline
            </p>
            <p className="font-semibold text-error text-xs">
              {item?.deadline}
            </p>
          </div>

        </div>

        {/* Button */}
        <div className="mt-auto pt-5">
          <Link
            to={`/scholarships/${item?._id}`}
            className="btn btn-primary w-full btn-sm rounded-lg normal-case tracking-wide hover:scale-[1.02] transition-all duration-200"
          >
            View Details →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ScholarshipCard;
