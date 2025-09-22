import React from "react";
import { useNavigate } from "react-router-dom";

function StartYourJorney() {
  const navigate  = useNavigate();

  const handleButtonClick = () => {
    navigate("/bookDemo");
  }
  return (
    <div className=" border w-1/2 mx-auto border-blue-300 rounded-3xl text-center py-12 px-4 md:px-8">
      <h2 className="lg:text-2xl sm:text-md md:text-3xl font-semibold text-gray-800 mb-6">
        Start your journey towards greater efficiency and success, now.
      </h2>
      <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-full hover:bg-purple-600 transition"
      onClick={handleButtonClick}>
        Read More
      </button>
    </div>
  );
}

export default StartYourJorney;
