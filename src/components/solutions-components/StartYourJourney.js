import React from "react";
import { useNavigate } from "react-router-dom";

function StartYourJourney() {
  const navigate  = useNavigate();

  const handleButtonClick = () => {
    navigate("/bookDemo");
  }
  return (
    <div className="border w-1/2 mx-auto border-[#ff4e00] rounded-3xl text-center py-12 px-4 md:px-8">
      <h2 className="lg:text-2xl sm:text-md md:text-3xl font-semibold text-[#16213d] mb-6">
        Start your journey towards greater efficiency and success, now.
      </h2>
      <button className="bg-[#ff4e00] text-white font-medium px-6 py-3 rounded-full hover:bg-[#16213d] transition-colors duration-300"
      onClick={handleButtonClick}>
        Read More
      </button>
    </div>
  );
}

export default StartYourJourney;