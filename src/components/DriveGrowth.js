import React from "react";
import '../global.css';

function DriveGrowth () {
    return (
        <div className= "py-10 pb-5 maxWidthContainer">
        <div class="flex flex-col md:flex-row items-center justify-center p-8 bg-white">
        <div class="bg-[#3b37e6] py-16 text-white p-10 md:w-1/2 Br">
            <h1 className=" font-bold h1sizing">Drives your growth tomorrow.Fits your business today.Check.</h1>
            <p class="text-Sizing mb-6">
            Amplify operational efficiency, discover new opportunities, and stay agile
            in the rapidly changing market.
            </p>
            <div className="button-Center">
                <button class="border border-white text-white py-2 px-6 rounded-2xl hover:bg-blue-700">
                Schedule a demo
                </button>
            </div>
        </div>

        <div class="relative md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
            <img
            src="https://www.priority-software.com/wp-content/uploads/2023/04/group-17441.png"
            alt="Analytics"
            class="rounded-lg shadow-lg"
            />

            <div class="absolute -top-5 -right-5 w-32 h-32 bg-purple-200 rounded-lg"></div>
            <div class="absolute -bottom-12 -left-8 w-32 h-16 bg-cyan-200 rounded-full"></div>
            <div class="absolute top-1/4 right-1/4 w-16 h-16 bg-red-300 rounded-lg"></div>
        </div>
        </div>
        </div>
    );
};

export default DriveGrowth;