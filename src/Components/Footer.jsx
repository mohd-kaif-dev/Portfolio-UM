import { HeartHandshake } from "lucide-react";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 md:py-2">
      <div className="container mx-auto text-center flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-4 md:mb-0 flex items-center justify-center transition-all duration-500">
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="mx-2 text-white hover:text-emerald-700 hover:scale-120"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="mx-2 text-white hover:text-emerald-700 hover:scale-120"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/umar_masih"
            target="_blank"
            className="mx-2 text-white hover:text-emerald-700 hover:scale-120"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="mx-2 text-white hover:text-emerald-700 hover:scale-120"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <p className="text-sm">
          © {currentYear} Umar Masih. All rights reserved.
        </p>
        <p className="text-sm mt-2 md:mt-0">
          Developed by{" "}
          <a
            href="https://www.github.com/mohd-kaif-dev"
            target="_blank"
            className="text-amber-600 hover:underline font-bold"
          >
            Mohd Kaif
          </a>{" "}
          <HeartHandshake className="w-4 h-4 inline" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
