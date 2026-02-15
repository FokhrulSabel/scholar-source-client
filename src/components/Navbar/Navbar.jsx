import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { FaSignOutAlt, FaThLarge, FaUserCircle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import Logo from "../ui/Logo/Logo";
import Button from "../ui/Button/Button";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("Theme") || "light");
  const [scrolled, setScrolled] = useState(false);

  // Scroll handler to toggle glass effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("You signed out successfully!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleToggle = (e) => {
    e.target.checked ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    localStorage.setItem("Theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const links = (
    <>
      <li>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-scholarships" className="nav-link">
          Scholarships
        </NavLink>
      </li>
    </>
  );
  return (
    <div
      className={`sticky top-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-base-100/70 backdrop-blur-2xl border-b border-base-200 shadow-sm"
          : "bg-base-100"
      }`}
    >
      {/* Gradient Top Border */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#d19ef1] via-[#8b3fd6] to-[#5a189a]" />

      <div className="navbar px-4 md:px-10 py-3">
        <ToastContainer />

        {/* LEFT */}
        <div className="navbar-start gap-3">
          {/* Mobile */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary"
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
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-10 mt-3 w-52 p-3 shadow-2xl border border-base-200">
              {links}
            </ul>
          </div>

          <Logo />
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 font-semibold tracking-wide">
            {links}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end flex items-center gap-4">
          {/* Theme Toggle */}
          <label className="swap swap-rotate p-2 rounded-full bg-base-200 hover:bg-base-300 transition-all duration-300 cursor-pointer">
            <input
              onChange={handleToggle}
              type="checkbox"
              checked={theme === "dark"}
            />
            <svg
              className="swap-off h-5 w-5 text-[#f59e0b]"
              viewBox="0 0 24 24"
            >
              <path d="M12 4V2M12 22v-2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41M12 6.5A5.5 5.5 0 1017.5 12 5.5 5.5 0 0012 6.5z" />
            </svg>
            <svg className="swap-on h-5 w-5 text-[#d19ef1]" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </label>

          {/* USER */}
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="avatar transition-all duration-300 hover:scale-105"
              >
                <div className="w-10 rounded-full p-[2px] bg-gradient-to-br from-[#d19ef1] via-[#8b3fd6] to-[#5a189a]">
                  <div className="rounded-full bg-base-100 p-[2px]">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt="User" />
                    ) : (
                      <FaUserCircle className="w-full h-full text-primary p-1" />
                    )}
                  </div>
                </div>
              </div>

              <ul className="dropdown-content menu p-3 shadow-2xl bg-base-100 rounded-2xl border border-base-200 z-[100] w-64 mt-4">
                <div className="px-4 py-3 mb-2 border-b border-base-200">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                    Account
                  </p>
                  <p className="text-sm font-black text-base-content truncate">
                    {user?.displayName || "Student"}
                  </p>
                </div>

                <li>
                  <NavLink
                    to="/dashboard/my-profile"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-base-200 transition-all"
                  >
                    <FaUserCircle size={18} className="text-primary" />
                    My Profile
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-base-200 transition-all"
                  >
                    <FaThLarge size={18} className="text-primary" />
                    Dashboard
                  </NavLink>
                </li>

                <div className="h-px bg-base-200 my-2 mx-2" />

                <li>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-error hover:bg-error/10 font-semibold transition-all w-full"
                  >
                    <FaSignOutAlt size={18} />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Button to="/login">Login</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
