import React from "react";
import Image from "next/image";

// Props interface renamed to avoid conflict
interface trandingProducts {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
  onAddToCart: () => void;
}

// Corrected component definition
const TrandingProducts: React.FC<trandingProducts> = ({
  title,
  description,
  price,
  imageSrc,
  onAddToCart,
}) => (
  <div className="flex flex-col md:flex-row items-center bg-purple-50 rounded-lg p-6 shadow-md max-w-4xl mx-auto">
    {/* Left Section - Image */}
    <div className="relative w-full md:w-1/2 flex justify-center items-center">
      <div className="rounded-full bg-pink-200 w-64 h-64 flex justify-center items-center">
        <Image
          src={imageSrc}
          alt={title}
          className="rounded-lg"
          width={200}
          height={200}
        />
      </div>
    </div>

    {/* Right Section - Content */}
    <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8 text-center md:text-left">
      <h2 className="text-2xl font-bold text-purple-800">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="mt-4 flex items-center justify-center md:justify-start gap-4">
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 focus:ring focus:ring-purple-300"
          onClick={onAddToCart}
        >
          Add To Cart
        </button>
        <span className="text-lg font-semibold text-purple-800">{price}</span>
      </div>
    </div>
  </div>
);

export default trandingProducts ;
