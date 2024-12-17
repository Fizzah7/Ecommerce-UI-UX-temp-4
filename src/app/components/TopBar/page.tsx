'use client';

import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import {
  FaChevronDown,
  FaRegEnvelope,
  FaUser,
  FaRegHeart ,
} from "react-icons/fa";
import { PiPhoneCallBold } from "react-icons/pi";
import { CgShoppingCart } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { useState } from "react";

const TopBar = () => {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);

  return (
    <div className="bg-violet-700 text-white py-2 text-sm">
      {/* TopBar Container */}
      <div className="w-full max-w-[1200px] flex flex-wrap items-center justify-between px-[45px] mx-auto gap-4">
        {/* Left Section */}
        <div className="flex flex-wrap items-center justify-start gap-6 mr-16 w-full sm:w-auto">
          {/* Email */}
          <a
            href="mailto:mhhasanul@gmail.com"
            className="flex items-center gap-2 hover:text-gray-200"
          >
            <FaRegEnvelope />
            <span className="hidden sm:inline">mhhasanul@gmail.com</span>
          </a>
          {/* Phone */}
          <a
            href="tel:1234567890"
            className="flex items-center gap-2 hover:text-gray-200"
          >
            < PiPhoneCallBold  />
            <span className="hidden sm:inline">(12345)67890</span>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap items-center justify-start gap-4 w-full sm:w-auto">
          {/* Language Selector */}
          <div
            className="relative cursor-pointer flex items-center gap-1"
            onClick={() => setLanguageDropdown(!languageDropdown)}
          >
            <span>English</span>
            <span className="text-xs">
              <FaChevronDown />
            </span>
            {languageDropdown && (
              <div className="absolute top-8 bg-white text-black rounded shadow-md p-2">
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">
                  English
                </div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">
                  Spanish
                </div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">
                  French
                </div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">
                  German
                </div>
              </div>
            )}
          </div>

          {/* Currency Selector */}
          <div
            className="relative cursor-pointer flex items-center gap-1"
            onClick={() => setCurrencyDropdown(!currencyDropdown)}
          >
            <span>USD</span>
            <span className="text-xs">
              <FaChevronDown />
            </span>
            {currencyDropdown && (
              <div className="absolute top-8 bg-white text-black rounded shadow-md p-2">
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">
                  USD
                </div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">
                  EUR
                </div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">
                  GBP
                </div>
              </div>
            )}
          </div>

          {/* Login */}
          <a
            href="/login"
            className="flex items-center gap-2 cursor-pointer hover:text-gray-200"
          >
            
            <span className="hidden md:inline">Login</span>
            <FiUser />
          </a>

          {/* Wishlist */}
          <a
            href="/wishlist"
            className="flex items-center gap-2 cursor-pointer hover:text-gray-200"
          >
            
            <span className="hidden md:inline">Wishlist</span>
            <FaRegHeart  />
          </a>

          {/* Cart */}
          <a
            href="/cart"
            className="cursor-pointer hover:text-gray-200 flex items-center gap-2"
          >
            <CgShoppingCart  />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
