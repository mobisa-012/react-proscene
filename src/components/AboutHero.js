import React from "react";
import hero from './assets/hero.jpg';

const AboutHero = () => {
  return (
    <div className="relative group w-full h-screen bg-black flex items-center justify-center">
      {/* Background Image */}
      <img
        src= {hero}
        alt="Background"
        className="w-full h-full object-cover"
      />
      {/* Hover Text */}
      <div
        className="absolute top-1/2 -left-full transform -translate-y-1/2
          text-white text-9xl font-bold whitespace-nowrap transition-all duration-500 group-hover:left-10 mx-28">
        About<br />Proscene
      </div>
    </div>
  );
};

export default AboutHero;
