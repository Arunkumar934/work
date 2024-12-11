import React from "react";
import Footerimg from "../Images/pngtree-abstract-triangle-sign-illustration-logo-vector-image_283616__1_-removebg-preview.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-100 text-black py-8 mt-80">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Footer */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <img className="w-15 h-12" src={Footerimg} alt="Footer Logo" />
              <h2 className="text-3xl  font-bold pt-1 text-sky-600 hover:text-sky-800 pe-4 transition-all duration-300">
                Amizo
              </h2>
            </div>
            <p className="mt-8 text-gray-600 hover:text-gray-800 transition-all duration-300">
              Washla customers have a tremendous opportunity to answer the call
              of logistics.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left hover:scale-105 transition-all duration-300">
            <h1 className="text-xl font-semibold mb-4 text-sky-600 hover:text-sky-800 transition-all duration-300">
              Get in Touch
            </h1>
            <ul className="space-y-2 text-gray-600 hover:text-gray-800 transition-all duration-300">
              <li>8273 56th ST, Miami, Florida 33195, United States</li>
              <li>info@amizo.com</li>
              <li>052 5401 3322</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left hover:scale-105 transition-all duration-300">
            <h1 className="text-xl font-semibold mb-4 text-sky-600 hover:text-sky-800 transition-all duration-300">
              Quick Links
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-600 hover:text-gray-800 transition-all duration-300">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Team</li>
              </ul>
              <ul className="space-y-2 text-gray-600 hover:text-gray-800 transition-all duration-300">
                <li>FAQ</li>
                <li>Contact Us</li>
                <li>Gallery</li>
                <li>Blogs</li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left hover:scale-105 transition-all duration-300">
            <h1 className="text-xl font-semibold mb-4 text-sky-600 hover:text-sky-800 transition-all duration-300">
              Our Newsletter
            </h1>
            <p className="mt-8 text-gray-600 hover:text-gray-800 transition-all duration-300">
              Subscribe to our newsletter to receive the latest news about our
              services.
            </p>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 border border-gray-300 rounded-l-md"
              />
              <button className="bg-sky-600 text-white p-2 rounded-r-md hover:bg-sky-800 transition-all duration-300">
                SIGN UP
              </button>
            </div>
          </div>
        </div>

        <hr className="my-8 border-t border-gray-300" />

        {/* Copyrights */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 px-4">
          {/* Left Side: Copyright */}
          <div className="text-center sm:text-start text-gray-600 hover:text-gray-800 transition-all duration-300">
            <p>@ 2023 Amizo. All rights reserved.</p>
          </div>

          {/* Right Side: Social Media Icons */}
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <FaFacebook className="text-xl cursor-pointer transition-all duration-300 hover:text-blue-600 transform hover:scale-110" />
            <FaTwitter className="text-xl cursor-pointer transition-all duration-300 hover:text-blue-400 transform hover:scale-110" />
            <FaInstagram className="text-xl cursor-pointer transition-all duration-300 hover:text-pink-500 transform hover:scale-110" />
            <FaLinkedin className="text-xl cursor-pointer transition-all duration-300 hover:text-blue-500 transform hover:scale-110" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
