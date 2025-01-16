import React from 'react';
import sup from './assets/sup.jpg';

const SupportMaintain = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-10">
          <h2 className="text-blue-300 font-bold text-2xl">SUPPORT & MAINTAIN</h2>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Sideline support you can count on
          </h1>
          <p className="text-lg text-gray-300">
            Sports teams can’t perform without managers or support staff. And the same goes for the 
            technology that powers an arena experience. At Diversified, we offer end-to-end management 
            and support for every solution we design, configure and integrate. Winning, after all, is 
            about more than the starting line-up. It’s about lasting performance.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full">
            Lease Equipemt Now
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 ml-10">
          <div className="relative">
            <img
              src={sup}
              alt="Sideline Support"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportMaintain;
