import React from "react";
import { FaRegFileAlt, FaUser, FaUserCircle } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdEditDocument, MdSchool } from "react-icons/md";
import {
  RiChatSettingsFill,
  RiFileSettingsLine,
  RiMessageLine,
} from "react-icons/ri";
import { TiDocumentAdd } from "react-icons/ti";
import { Link, NavLink, Outlet } from "react-router";
import useRole from "../hooks/useRole";
import { GoGraph } from "react-icons/go";
import useAuth from "../hooks/useAuth";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const DashBoardLayout = () => {
  const { role } = useRole();
  const { user } = useAuth();

  const navStyle =
    "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200";

  const activeStyle = "bg-primary/10 text-primary shadow-sm";

  const inactiveStyle =
    "text-base-content/70 hover:bg-base-200 hover:text-base-content";

  return (
    <div className="drawer lg:drawer-open max-w-screen-2xl mx-auto bg-base-100 min-h-screen">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        <nav className="sticky top-0 z-30 backdrop-blur-xl bg-base-100/70 border-b border-base-200 px-6 h-16 flex items-center">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-4" className="btn btn-ghost btn-square">
              <HiOutlineMenuAlt2 size={22} />
            </label>
          </div>

          <div className="flex-1">
            <h1 className="text-lg font-semibold tracking-tight">
              Dashboard Overview
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-primary/30 ring-offset-2 ring-offset-base-100">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="profile" />
                ) : (
                  <FaUserCircle className="w-full h-full p-1 text-base-content/40" />
                )}
              </div>
            </div>
          </div>
        </nav>

        <main className="p-8 bg-base-200/30 flex-grow">
          <div className="bg-base-100 rounded-2xl shadow-sm border border-base-200 p-6 min-h-[80vh]">
            <Outlet />
          </div>
        </main>
      </div>

      <div className="drawer-side z-40">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

        <div className="w-72 bg-base-100 border-r border-base-200 flex flex-col">
          {/* Logo */}
          <div className="h-16 flex items-center px-6 border-b border-base-200">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 bg-primary text-white flex items-center justify-center rounded-xl shadow-md">
                <MdSchool size={20} />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Scholar<span className="text-primary">Source</span>
              </span>
            </Link>
          </div>

          {/* Menu */}
          <ul className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {/* General */}
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `${navStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              <IoMdHome size={18} />
              Home
            </NavLink>

            <NavLink
              to="/dashboard/my-profile"
              className={({ isActive }) =>
                `${navStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              <CgProfile size={18} />
              My Profile
            </NavLink>

            {/* Admin */}
            {role === "admin" && (
              <>
                <p className="text-xs uppercase tracking-wider text-base-content/40 mt-6 px-3">
                  Admin
                </p>

                <NavLink
                  to="/dashboard/manage-users"
                  className={({ isActive }) =>
                    `${navStyle} ${isActive ? activeStyle : inactiveStyle}`
                  }
                >
                  <FaUser size={16} />
                  User Control
                </NavLink>

                <NavLink
                  to="/dashboard/add-scholarship"
                  className={({ isActive }) =>
                    `${navStyle} ${isActive ? activeStyle : inactiveStyle}`
                  }
                >
                  <TiDocumentAdd size={18} />
                  Add Scholarship
                </NavLink>

                <NavLink
                  to="/dashboard/manage-scholarship"
                  className={({ isActive }) =>
                    `${navStyle} ${isActive ? activeStyle : inactiveStyle}`
                  }
                >
                  <MdEditDocument size={18} />
                  Manage Scholarship
                </NavLink>

                <NavLink
                  to="/dashboard/data-analytics"
                  className={({ isActive }) =>
                    `${navStyle} ${isActive ? activeStyle : inactiveStyle}`
                  }
                >
                  <GoGraph size={18} />
                  Analytics
                </NavLink>
              </>
            )}

            {/* Moderator */}
            {(role === "admin" || role === "moderator") && (
              <>
                <p className="text-xs uppercase tracking-wider text-base-content/40 mt-6 px-3">
                  Operations
                </p>

                <NavLink
                  to="/dashboard/manage-applications"
                  className={({ isActive }) =>
                    `${navStyle} ${isActive ? activeStyle : inactiveStyle}`
                  }
                >
                  <RiChatSettingsFill size={18} />
                  Manage Application
                </NavLink>

                <NavLink
                  to="/dashboard/all-reviews"
                  className={({ isActive }) =>
                    `${navStyle} ${isActive ? activeStyle : inactiveStyle}`
                  }
                >
                  <RiFileSettingsLine size={18} />
                  Review Center
                </NavLink>
              </>
            )}

            {/* Student */}
            <p className="text-xs uppercase tracking-wider text-base-content/40 mt-6 px-3">
              Student
            </p>

            <NavLink
              to="/dashboard/my-applications"
              className={({ isActive }) =>
                `${navStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              <FaRegFileAlt size={16} />
              My Applications
            </NavLink>

            <NavLink
              to="/dashboard/my-reviews"
              className={({ isActive }) =>
                `${navStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              <RiMessageLine size={16} />
              Feedback
            </NavLink>
          </ul>

          {/* Bottom User Card */}
          <div className="p-4 border-t border-base-200">
            <div className="flex items-center gap-3 bg-base-200/60 rounded-2xl p-3">
              <div className="w-10 h-10 bg-primary/20 text-primary flex items-center justify-center rounded-xl font-semibold">
                {role?.[0]?.toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-medium capitalize">{role} Account</p>
                <p className="text-xs text-base-content/50">Active Status</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
