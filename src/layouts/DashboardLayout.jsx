import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import { CgProfile } from "react-icons/cg";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaHistory, FaSlidersH, FaUser } from "react-icons/fa";
import { LuBike } from "react-icons/lu";
import { MdEditDocument, MdOutlinePostAdd } from "react-icons/md";
import { IoMdHome, IoMdSettings } from "react-icons/io";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open max-w-screen-2xl mx-auto bg-[#eaeced]">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}

            <FaSlidersH />
          </label>
          <div className="px-4">SS DashBoard</div>
        </nav>
        <Outlet></Outlet>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow gap-6">
            {/* List item */}
            <li>
              <Link
                to="/"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                {/* Home icon */}

                <IoMdHome size={22} />
                <span className="is-drawer-close:hidden">Homepage</span>
              </Link>
            </li>
            {/* My Profile */}
            <li>
              <NavLink
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Profile"
                to="/dashboard/my-profile
"
              >
                <CgProfile size={22} />
                <span className="is-drawer-close:hidden">My Profile</span>
              </NavLink>
            </li>

            {/* AddScholarShip */}
            <li>
              <NavLink
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Add Scholarship"
                to="/dashboard/add-scholarship
"
              >
                <MdOutlinePostAdd size={22} />

                <span className="is-drawer-close:hidden">Add ScholarShip</span>
              </NavLink>
            </li>

            {/* Manage ScholarShip */}
            <li>
              <NavLink
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Manage Scholarship"
                to="/dashboard/manage-scholarship
"
              >
                <MdEditDocument size={22} />
                <span className="is-drawer-close:hidden">
                  Manage ScholarShip
                </span>
              </NavLink>
            </li>

            {/* Users Managment  */}
            <li>
              <NavLink
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Users Managment "
                to="/dashboard/users-managment 
"
              >
                <FaUser size={22} />
                <span className="is-drawer-close:hidden">Users Managment </span>
              </NavLink>
            </li>

            {/* List item */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Settings"
              >
                {/* Settings icon */}

                <IoMdSettings size={22} />
                <span className="is-drawer-close:hidden">Settings</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
