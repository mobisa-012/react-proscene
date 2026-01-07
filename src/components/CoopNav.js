import React, { useState } from 'react';

const CoopNav = () => {
  const [activeItem, setActiveItem] = useState(0);

  const navItems = [
    { label: 'Our Work', icon: '💼' },
    { label: 'Strategy & Design', icon: '📐' },
    { label: 'Build & Integrate', icon: '⚙️' },
    { label: 'Support & Maintain', icon: '🛠️' },
  ];

  return (
    <div className="bg-gradient-to-r from-[#f24b00] to-[#ff6a33] py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        {/* Desktop Navigation - Horizontal */}
        <div className="hidden md:flex justify-between items-center">
          {navItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`text-white text-base lg:text-xl font-medium transition duration-300 hover:text-[#16213d] cursor-pointer
                 `}
              >
                {item.label}
              </div>
              {index < navItems.length - 1 && (
                <div className="h-6 w-px bg-white/30 mx-4 lg:mx-6"></div>
              )}
            </div>
          ))}
        </div>

        {/* Tablet Navigation - Wrap */}
        <div className="hidden sm:grid md:hidden grid-cols-2 gap-4">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`text-white text-base font-medium transition duration-300 hover:text-[#16213d] cursor-pointer p-4 rounded-lg border border-white/30 hover:border-[#16213d] hover:bg-white/10
                ${activeItem === index ? 'text-[#16213d] bg-white/10 border-[#16213d]' : ''}`}
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation - Vertical Stack */}
        <div className="flex flex-col gap-3 sm:hidden">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`text-white text-sm font-medium transition duration-300 cursor-pointer p-4 rounded-lg border border-white/30 hover:bg-white/10 text-left
                `}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <span className="flex-1">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoopNav;