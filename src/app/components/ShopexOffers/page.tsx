import Image from "next/image";

const ShopexOffers = () => {
  const products = [
    {
      image: "/image/free-delivery 1.png",
      name: "Free-Delivery",
      code: (
        <>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit.
        </>
      ),
    },
    {
      image: "/image/cashback 1.png",
      name: "Cash-back",
      code: (
        <>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit.
        </>
      ),
    },
    {
      image: "/image/premium-quality 1.png",
      name: "Premium-Quality",
      code: (
        <>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit.
        </>
      ),
    },
    {
      image: "/image/24hoursupport.png",
      name: "24-Hours-Support",
      code: (
        <>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit.
        </>
      ),
    },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[#1A0B5B]">
        What Shopex Offer!
      </h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="group p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-all duration-300"
          >
            {/* Image */}
            <div className="flex items-center justify-center h-36 sm:h-40 md:h-44 bg-white">
              <Image
                src={product.image}
                alt={product.name}
                width={150}
                height={150}
                className="object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-[#1A0B5B] group-hover:text-purple-600">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{product.code}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopexOffers;
