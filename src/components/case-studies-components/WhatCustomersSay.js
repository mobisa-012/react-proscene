import React from "react";
import homeSvg from "../assets/home.svg";


function WhatCustomersSay() {
  return (    
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-[#f3f6ff]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      {/* left side */}
        <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-3xl font-bold text-[#3b37e6] sm:text-4xl lg:text-5xl pb-6">Case Studies</h1>
          <h3 className="text-[#16213d] font-bold lg:text-4xl sm:text:xl mb-4">
            Thousands of companies across many industries trust Proscene
          </h3>
          <h2 className="font-semibold lg:text-4xl sm:text-2xl mb-4">
            What customers are saying about Proscene?
          </h2>
          <p className="text-lg">
            Proscene to accelerate their growth with an agile, scalable, and
            open business management software.
          </p>
        </div>

        {/* right side */}
        <div className="relative md:w-1/2 flex items-center justify-center mt-8 md:mt-0 bg-growth">
            <img src={homeSvg} alt="home" className="rounded-lg shadow-lg" />

            <div className="absolute -top-5 -right-5 w-32 h-32 bg-purple-200 rounded-lg"></div>
            <div className="absolute -bottom-12 -left-8 w-32 h-16 bg-cyan-200 rounded-full"></div>
            <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-red-300 rounded-lg"></div>
        </div>
      </div>
    </div>   
  );
}

export default WhatCustomersSay;
