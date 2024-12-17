import Image from "next/image";
 

const ProductGrid = () => {
    const products = [
      {
        image: "/image/9component.png",
        name: "Comfort Handy Craft",
        code: "$65.00",
        price: "$42.00",
      },
      {
        image: "image/image 15.png",
        name: "Comfort Handy Craft",
        code:  "$65.00",
        price: "$42.00",
      },
      {
        image: "image/image 16.png",
        name: "Comfort Handy Craft",
        code:  "$65.00",
        price: "$42.00",
      },
      {
        image: "/image/10component.png",
        name: "Comfort Handy Craft",
        code:  "$65.00" ,
        price: "$42.00",
      },
      {
        image: "/image/11component.png",
        name: "Comfort Handy Craft",
        code:  "$65.00",
        price: "$42.00",
      },
      {
        image: "image/12component.png",
        name: "Comfort Handy Craft",
        code:  "$65.00",
        price: "$42.00",
      },
     
    ];
  
    return (
      <div className=" py-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#1A0B5B;]">
        Leatest Products
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative p-4 hover:text-white rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center h-64 bg-[#F6F7FB]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain h-full"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full hover:te flex items-center justify-center group-hover:border-[#1A0B5B] border-2">
                {/* <button className="px-4 py-2 bg-green-500 text-white rounded">
                  View Details
                </button> */}
              </div>
              <div className="mt-4 text-center  text-[#151875] flex flex-row gap-8 ml-0">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-lg font-bold text-[#151875] gap-0 ml-5 ">
                  {product.price}
                </p>
                <p className="text-sm text-red-600 line-through flex-row "> 
                   {product.code}
                </p>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductGrid;