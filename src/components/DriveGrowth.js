import React, { useState, useEffect } from "react";
import "../global.css";
import homeSvg from "./assets/home.svg";
import { useNavigate } from "react-router-dom";

function DriveGrowth() {
    const navigate  = useNavigate();

    const handleButtonClick = () => {
        navigate("/bookDemo");
    }

    const swipeTexts = [
        "Amplify operational efficiency, discover new opportunities, and stay agile.",
        "Streamline your processes and innovate faster to achieve measurable success.",
        "Empower your business with cutting-edge solutions tailored to your needs."
    ];

    const swipeTopics = [
        "Drives your growth tomorrow. Check.",
        "Fits your business today. Check.",
        "Be visible all seasons. Check."
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // te texts swipe evry 3seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % swipeTexts.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [swipeTexts.length]);

    return (
        <div className="pb-5 pt-10 maxWidthContainer">
            <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-white">
                <div className="bg-[#3b37e6] py-16 text-white p-10 md:w-1/2 Br">
                    <h1 className="leading-none font-axioforma mt-10 mb-10 mx-10 text-[75px]">
                        {swipeTopics[currentIndex]}
                    </h1>
                    <p className="text-lg mx-10">
                    {/* added 3 `line texts` that swipe automatically */}
                        {swipeTexts[currentIndex]}
                    </p>
                    <div className="button-Center">
                        <button className="border border-white text-white py-2 px-6 mx-10 rounded-2xl hover:bg-blue-700"
                        onClick={handleButtonClick}>
                            Schedule a demo
                        </button>
                    </div>
                </div>

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

export default DriveGrowth;
