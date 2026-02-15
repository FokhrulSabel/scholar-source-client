import React from "react";
import { Link } from "react-router";
import {
  GraduationCap,
  Facebook,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";
import Logo from "../ui/Logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo></Logo>
            </div>

            <p className="text-base-content/70 text-sm leading-relaxed">
              Connecting students with scholarship opportunities worldwide.
              Simplifying the application process through a modern platform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base-content mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-base-content/70">
              <li>
                <Link to="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/scholarships"
                  className="hover:text-primary transition"
                >
                  Scholarships
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-primary transition">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-base-content mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-base-content/70">
              <li>
                <Link to="/about" className="hover:text-primary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-base-content mb-4">Follow Us</h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 rounded-full bg-base-100 shadow hover:shadow-md hover:text-primary transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                className="p-3 rounded-full bg-base-100 shadow hover:shadow-md hover:text-primary transition"
              >
                <Twitter size={18} />
              </a>

              <a
                href="#"
                className="p-3 rounded-full bg-base-100 shadow hover:shadow-md hover:text-primary transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="#"
                className="p-3 rounded-full bg-base-100 shadow hover:shadow-md hover:text-primary transition"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-base-300 text-center text-sm text-base-content/60">
          © {new Date().getFullYear()} ScholarSource. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
