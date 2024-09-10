import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center py-6"
      style={{
        backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20230616/pngtree-exterior-design-of-a-modern-house-in-the-city-a-3d-image_3606113.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay with opacity */}
      <div className="relative max-w-6xl mx-auto px-4 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo or Brand Name */}
          <div className="text-lg font-bold">
            <Link to="/" className="hover:text-gray-400">
              RealEstate
            </Link>
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <Link to="/about" className="text-sm hover:text-gray-400">
              About
            </Link>
            <Link to="/contact-owner" className="text-sm hover:text-gray-400">
              Contact
            </Link>
            <Link to="/privacy" className="text-sm hover:text-gray-400">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm hover:text-gray-400">
              Terms of Service
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 mt-4">
          © {new Date().getFullYear()} RealEstate. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
