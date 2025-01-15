import React from "react";
import legal from "../components/assets/legal.jpeg";
import DriveGrowthMask from "./driveGrowthMask.js";
import BookDemoToday from "../components/BookDemo.js";
import Footer from "../components/Footer";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import {useState} from "react";
import "./About.css";
import OurProjects from "../components/OurProjects.js";
import VideoWithMask from "../components/VideoMask.js";


function About() {
  // const [visibleCount, setVisibleCount] = useState(4); // Number of team members initially visible

  // const showMore = () => {
  //   setVisibleCount((prev) => prev + 4); // Increase the visible count by 4 each time
  // };
  // const showLess = () => {
  //   setVisibleCount(4); // Reset to show only the initial 4 cards
  // };
  // const allVisible = visibleCount >= teamMembers.length;
  return (
    <div className="p-0">
      <div>
      <VideoWithMask />
      </div>

      {/* Our Story Section */}
      <div className="w-full mx-auto mt-20 flex flex-col justify-center items-center">
        <h2 className="py-5 text-center ourstory text-[#D7F7FF] font-black text-3xl sm:text-5xl lg:text-[140px]">
          OUR STORY
        </h2>
        <p
          className="items-center justify-center mx-auto my-10 tracking-wide leading-relaxed text-base
                text-black lg:w-[60%] sm:w-[80%] text-center pl-3 pr-3 story-p"
        >
          Proscene is one of East Africa’s most experienced and innovative
          providers of Audio Visual products, integrated Audio Visual systems,
          Video Collaboration and unified communications technology. We provide
          specialist Audio Visual support, advice and System Installation and
          maintenance services to a vast range of corporate clients, education,
          public sector, government departments and Religious Organisation.
        </p>
      </div>

      {/* Client Vision and Innovation Section */}
      <div class="flex flex-col items-center justify-center min-h-5 py-7 pb-7">
        <div class="flex flex-col sm:flex-row gap-1 items-center w-full max-w-7xl">
          {/* title  */}
          <h3 class="text-3xl sm:pl-12 sm:pr-4 sm:text-7xl font-bold vision-title text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 leading-tight sm:leading-normal sm:w-1/2 sm:mx-0 mx-4 sm:text-left text-center">
            Powered by our clients’ vision and driven by innovation
          </h3>
          {/* line  */}
          <div class="hidden sm:block w-0.5 h-56 bg-purple-500"></div>
          {/* description */}
          <p class="ml-4 sm:ml-0 sm:text-lg text-gray-700 vision-description px-4 sm:px-8 sm:w-1/2 w-full mx-8 sm:mx-0 sm:text-left text-center">
            Proscene specializes in providing organizations with cutting-edge
            cloud-based business management solutions...
          </p>
        </div>
      </div>

      {/* diamond section */}
      <div className="relative bg-[#16213d] flex flex-col items-center justify-center overflow-hidden p-20">
        {/* Top Row */}
        <div className="flex justify-center mb-6 transform -translate-y-12 relative lg:relative lg:bottom-[-5em]">
          <div class="relative w-80 h-96 bg-cover bg-center rounded-lg shadow-lg overflow-hidden innerCardImage top-row"  style={{border:' 1px solid rgba(59,55,230,.9)'}}>
            <div class="absolute bottom-0 left-0 w-[90%] m-4 bg-white bg-opacity-90 transition-all duration-300 ease-in-out h-16 hover:h-48 rounded-lg overflow-hidden" style={{backgroundColor:' rgba(59,55,230,.9)'}}>
              <div class="flex items-center justify-center h-16 text-xl font-bold text-white" >
                PHP
              </div>

              <div class="p-4 text-center">
                <p class="text-white text-sm mb-4">
                  PHP is the best language I know.
                </p>
                <button class="px-4 py-2 bg-white text-black text-sm rounded-lg shadow hover:bg-white-600 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Middle Row */}
        <div className="flex justify-between w-full mx-auto mb-6 middlerow">
        <div class="relative w-80 h-96 bg-cover bg-center rounded-lg shadow-lg overflow-hidden innerCardImage"  style={{border:'1px solid rgba(85,187,249,.9)'}}>
  <div class="absolute bottom-0 left-0 w-[90%] m-4 bg-opacity-90 transition-all duration-300 ease-in-out h-48 md:h-16 md:hover:h-48 rounded-lg overflow-hidden" style={{backgroundColor:'rgba(85,187,249,.9)'}}>
    <div class="flex items-center justify-center h-16 text-xl font-bold text-white">
      PHP
    </div>

    <div class="p-4 text-center">
      <p class="text-white text-sm mb-4">
        PHP is the best language I know.
      </p>
      <button class="px-4 py-2 bg-white text-black text-sm rounded-lg shadow hover:bg-black-600 transition duration-300">
        Learn More
      </button>
    </div>
  </div>
</div>

          <div className="relative group w-80 h-80 flex justify-center items-center">
            <h3 class="shape-h3">We shape around your business</h3>
          </div>

          <div class="relative w-80 h-96 bg-cover bg-center rounded-lg shadow-lg overflow-hidden innerCardImage"  style={{border:'1px solid rgba(161,66,255,.9)'}}>
  <div class="absolute bottom-0 left-0 w-[90%] m-4 bg-white bg-opacity-90 transition-all duration-300 ease-in-out h-48 md:h-16 md:hover:h-48 rounded-lg overflow-hidden" style={{backgroundColor:' rgba(161,66,255,.9)'}}>
    <div class="flex items-center justify-center h-16 text-xl font-bold text-white">
      PHP
    </div>

    <div class="p-4 text-center">
      <p class="text-white text-sm mb-4">
        PHP is the best language I know.
      </p>
      <button class="px-4 py-2 bg-white text-black text-sm rounded-lg shadow hover:bg-white-600 transition duration-300">
        Learn More
      </button>
    </div>
  </div>
</div>

        </div>

        {/* Bottom Row */}
        <div className="flex justify-center transform translate-y-0 relative lg:relative lg:bottom-32">
        <div class="relative w-80 h-96 bg-cover bg-center rounded-lg shadow-lg overflow-hidden innerCardImage" style={{border:' 1px solid rgba(255,115,105,.9)'}}>
  <div class="absolute bottom-0 left-0 w-[90%] m-4 bg-white bg-opacity-90 transition-all duration-300 ease-in-out h-48 md:h-16 md:hover:h-48 rounded-lg overflow-hidden" style={{backgroundColor:' rgba(255,115,105,.9)'}}>
    <div class="flex items-center justify-center h-16 text-xl font-bold text-white">
      PHP
    </div>

    <div class="p-4 text-center">
      <p class="text-white text-sm mb-4">
        PHP is the best language I know.
      </p>
      <button class="px-4 py-2 bg-white text-black text-sm rounded-lg shadow hover:bg-white-600 transition duration-300">
        Learn More
      </button>
    </div>
  </div>
</div>

        </div>
      </div>

      {/* our team */}
      {/* <div className="mx-auto p-10 flex flex-col items-center">
      <div className="text-center team-title">
        Our team means business
      </div>
      <div className="flex flex-wrap justify-center gap-1">
  {teamMembers.slice(0, visibleCount).map((member) => (
    <TeamMemberCard key={member.name} {...member} />
  ))}
</div>

      <div className="">
        {allVisible ? (
          <button
            className="flex items-center text-blue-500 hover:text-blue-700"
            onClick={showLess}
          >
            <span className="mr-2">Show Less</span>
            <FiChevronUp className="h-5 w-5" />
          </button>
        ) : (
          <button
            className="flex items-center text-blue-500 hover:text-blue-700"
            onClick={showMore}
          >
            <span className="mr-2">Show More</span>
            <FiChevronDown className="h-5 w-5" />
          </button>
        )}
        <button className=" mt-5 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
      Join Us
    </button>

      </div>
    </div> */}
    <OurProjects/>
      <BookDemoToday />
      <Footer />
    </div>
  );
}

export default About;
