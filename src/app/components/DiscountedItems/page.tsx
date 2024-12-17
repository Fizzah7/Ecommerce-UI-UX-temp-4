import React from "react";
import Image from "next/image";

const DiscountItem: React.FC = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-12">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A0B5B] mb-8">
        Discount Item
      </h2>
       {/* Category Navigation */}
       <div className="flex items-center justify-center space-x-4 text-sm text-[#1A0B5B] mb-4">
            <span className="text-pink-500 font-medium cursor-pointer">Wood Chair</span>
            <span className="cursor-pointer hover:text-pink-500 transition">Plastic Chair</span>
            <span className="cursor-pointer hover:text-pink-500 transition">Sofa Collection</span>
          </div>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Left Section */}
        <div className="flex-1">
         

          {/* Discount Heading */}
          <h3 className="text-2xl md:text-3xl mt-28 font-bold text-[#1A0B5B]">
            20% Discount Of All Products
          </h3>

          {/* Subheading */}
          <p className="text-pink-500 font-medium mt-2">Eams Sofa Compact</p>

          {/* Description */}
          <p className="text-gray-500 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
          </p>

          {/* Features List */}
          <ul className="mt-6 space-y-2 text-gray-600">
            <li className="flex items-center">
              <span className="text-purple-500 text-lg">✔</span>
              <span className="ml-2">Material expose like metals</span>
            </li>
            <li className="flex items-center">
              <span className="text-purple-500 text-lg">✔</span>
              <span className="ml-2">Simple neutral colours</span>
            </li>
            <li className="flex items-center">
              <span className="text-purple-500 text-lg">✔</span>
              <span className="ml-2">Clear lines and geometric figures</span>
            </li>
            <li className="flex items-center">
              <span className="text-purple-500 text-lg">✔</span>
              <span className="ml-2">Material expose like metals</span>
            </li>
          </ul>

          {/* CTA Button */}
          <button className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition">
            Shop Now
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-pink-100 rounded-full"></div>
            <Image
              src="/image/chair.png"
              alt="Discounted Chair"
              layout="fill"
              objectFit="contain"
              className="relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountItem;
