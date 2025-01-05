import React from 'react';
import photo1 from '../components/assets/th.jpeg';

function SolutionThatWorkForYou() {
    return(
        <div className="bg-[#c7def7] py-16 px-6 w-full lg:max-w-full pt-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
          {/* Left Section:text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-indigo-600 font-bold text-lg mb-2">Where Proscene will help you thrive best</h1>
            <h2 className="text-[#0F172A] font-extrabold text-4xl lg:text-5xl mb-4 leading-snug">
              Solutions that work for you. Not the other way around.
            </h2>
            <p className="text-[#334155] text-lg mb-6">
              Accelerate your organization's growth with an agile, scalable, and
              open, cloud ERP platform.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg">
              Schedule a Demo
            </button>
          </div>

          {/* Right Section*/}
          <div className="relative lg:w-1/2">
            {/* Decorative shapes */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-100 rounded-lg rotate-45 -translate-x-10 -translate-y-10"></div>
            <div className="absolute top-0 right-10 w-24 h-24 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <div className="absolute top-1/2 left-2 w-12 h-48 bg-indigo-200 rounded-full flex flex-col items-center justify-center -translate-y-1/2">
              <div className="w-4 h-4 bg-indigo-400 rounded-full mb-3"></div>
              <div className="w-4 h-4 bg-indigo-400 rounded-full mb-3"></div>
              <div className="w-4 h-4 bg-indigo-400 rounded-full"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-cyan-300 rounded-full"></div>

            {/* Main photo */}
            <img
              src={photo1}
              alt="Sectors"
              className="rounded-lg shadow-lg w-[90%] lg:w-[110%] xl:w-[120%] sm:w-[70%]" ///responseiveness of the image to be checked
            />
          </div>
        </div>
      </div>
    );
}

export default SolutionThatWorkForYou