import React from "react";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const SolutionsLayout = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="font-bold tracking-tight text-gray-900 h2-solutions">
          Enter a world of solutions, designed 
          for your business
        </h2>
        <p className="mt-1 text-lg leading-relaxed text-center pt-1 thin-weight">
          Cutting-edge cloud-based business management solutions to amplify operational efficiency, <br/>
          uncover new opportunities, stay agile in the rapidly changing market, and outperform competitors.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-3 lg:grid-cols-4 pb-5 pt-5 w-auto">
        {/* AI */}
        <div
      className="mx-2 border border-[#3c39eb] rounded-3xl p-6 text-center shadow-sm hover:shadow-lg mb-4 overflow-hidden transition-all duration-300 group"
      onMouseEnter={() => {
        if (window.innerWidth >= 768) setIsExpanded(true);
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 768) setIsExpanded(false);
      }}
    >
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
          <span className="text-2xl font-bold">AvI</span>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-blue-700 h3solutions">AV Integration</h3>
      <p className="mt-2 text-sm text-gray-600">
        Accelerate your organization’s growth with an agile, scalable, and intuitive platform.
      </p>

      {/* Arrow Button for Small Screens */}
      <div className="md:hidden flex justify-center mt-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600"
        >
          {isExpanded ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
        </button>
      </div>

      {/* Hidden Content */}
      <div
        className={`hidden-content mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm text-gray-600">
          Leverage advanced AV integration solutions for a seamless and efficient user experience.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
          View More
        </button>
      </div>
    </div>

        {/* IT */}
        <div
      className="mx-2 border border-[#a042ff] rounded-3xl p-6 text-center shadow-sm hover:shadow-lg mb-4 overflow-hidden transition-all duration-300 group"
      onMouseEnter={() => {
        if (window.innerWidth >= 768) setIsExpanded(true);
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 768) setIsExpanded(false);
      }}
    >
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
          <span className="text-2xl font-bold">IT</span>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-purple-700 h3solutions">Interactive Technology</h3>
      <p className="mt-2 text-sm text-gray-600">
        True Omnichannel, All-in-One Retail Management Solution.
      </p>

      {/* Arrow Button for Small Screens */}
      <div className="md:hidden flex justify-center mt-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-purple-600"
        >
          {isExpanded ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
        </button>
      </div>

      {/* Hidden Content */}
      <div
        className={`hidden-content mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm text-gray-600">
          Seamlessly integrate cutting-edge retail management technologies for a true omnichannel experience.
        </p>
        <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700">
          View More
        </button>
      </div>
    </div>

        {/* DM */}
      <div
      className="mx-2 border border-[#00d2fb] rounded-3xl p-6 text-center shadow-sm hover:shadow-lg mb-4 overflow-hidden transition-all duration-300 group"
      onMouseEnter={() => {
        if (window.innerWidth >= 768) setIsExpanded(true);
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 768) setIsExpanded(false);
      }}
    >
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600">
          <span className="text-2xl font-bold">DM</span>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-cyan-700 h3solutions">Digital Media</h3>
      <p className="mt-2 text-sm text-gray-600">
        Next-Gen Property Management Software.
      </p>

      {/* Arrow Button for Small Screens */}
      <div className="md:hidden flex justify-center mt-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-cyan-600"
        >
          {isExpanded ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
        </button>
      </div>

      {/* Hidden Content */}
      <div
        className={`hidden-content mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm text-gray-600">
          Discover innovative solutions for modern digital property management.
        </p>
        <button className="mt-4 px-4 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700">
          View More
        </button>
      </div>
    </div>

        {/* CS */}
        <div
      className="mx-2 border border-[#ff6663] rounded-3xl p-6 text-center shadow-sm hover:shadow-lg mb-4 overflow-hidden transition-all duration-300 group"
      onMouseEnter={() => {
        if (window.innerWidth >= 768) setIsExpanded(true);
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 768) setIsExpanded(false);
      }}
    >
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
          <span className="text-2xl font-bold">CS</span>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-red-700 h3solutions">Collaboration Solutions</h3>
      <p className="mt-2 text-sm text-gray-600">
        Ace pedagogical management with Proscene SMIS.
      </p>

      {/* Arrow Button for Small Screens */}
      <div className="md:hidden flex justify-center mt-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-red-600"
        >
          {isExpanded ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
        </button>
      </div>

      {/* Hidden Content */}
      <div
        className={`hidden-content mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm text-gray-600">
          Explore our advanced collaboration tools designed for efficiency.
        </p>
        <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700">
          View More
        </button>
      </div>
    </div>
      </div>
    </div>
  );
};

export default SolutionsLayout;
