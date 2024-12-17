import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-200
;
 text-gray-700 py-10">
      {/* Main Container */}
      <div className="container mx-auto px-4 lg:px-[100px]">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Hekto</h2>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="px-4 py-2 border rounded-l-lg w-full focus:outline-none"
              />
              <button className="bg-pink-500 text-white rounded-r-lg hover:bg-pink-600 flex flex-col mr-2">
                Sign Up
              </button>
            </div>
            <p className="text-sm mt-4">Contact Info</p>
            <p className="text-sm">17 Princess Road, London, Greater London NW1 8JR, UK</p>
          </div>
 
          {/* Categories Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>

          {/* Customer Care Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Customer Care</h3>
            <ul className="space-y-2 text-sm">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>

          {/* Pages Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Pages</h3>
            <ul className="space-y-2 text-sm">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Elements</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t mt-8 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
            <p>©Webecy - All Rights Reserved</p>
            <div className="flex space-x-4 text-sm px-[200px]">
  <a
    href="#"
    aria-label="Facebook"
    className="bg-slate-800 text-white p-2 rounded-full hover:bg-pink-500 transition-colors"
  >
    <FaFacebookF />
  </a>
  <a
    href="#"
    aria-label="Instagram"
    className="bg-slate-800 text-white p-2 rounded-full hover:bg-pink-500 transition-colors"
  >
    <FaInstagram />
  </a>
  <a
    href="#"
    aria-label="Twitter"
    className="bg-slate-800 text-white p-2 rounded-full hover:bg-pink-500 transition-colors"
  >
    <FaTwitter />
  </a>
</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
