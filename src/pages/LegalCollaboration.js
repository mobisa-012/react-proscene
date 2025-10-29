import { React } from "react";
import Footer from "../components/Footer";
import BookDemoToday from "../components/BookDemo";
import AboutLegal from "../components/AboutLegal";
import CoopNav from "../components/CoopNav";
import StrategyDesign from "../components/StrategyDesign";
import Stats from "../components/StatsSection";
import { useNavigate } from "react-router-dom";

// New component for legal collaboration features
const LegalFeatures = () => {
  return (
    <div className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16213d] mb-4">
            Secure Legal Technology Solutions
          </h2>
          <p className="text-lg sm:text-xl text-[#16213d] max-w-3xl mx-auto">
            Advanced AV systems designed specifically for the unique demands of legal environments and courtroom proceedings
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Secure Video Conferencing */}
          <div className="text-center flex flex-col items-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl mb-6 h-48 w-48 flex items-center justify-center">
              <img 
                src="/video-conferencing.webp" 
                alt="Secure video conferencing"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#16213d] mb-4">
              Secure Video Conferencing
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Encrypted video conferencing solutions for confidential client meetings, remote depositions, and secure courtroom proceedings.
            </p>
          </div>

          {/* Evidence Presentation Systems */}
          <div className="text-center flex flex-col items-center">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl mb-6 h-48 w-48 flex items-center justify-center">
              <img 
                src="/evidence-player.jpg" 
                alt="Evidence presentation systems"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#16213d] mb-4">
              Evidence Presentation Systems
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Advanced presentation technology for displaying digital evidence, documents, and multimedia content in courtrooms and legal offices.
            </p>
          </div>

          {/* AV Design for Legal Offices/Courts */}
          <div className="text-center flex flex-col items-center">
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl mb-6 h-48 w-48 flex items-center justify-center">
              <img 
                src="/boardroom.jpg" 
                alt="AV design for legal offices and courts"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#16213d] mb-4">
              AV Design for Legal Offices & Courts
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Custom audio-visual solutions designed specifically for legal environments, ensuring reliability and compliance with courtroom protocols.
            </p>
          </div>
        </div>

        {/* Additional Feature Highlights - Centered */}
        <div className="mt-16 sm:mt-20 bg-gray-50 rounded-2xl p-8 sm:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#16213d] mb-4">
                Comprehensive Legal Technology
              </h3>
              <p className="text-gray-600 text-lg">
                End-to-end solutions designed specifically for modern legal practices and court systems
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Legal Communication Features - Centered */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <img 
                    src="/court-room-systems.png" 
                    alt="Legal communication systems"
                    className="w-64 h-48 object-cover rounded-xl"
                  />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-[#16213d] mb-4">
                  Legal Communication Systems
                </h4>
                <ul className="space-y-3 text-gray-600 text-center">
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#ff4e00] rounded-full mr-3"></span>
                    Encrypted client-attorney communications
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#ff4e00] rounded-full mr-3"></span>
                    Remote witness testimony solutions
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#ff4e00] rounded-full mr-3"></span>
                    Multi-party conference capabilities
                  </li>
                </ul>
              </div>

              {/* Courtroom Technology - Centered */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <img 
                    src="/courtroom.jpg" 
                    alt="Courtroom technology systems"
                    className="w-64 h-48 object-cover rounded-xl"
                  />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-[#16213d] mb-4">
                  Courtroom Technology Systems
                </h4>
                <ul className="space-y-3 text-gray-600 text-center">
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#ff4e00] rounded-full mr-3"></span>
                    Judge and counsel display systems
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#ff4e00] rounded-full mr-3"></span>
                    Public gallery viewing screens
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#ff4e00] rounded-full mr-3"></span>
                    Evidence recording and archiving
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

function LegalCollaboration() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/bookDemo");
    }
    return (
        <div className="">
        <AboutLegal/>
        <CoopNav/>
        <div className="flex flex-col items-center max-w-7xl py-12 sm:py-16 md:py-20 lg:py-28 bg-white mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-[#16213d] font-semibold tracking-wide sm:tracking-wider">We help you</h2>
            <h2 className="text-center text-[#16213d] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wider sm:tracking-widest leading-tight">WORK WITHOUT BORDERS</h2>
        </div>
        
        {/* Added the new LegalFeatures component */}
        <LegalFeatures />
        
        <StrategyDesign/>
        <Stats/>
        <div className="bg-gradient-to-r from-[#e0f2f7] via-[#f0f9ff] to-[#e0f2f7] py-24 flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#16213d] mb-8 leading-tight">
          Your New <br />
          Experience Awaits
        </h1>
        <button className="bg-[#ff4e00] hover:bg-[#16213d] text-white font-bold py-4 px-8 rounded-full transition duration-300"
        onClick={handleButtonClick}>
          Speak With An Expert
        </button>
      </div>
    </div>
        <BookDemoToday/>
        <Footer/>
        </div>
    );
}

export default LegalCollaboration