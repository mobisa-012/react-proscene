import React, { useState, useEffect } from "react";
import "../global.css";
import homeSvg from "./assets/home.svg";
import { useNavigate } from "react-router-dom";

function DriveGrowth() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/bookDemo");
    };

    const swipeTexts = [
        "Amplify operational efficiency, discover new opportunities, and stay agile.",
        "Streamline your processes and innovate faster to achieve measurable success.",
        "Empower your business with cutting-edge solutions tailored to your needs.",
    ];

    const swipeTopics = [
        "Drives your growth tomorrow. Check.",
        "Fits your business everyday. Check.",
        "Be visible through all seasons. Check.",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % swipeTexts.length);
                setIsAnimating(false);
            }, 100); 
        }, 9000); 

        return () => clearInterval(interval);
    }, [swipeTexts.length]);

    return (
        <div className="pb-5 pt-10 maxWidthContainer">
            <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-white min-h-40">
                <div className="bg-[#3b37e6] py-16 text-white p-10 mb-10 mt-10 md:w-1/2 Br">
                    <div className="overflow-hidden relative">
                        <h1
                            className={`font-bold h1sizing mx-4 transition-transform duration-500 transform ${
                                isAnimating ? "-translate-x-full" : "translate-x-0"
                            }`}
                        >
                            {swipeTopics[currentIndex]}
                        </h1>
                    </div>
                    <div className="overflow-hidden relative">
                        <p
                            className={`text-lg mx-4 transition-transform duration-500 transform ${
                                isAnimating ? "-translate-x-full" : "translate-x-0"
                            }`}
                            style={{ fontWeight: "300" }}
                        >
                            {swipeTexts[currentIndex]}
                        </p>
                    </div>
                    <div className="button-Center">
                        <button
                            className="border border-white text-white mx-4 py-2 px-6 mt-5 rounded-2xl hover:bg-white hover:text-[#3b37e6]"
                            onClick={handleButtonClick}
                        >
                            Schedule a demo
                        </button>
                    </div>
                </div>

                <div className="relative md:w-1/2 flex items-center justify-center mt-8 md:mt-0 bg-growth">
                    <img src={homeSvg} alt="home" className="rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    );
}

export default DriveGrowth;
