import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/all-scholarships" className="nav-link">
          All Scholarships
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-10 sticky top-0 z-50">
      {/* <ToastContainer /> */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center gap-1.5">
          {/* <FaUtensils className="text-2xl text-secondary" /> */}
          <Link to="/" className="normal-case text-2xl font-bold">
            Scholar<span className="text-primary">Source</span>
          </Link>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{links}</ul>
      </div>

      {/* User Section */}
      <div className="navbar-end flex items-center gap-3">
        <Link className="btn" to="/login">
          Login
        </Link>
        <Link className="btn" to="/register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
