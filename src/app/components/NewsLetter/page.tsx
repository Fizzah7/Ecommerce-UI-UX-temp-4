import React from 'react'

const page = () => {
  return (
    <div className="h-screen bg-[/images/Rectangle.png] bg-cover bg-center">
       <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[#1A0B5B]">
       Get Leatest Update By Subscribe
       0ur Newslater
      </h2>
       <button className="flex items-center w-full ml-14 mr-11 md:w-[180px] h-[38px] rounded-[4px] pl-[20px] pt-[7px] pb-[7px] pr-[12px] gap-[7px] bg-white">
                <input
                  type="text"
                  className="font-poppins text-[13px] font-normal w-[130px] h-[18px] opacity-[50%] border-2 border-gray-300 border-r-0 text-[#000000] mr-0 gap-0 "
                />
              </button>
    </div>
  )
}

export default page

