import React from 'react';
import BookDemoToday from '../components/BookDemo';
import Footer from '../components/Footer';
import AboutCoop from '../components/AboutCoop';
import CoopNav from '../components/CoopNav';
import StrategyDesign from '../components/StrategyDesign';
import Stats from '../components/StatsSection';
import { useNavigate } from 'react-router-dom';

// New component for the missing features
const RoomFeatures = () => {
  return (
    <div className="bg-white py-1 sm:py-7 lg:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001e62] mb-4">
            Flexible Workspace Solutions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate focus rooms to expansive boardrooms, we provide the perfect space for every collaboration need
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Focus Rooms to Boardrooms */}
          <div className="text-center flex flex-col items-center">
           
            <h3 className="text-xl sm:text-2xl font-semibold text-[#001e62] mb-4">
              Focus Rooms to Extra-Large Boardrooms
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Scalable spaces designed for every team size, from individual deep work to enterprise-wide meetings and presentations.
            </p>
          </div>

          {/* Room Booking & Signage */}
          <div className="text-center flex flex-col items-center">
            
            <h3 className="text-xl sm:text-2xl font-semibold text-[#001e62] mb-4">
              Room Booking & Signage
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Seamless reservation system with digital signage for real-time room availability and automated meeting management.
            </p>
          </div>

          {/* AV-over-IP & Conferencing */}
          <div className="text-center flex flex-col items-center">
            
            <h3 className="text-xl sm:text-2xl font-semibold text-[#001e62] mb-4">
              AV-over-IP & Conferencing
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Advanced audio-visual solutions with IP-based distribution and enterprise-grade conferencing capabilities.
            </p>
          </div>
        </div>

        {/* Additional Feature Highlights - Centered */}
        <div className="mt-16 sm:mt-20 bg-gray-50 rounded-2xl p-8 sm:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#001e62] mb-4">
                Comprehensive Room Solutions
              </h3>
              <p className="text-gray-600 text-lg">
                Everything you need for modern, efficient workspace management
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Smart Room Management - Centered */}
              <div className="text-center">
                <h4 className="text-lg sm:text-xl font-semibold text-[#001e62] mb-4">
                  Smart Room Management
                </h4>
                <ul className="space-y-3 text-gray-600 text-center">
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#00abfa] rounded-full mr-3"></span>
                    Intelligent scheduling and conflict prevention
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#00abfa] rounded-full mr-3"></span>
                    Digital signage integration
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#00abfa] rounded-full mr-3"></span>
                    Mobile app and calendar sync
                  </li>
                </ul>
              </div>

              {/* Advanced AV Capabilities - Centered */}
              <div className="text-center">
                <h4 className="text-lg sm:text-xl font-semibold text-[#001e62] mb-4">
                  Advanced AV Capabilities
                </h4>
                <ul className="space-y-3 text-gray-600 text-center">
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#00abfa] rounded-full mr-3"></span>
                    IP-based audio-visual distribution
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#00abfa] rounded-full mr-3"></span>
                    Enterprise video conferencing
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#00abfa] rounded-full mr-3"></span>
                    Wireless presentation systems
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function CorporateSolution() {
  const navigate = useNavigate();
      
  const handleButtonClick = () => {
    navigate("/bookDemo");
  }

  return (
    <div className="">
      <AboutCoop/>
      <CoopNav/>
      <div className="flex flex-col items-center max-w-7xl py-12 sm:py-16 md:py-20 lg:py-28 bg-white mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-[#001e62] font-semibold tracking-wide sm:tracking-wider">
          We help you
        </h2>
        <h2 className="text-center text-[#001e62] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wider sm:tracking-widest leading-tight">
          WORK WITHOUT BORDERS
        </h2>
      </div>
      
      {/* Added the new RoomFeatures component */}
      <RoomFeatures />
      
      <StrategyDesign/>
      <Stats/>
      <div className="bg-gradient-to-r from-[#e0f2f7] via-[#f0f9ff] to-[#e0f2f7] py-24 flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 mb-8 leading-tight">
            Your New <br />
            Experience Awaits
          </h1>
          <button 
            className="bg-[#16213D] hover:bg-[#00abfa] hover:text-black text-white font-bold py-4 px-8 rounded-full transition duration-300"
            onClick={handleButtonClick}
          >
            Speak With An Expert
          </button>
        </div>
      </div>
      <BookDemoToday/>
      <Footer/>
    </div>
  );
};

export default CorporateSolution;