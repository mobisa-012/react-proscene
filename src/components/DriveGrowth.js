import React from "react";

function DriveGrowth () {
    return (
        <div className= "mx-40 py-10 pb-5">
        <div class="flex flex-col md:flex-row items-center justify-center p-8 bg-white">
        <div class="bg-[#3b37e6] py-16 text-white p-10 rounded-2xl md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Drives your growth tomorrow.</h1>
            <h1 className="text-4xl font-bold mb-4">Fits your business today.</h1>
            <h1 className ="text-4xl font-bold mb-4 ">Check.</h1>
            <p class="text-lg mb-6">
            Amplify operational efficiency, discover new opportunities, and stay agile
            in the rapidly changing market.
            </p>
            <button class="border border-white text-white py-2 px-6 rounded-2xl hover:bg-blue-700">
            Schedule a demo
            </button>
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