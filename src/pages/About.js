import React from "react";
import futurefirst from '../components/assets/futurefirst.jpg';
import harney from '../components/assets/harney.jpg';
import icipe from '../components/assets/icipe.jpg';
import BookDemoToday from "../components/BookDemo.js";
import Footer from "../components/Footer";

function About() {
    return (
        <div className="p-0">
            <div className="p-6 w-full max-w-7xl mx-auto my-12 items-center bg-[#16213d] rounded-[50px] flex gap-4">
            <div className="flex flex-col items-center gap-4">
                <h1 className="py-8 px-6 mx-3 text-center text-white leading font-bold md:text-5xl sm:text-3xl">
                    We're in the business of <br />
                    enhancing your business
                </h1>
                <button className="bg-white text-black font-bold py-3 px-6 rounded-2xl hover:bg-blue-700 focus:outline-none">
                    Learn More
                </button>
            </div>
            <img 
                className="rounded-[50px] max-w-full h-auto" 
                src="https://www.Proscene-software.com/wp-content/uploads/2023/05/shutterstock-1913018695-scaled-550x366.jpg" 
                alt="Business Enhancement" 
            />
        </div>


            
            {/* Our Story Section */}
            <div className="our-story">
                <h2 className="py-8 text-center ourstory text-[#D7F7FF] font-black sm:text-5xl lg:text-[150px]">OUR STORY</h2>
                <p className="py-10 mx-96 w-96 my-10 leading-normal text-black lg:w-[70%] sm:w-[80%] text-center">
                    Proscene is one of East Africa’s most experienced and innovative providers of Audio Visual products, integrated Audio Visual systems,
                    Video Collaboration and unified communications technology. We provide specialist Audio Visual support, advice and System Installation
                    and maintenance services to a vast range of corporate clients, education, public sector, government departments and Religious Organisation.
                </p>
            </div>
            
            {/* Client Vision and Innovation Section */}
            <div class="flex flex-col items-center justify-center min-h-5 py-4">
            <div class="flex gap-1 items-center w-full max-w-7xl">
               {/* title */}
                <h3 
                class="text-7xl w-1/2 font-bold vision-title text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 leading">
                Powered by our clients’ vision and driven by innovation
                </h3>
                {/* line */}
                <div class="w-0.5 h-56 bg-purple-500"></div>
                {/* description */}
                <p class="ml-4 text-lg text-gray-700 vision-description px-8 w-1/2 ">
                    Proscene specializes in providing organizations with cutting-edge cloud-based business management solutions...
                </p>
                </div>
            </div>

            {/* diamond section */}
            <div className="relative bg-[#16213d] min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Top Row */}
            <div className="flex space-x-6 mb-6">
                <div className="relative group w-60 h-80">
                <img
                    src = {futurefirst}
                    alt="Hospitality Management"
                    className="w-full h-full rounded-lg object-cover"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Hospitality Management
                </div>
                </div>

                <div className="relative group w-60 h-80">
                <img
                    src={futurefirst}
                    alt="ERP"
                    className="w-full h-full rounded-lg object-cover"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-2 rounded-lg">
                    ERP
                </div>
                </div>
            </div>

            {/* Centered Text */}
            <div className="text-white text-center mb-6 text-xl font-bold">
                We shape around your business
            </div>

            {/* Bottom Row */}
            <div className="flex space-x-6">
                <div className="relative group w-60 h-80">
                <img
                    src={harney}
                    alt="School Management"
                    className="w-full h-full rounded-lg object-cover"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-lg">
                    School Management
                </div>
                </div>

                <div className="relative group w-60 h-80">
                <img
                    src={icipe}
                    alt="Retail Management"
                    className="w-full h-full rounded-lg object-cover"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-4 py-2 rounded-lg">
                    Retail Management
                </div>
                </div>
            </div>
            </div>
            <BookDemoToday/>
            <Footer/>
        </div>        
    );
}

export default About;
