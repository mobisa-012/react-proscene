import React, { useEffect, useState } from "react";
import repairImage from "../components/assets/support.jpg";
import leftbottomSvg from "../components/assets/leftbottom.svg";
import FAQ from "./Faq";
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import supportjpg from "../components/assets/support.jpg";
import SupportMaintain from "../components/SupportMaintain";

function EquipmentRepair() {
  const swipeTexts = [
    "Ensure your equipment is running at its best with our repair services.",
    "Quick and reliable repair solutions for any issue.",
    "Maximize equipment longevity with professional repairs.",
  ];

  const [activeLink, setActiveLink] = useState("feature1");

  const content = {
    feature1: {
      title: "Comprehensive Equipment Diagnostics",
      description: "Our experts conduct thorough diagnostics to pinpoint any issues, ensuring a targeted and effective repair process.",
      image: supportjpg,
    },
    feature2: {
      title: "Fast Turnaround Times",
      description: "We understand the importance of downtime, so we prioritize quick repairs to minimize any disruptions to your operations.",
      image: supportjpg,
    },
    feature3: {
      title: "Skilled Technicians",
      description: "Our team consists of highly trained technicians capable of handling a wide range of equipment repairs, ensuring top-quality service.",
      image: "https://t3.ftcdn.net/jpg/04/57/11/78/360_F_457117809_CqpzPLXiHCtMkaYdPz1cdJHx0uqtF0mu.jpg",
    },
    feature4: {
      title: "Genuine Parts Replacement",
      description: "We use only genuine parts for repairs, ensuring your equipment operates as efficiently and safely as the day it was first used.",
      image: repairImage,
    },
    feature5: {
      title: "Preventative Maintenance Plans",
      description: "To avoid future issues, we offer preventative maintenance plans that keep your equipment in excellent condition.",
      image: repairImage,
    },
    feature6: {
      title: "Emergency Repair Services",
      description: "For urgent repairs, our emergency services are available to get your equipment back up and running without delay.",
      image: repairImage,
    },
  };

  const navigate  = useNavigate();
        
  const handleButtonClick = () => {
      navigate("/bookRepair");
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % swipeTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [swipeTexts.length]);

  const links = [
    { id: "feature1", label: "Diagnostics" },
    { id: "feature2", label: "Fast Repair" },
    { id: "feature3", label: "Skilled Technicians" },
    { id: "feature4", label: "Genuine Parts" },
    { id: "feature5", label: "Maintenance Plans" },
    { id: "feature6", label: "Emergency Repairs" },
  ];

  return (
    <div>
      <div className="pb-5 maxWidthContainer">
        <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-white mt-24">
          <div className="bg-[#3b37e6] py-16 text-white p-10 md:w-1/2 Br">
            <h1 className="font-bold h1sizing">Equipment Repair Services</h1>
            <p className="text-lg mb-6">{swipeTexts[currentIndex]}</p>
            <div className="button-Center">
              <button className="border border-white text-white py-2 px-6 rounded-2xl hover:bg-blue-700"
              onClick={handleButtonClick}>
                Contact us
              </button>
            </div>
          </div>
          <div className="relative md:w-1/2 flex items-center justify-center mt-8 md:mt-0 bg-growth">
            <img
              src={supportjpg}
              alt="home"
              className="ml-10 shadow-lg"
              style={{ borderRadius: "2em" }}
            />
            <img
              src={leftbottomSvg}
              alt="home"
              className="absolute -bottom-2 left-4 w-40"
              style={{ zIndex: "999" }}
            />
            <div className="absolute -top-5 -right-5 w-32 h-32 bg-purple-200 rounded-lg"></div>
            <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-red-300 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* key feature */}
      <div className="p-4">
        <h2 className="text-center onsitesubheads font-bold mb-4">Key Features</h2>
        {/* Links Row */}
        <div className="relative overflow-hidden max-w-7xl mx-auto">
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-1 items-center px-32">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => setActiveLink(link.id)}
                className={`px-4 py-2 ${
                  activeLink === link.id
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div
            className="absolute bottom-0 left-0 h-[2px] bg-blue-500 transition-transform"
            style={{
              transform: `translateX(${
                links.findIndex((link) => link.id === activeLink) * 100
              }%)`,
            }}
          />
        </div>
        {/* Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-32" style={{maxWidth:'1100px', margin:'0 auto'}}>
          <div className="m-4 flex justify-center flex-col">
            <h3 className="cardheaders font-semibold mb-2">
              {content[activeLink].title}
            </h3>
            <p className="featuresp">{content[activeLink].description}</p>
          </div>
          <div className="m-4">
            <img
              src={content[activeLink].image}
              alt={content[activeLink].title}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
        
      <div id="faq-section" className="pt-9 pb-9">
        <FAQ />
      </div>
      <SupportMaintain/>

      {/* experience await */}
      <div className="bg-gradient-to-r from-[#e0f2f7] via-[#f0f9ff] to-[#e0f2f7] py-24 flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-8 leading-tight">
            Your Equipment <br />
            Repair Solution Awaits
          </h1>
          <button className="bg-[#16213D] hover:bg-[#00abfa] hover:text-black text-white font-bold py-4 px-8 rounded-full transition duration-300"
          onClick={handleButtonClick}>
            Speak With An Expert
          </button>
        </div>
      </div>    

      <Footer />
    </div>
  );
}

export default EquipmentRepair;
