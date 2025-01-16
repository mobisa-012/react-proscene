import React from "react";

const AboutLegal= () => {
  return (
    <div className="relative group w-full h-screen bg-[#fff] flex items-center justify-center">
      {/* Background Image with Overlay */}
       {/* color overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <img
        src="https://onediversified.com/hubfs/Hero%20Images/By%20Space/Hero%20By%20Space_Corporate%20Office_Marsh%20McLennan%20Companies.jpg"
        alt="Background"
        className="w-full h-full object-cover z-0"
      />
      
      {/* Hover Text */}
      <div
        className="absolute top-1/4 -left-full transform -translate-y-1/2 mt-10
          text-white text-7xl tracking-wide leading-loose font-bold whitespace-nowrap transition-all duration-500 group-hover:left-10 mx-28 z-20">
        Courtrooms<br />Legal Firms
      </div>

      <div
        className="absolute top-2/3 -left-full transform -translate-y-1/2 mt-11
          text-white text-5xl font-semibold whitespace-nowrap transition-all duration-500 group-hover:left-10 mx-28 z-20">
        Mash & McLennan Co
      </div>

      <div
        className="absolute top-3/4 -left-full transform -translate-y-1/2 mt-16
          text-white text-5xl font-semibold whitespace-nowrap transition-all duration-500 group-hover:left-10 mx-28 z-20">
        <button className="bg-transparent text-white border-2 border-white px-4 py-2 rounded">
          CASE STUDY -
        </button>
      </div>
    </div>
  );
};

export default AboutLegal;
