import React from "react";
import Image from "next/image";

const TrendingProduct: React.FC = () => {
  return (
    <div className="bg-[#F1F0FF;
] py-12 px-4 md:px-12">
      {/* Container */}
      <div className="bg-[#F1F0FF]  md:p-12 flex flex-col md:flex-row items-center gap-8 w-[full]">
        {/* Left Section: Image */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
          <div className="absolute inset-0 bg-pink-100 rounded-full"></div>
          <Image
            src="/image/Stylish-Sofa-Chair.png" // Replace with your image path
            alt="Trending Blue Sofa"
            layout="fill"
            objectFit="contain"
            className="relative z-10"
          />
        </div>

        {/* Right Section: Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A0B5B] mb-6">
            Unique Features Of Latest &<br />
            Trending Products
          </h2>

          {/* Features List */}
          <ul className="space-y-4 text-gray-600 text-sm md:text-base">
            <li className="flex items-center">
              <span className="inline-block w-3 h-3 bg-pink-500 rounded-full mr-2"></span>
              All frames constructed with hardwood solids and laminates
            </li>
            <li className="flex items-center">
              <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
              Reinforced with double wood dowels, glue, screw - nails corner
              blocks and machine nails
            </li>
            <li className="flex items-center">
              <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              Arms, backs and seats are structurally reinforced
            </li>
          </ul>

          {/* CTA and Price */}
          <div className="mt-6 flex items-center space-x-6">
            <button className="px-6 py-3 bg-pink-500 text-white font-medium rounded-lg shadow hover:bg-pink-600 transition">
              Add To Cart
            </button>
            <div>
              <p className="text-[#1A0B5B] font-semibold">B&B Italian Sofa</p>
              <p className="text-gray-500">$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProduct;
