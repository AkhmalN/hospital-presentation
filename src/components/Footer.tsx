import React from "react";
// Optional: Import social icons from a library like react-icons
// import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-400 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {currentYear} YourCompanyName. All rights reserved.</p>
            <p className="text-sm">Built for Better Healthcare</p>
          </div>

          {/* Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="/privacy-policy"
              className="hover:text-white transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="hover:text-white transition duration-300"
            >
              Terms of Service
            </a>
            <a href="#cta" className="hover:text-white transition duration-300">
              Contact Us
            </a>
          </div>

          {/* Social Media Icons (Optional) */}
          {/*
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300"><FaFacebook size={24} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300"><FaTwitter size={24} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300"><FaLinkedin size={24} /></a>
          </div>
          */}
        </div>
        <div className="text-center text-xs mt-6 border-t border-gray-700 pt-4">
          Disclaimer: This is a sample website for demonstration purposes.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
