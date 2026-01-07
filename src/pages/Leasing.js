import React, { useEffect, useState } from "react";
import leasingImage from "../components/assets/ubs.jpg";
// import leftbottomSvg from "../components/assets/leftbottom.svg";
import FAQ from "./Faq";
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import supportjpg from "../components/assets/support.jpg";
import SupportMaintain from "../components/SupportMaintain";

function Leasing() {
  const swipeTexts = [
    "Upgrade your projects with our top-notch equipment.",
    "Flexible leasing plans tailored to your needs.",
    "Access the latest technology without breaking the bank.",
  ];

  const [activeLink, setActiveLink] = useState("feature1");

  const content = {
    feature1: {
      title: "Wide Range of Equipment",
      description: "From construction tools to AV systems, we provide a diverse selection of high-quality equipment for any project.",
      image: `${process.env.PUBLIC_URL}/Equipment.webp`,
    },
    feature2: {
      title: "Equipment Setup and Configuration",
      description: "ProScene customizes the setup of your AV equipment to suit your specific needs. Whether it's a university lecture hall or a music festival, our team ensures every detail is perfect for the occasion.",
      image: supportjpg,
    },
    feature3: {
      title: "Flexible Leasing Plans",
      description: "Our plans are designed to suit your budget and project timelines, ensuring cost-effectiveness and convenience.",
      image: `${process.env.PUBLIC_URL}/leasing.jpg`,
    },
    feature4: {
      title: "Regular Maintenance and Testing",
      description: "Enjoy peace of mind with regular maintenance services included in your leasing agreement.",
      image: supportjpg,
    },
    feature5: {
      title: "Customized Training for Staff",
      description: "Our team of experts is available to assist with setup, training, and troubleshooting throughout the lease period.",
      image: `${process.env.PUBLIC_URL}/support.jpg`,
    },
    feature6: {
      title: "Backup Equipment Availability",
      description: "ProScene provides on-site backup equipment to ensure uninterrupted service. This is critical for the education sector during hybrid learning sessions or for the events industry where reliability is paramount.",
      image: leasingImage,
    },
  };

  const navigate  = useNavigate();
        
  const handleButtonClick = () => {
      navigate("/bookDemo");
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % swipeTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [swipeTexts.length]);

  const links = [
    { id: "feature1", label: "On-Site Tech" },
    { id: "feature2", label: "Setup & Config" },
    { id: "feature3", label: "Live Support" },
    { id: "feature4", label: "Routine Checks" },
    { id: "feature5", label: "Staff Training" },
    { id: "feature6", label: "Backup Ready" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="pb-5 maxWidthContainer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-16 md:py-20 mt-16 sm:mt-20 md:mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Text Content */}
            <div className="bg-[#f24b00] text-white p-6 sm:p-8 md:p-10 Br flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8 ">
              <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                Lease Equipment Effortlessly
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
                {swipeTexts[currentIndex]}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button 
                  onClick={handleButtonClick}
                  className="bg-white text-[#16213d] px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold hover:bg-[#16213d] hover:text-white transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  Contact us
                </button>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative flex items-center justify-center min-h-[250px] sm:min-h-[300px] md:min-h-[400px]">
              <div className="relative w-full">
                <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#b062ff] to-[#00d2fb] rounded-full opacity-25 animate-bounce"></div>
                <img
                  src={`${process.env.PUBLIC_URL}/leasing.webp`}
                  alt="Equipment Leasing"
                  className="relative z-10 w-full h-auto Br shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="p-4 sm:p-6 md:p-8">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 px-4 text-[#16213d]">
          Key Features
        </h2>
        
        {/* Links Row */}
        <div className="relative overflow-hidden max-w-7xl mx-auto mb-6 sm:mb-8">
          <div className="flex space-x-2 sm:space-x-4 overflow-x-auto scrollbar-hide pb-2 items-center px-2 sm:px-4 md:px-8 lg:px-32">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => setActiveLink(link.id)}
                className={`px-3 sm:px-4 py-2 whitespace-nowrap text-sm sm:text-base transition-colors ${
                  activeLink === link.id
                    ? "text-[#f24b00] border-b-2 border-[#f24b00] font-semibold"
                    : "text-[#16213d] hover:text-[#f24b00]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex justify-center flex-col ">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-[#16213d]">
              {content[activeLink].title}
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {content[activeLink].description}
            </p>
          </div>
          <div className="">
            <img
              src={content[activeLink].image}
              alt={content[activeLink].title}
              className="w-full h-auto object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
      
      <SupportMaintain/> 

      {/* Experience Awaits Section */}
      <div className="bg-gradient-to-r from-[#e0f2f7] via-[#f0f9ff] to-[#e0f2f7] py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#16213d] mb-6 sm:mb-8 leading-tight">
            Your New <br />
            Experience Awaits
          </h1>
          <button 
            className="bg-[#f24b00] hover:bg-[#16213d] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition duration-300 text-sm sm:text-base"
            onClick={handleButtonClick}
          >
            Speak With An Expert
          </button>
        </div>
      </div>    

      {/* FAQ Section */}
      <div id="faqs" className="flex flex-col mt-6 sm:mt-9 pt-4 sm:pt-6 justify-center items-center pb-5 px-4 sm:px-6">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 text-[#16213d]">
          Frequently Asked Questions
        </h3>
        <FAQ />         
      </div> 

      <Footer />
    </div>
  );
}

export default Leasing;