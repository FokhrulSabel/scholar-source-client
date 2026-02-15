import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FaUsers, FaGraduationCap, FaDollarSign } from "react-icons/fa";
import { motion } from "framer-motion";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "../../../components/Loader/Loader";
import UniversityPieChart from "../../../components/UniversityPieChart/UniversityPieChart";

const StatCard = ({ title, subtitle, value, icon: Icon, prefix }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="relative p-8 rounded-3xl bg-base-100 border border-primary/10 hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex items-center gap-6">
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d19ef1] via-[#8b3fd6] to-[#5a189a] text-white flex items-center justify-center text-2xl shadow-lg shadow-primary/20">
          <Icon />
        </div>

        {/* Content */}
        <div>
          <p className="text-xs uppercase tracking-widest text-base-content/40 font-semibold mb-1">
            {subtitle}
          </p>
          <h3 className="text-sm font-medium text-base-content/60">{title}</h3>
          <div className="flex items-baseline gap-1 mt-1">
            {prefix && (
              <span className="text-lg font-bold text-primary">{prefix}</span>
            )}
            <span className="text-3xl font-bold text-base-content">
              {value?.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const DataAnalytics = () => {
  const axiosSecure = useAxiosSecure();

  const { data, isLoading } = useQuery({
    queryKey: ["analytics"],
    queryFn: async () => {
      const res = await axiosSecure.get("/analytics");
      return res.data;
    },
  });

  if (isLoading) return <Loader />;

  const totalUsers = data?.totalUsers || 0;
  const totalScholarships = data?.totalScholarships || 0;
  const totalRevenue = data?.totalRevenue || 0;
  const universityData = data?.Data || [];

  return (
    <div className="max-w-7xl mx-auto px-4 mt-10 space-y-10">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-base-content">
          Platform Analytics Overview
        </h2>
        <p className="text-base-content/60 mt-1">
          Real-time insights into users, scholarships, and revenue performance.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatCard
          subtitle="Community"
          title="Total Platform Users"
          value={totalUsers}
          icon={FaUsers}
        />

        <StatCard
          subtitle="Programs"
          title="Active Scholarships"
          value={totalScholarships}
          icon={FaGraduationCap}
        />

        <StatCard
          subtitle="Financial"
          title="Platform Revenue"
          value={totalRevenue}
          icon={FaDollarSign}
          prefix="$"
        />
      </div>

      {/* Chart Section */}
      <div>
        <UniversityPieChart universityData={universityData} />
      </div>
    </div>
  );
};

export default DataAnalytics;
