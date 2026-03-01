import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../../hooks/useAxios";
import ScholarshipCard from "../../ui/ScholarshipCard/ScholarshipCard";
import { Link } from "react-router";

import { motion } from "framer-motion";
import CardSkeleton from "../../ui/skeleton/CardSkeleton";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const TopScholarships = () => {
  const axiosInstance = useAxios();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["AllScholarship"],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/all-scholarships?limit=${8}&sort=top`,
      );
      return res.data;
    },
  });

  const scholarships = data?.scholarships || [];

  if (isLoading) return <CardSkeleton />;

  if (isError)
    return (
      <div className="py-20 text-center text-red-500">
        <p>Error fetching scholarships: {error?.message || "Unknown Error"}</p>
      </div>
    );

  return (
    <section className="relative py-16 px-4 md:px-8 bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 max-w-7xl mx-auto">
        <div className="mb-4 md:mb-0">
          <h6 className="uppercase tracking-wider text-sm text-purple-600/80 mb-2">
            — Top Scholarships
          </h6>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Featured Scholarships
          </h2>
          <p className="mt-2 text-base text-gray-600 max-w-xl leading-relaxed">
            Discover the best scholarships curated to help you achieve your
            academic goals with guidance, benefits, and financial support.
          </p>
        </div>

        <div>
          <Link
            to="/all-scholarships"
            className="inline-flex bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-400 transition-all shadow-lg"
          >
            Explore All Scholarships
            <span className="ml-2 text-lg">→</span>
          </Link>
        </div>
      </div>

      {/* Scholarships Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {scholarships.map((item) => (
          <motion.div key={item._id} variants={itemVariants}>
            <ScholarshipCard item={item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TopScholarships;
