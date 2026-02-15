import React from "react";
import useRole from "../../../hooks/useRole";
import useAuth from "../../../hooks/useAuth";
import {
  MdAdminPanelSettings,
  MdSchool,
  MdOutlineExplore,
} from "react-icons/md";
import { RiShieldUserFill } from "react-icons/ri";
import Loader from "../../../components/Loader/Loader";
import { motion } from "framer-motion";

const DashboardHome = () => {
  const { role } = useRole();
  const { user, loading } = useAuth();

  const roleConfig = {
    admin: {
      title: "Administrator",
      description:
        "Manage system users, monitor analytics, and configure platform settings.",
      icon: <MdAdminPanelSettings size={22} />,
      badge: "bg-purple-100 text-purple-700",
    },
    moderator: {
      title: "Moderator",
      description:
        "Review applications, manage approvals, and ensure content quality.",
      icon: <RiShieldUserFill size={22} />,
      badge: "bg-emerald-100 text-emerald-700",
    },
    student: {
      title: "Student",
      description:
        "Track applications, manage reviews, and monitor scholarship progress.",
      icon: <MdSchool size={22} />,
      badge: "bg-blue-100 text-blue-700",
    },
  };

  const current = roleConfig[role] || roleConfig.student;

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-6xl mx-auto"
      >
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1">
              Welcome back, {user?.displayName || "User"} 👋
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white border border-gray-200 px-5 py-3 rounded-xl">
            <img
              src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />

            <div className="text-sm">
              <p className="font-medium text-gray-800">
                {user?.displayName || "User"}
              </p>
              <p className="text-gray-500 text-xs">{user?.email}</p>
            </div>

            <span
              className={`text-xs font-medium px-3 py-1 rounded-full ${current.badge}`}
            >
              {role || "student"}
            </span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Account Overview Card */}
          <div className="col-span-2 bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-sm transition">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3 text-gray-700">
                {current.icon}
                <h2 className="text-lg font-semibold">
                  {current.title} Overview
                </h2>
              </div>
              <span className="text-xs text-gray-400 uppercase tracking-wide">
                Account Status
              </span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              {current.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-xl p-5">
                <p className="text-xs text-gray-400 uppercase mb-2">User ID</p>
                <p className="text-sm font-medium text-gray-800">
                  {user?.uid?.slice(0, 10)}
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-5">
                <p className="text-xs text-gray-400 uppercase mb-2">
                  System Status
                </p>
                <p className="text-sm font-medium text-green-600">
                  ● Operational
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-sm transition flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Quick Actions
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Navigate through dashboard modules and manage your workflow
                efficiently.
              </p>
            </div>

            <button className="mt-8 flex items-center justify-center gap-2 bg-gray-900 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-gray-800 transition">
              <MdOutlineExplore size={18} />
              Explore Features
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-xs text-gray-400 text-center">
          © {new Date().getFullYear()} Scholarship Management System. All rights
          reserved.
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardHome;
