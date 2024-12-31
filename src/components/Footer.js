"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-10 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Brand Section */}
          <div>
            <Link href="/"> 
            <h1 className="text-lg font-bold">My Certificates</h1>
            </Link>
            <p className="text-sm text-gray-400">Empowering learning through verified credentials.</p>
          </div>

          {/* Links Section */}
          <div className="flex space-x-4">
            <Link href="/about" className="hover:text-gray-400">
              About
            </Link>
            <Link href="/certificates" className="hover:text-gray-400">
              Certificates
            </Link>
            <Link href="/admin/login" className="hover:text-gray-400">
              Admin Login
            </Link>
          </div>

          {/* Social Media Section */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=100026766931684"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://x.com/gps_96169"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://wa.me/918957818597?text=Hey%20%F0%9F%91%8B%2C%20how%20can%20I%20help%20you%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/gyan-pratap-singh-275785236/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/Gyanthakur"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Attribution Section */}
        <div className="mt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} My Certificates. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
