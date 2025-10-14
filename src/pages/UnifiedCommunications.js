import React, { useEffect, useState } from "react";
import uccImage from "../components/assets/nera-offices-london-2-1200x847.jpg";
import leftbottomSvg from "../components/assets/leftbottom.svg";
import FAQ from "./Faq";
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import uccjpg from "../components/assets/nera-offices-london-2-1200x847.jpg";
import SupportMaintain from "../components/SupportMaintain";

function UCC() {
  const swipeTexts = [
    "Transform your business with efficient Unified Communications solutions.",
    "Seamless communication for improved collaboration and productivity.",
    "Upgrade your team’s communication experience with UCC services.",
  ];

  const [activeLink, setActiveLink] = useState("feature1");

  const content = {
    feature1: {
      title: "Unified Voice Solutions",
      description: "Enable seamless voice communication across multiple platforms with integrated solutions.",
      image: uccjpg,
    },
    feature2: {
      title: "Team Collaboration Tools",
      description: "Equip your teams with tools that enhance collaboration and productivity, no matter where they are.",
      image: uccjpg,
    },
    feature3: {
      title: "Video Conferencing",
      description: "Transform virtual meetings with high-quality video conferencing services, improving remote work connectivity.",
      image: "https://t3.ftcdn.net/jpg/04/57/11/78/360_F_457117809_CqpzPLXiHCtMkaYdPz1cdJHx0uqtF0mu.jpg",
    },
    feature4: {
      title: "Cloud Communication",
      description: "Harness the power of the cloud for flexible and scalable communication solutions across your organization.",
      image: uccImage,
    },
    feature5: {
      title: "Mobile Integration",
      description: "Enable seamless communication through mobile devices, allowing your team to stay connected anytime, anywhere.",
      image: uccImage,
    },
    feature6: {
      title: "24/7 Support",
      description: "Ensure uninterrupted communication with our round-the-clock support services for your UCC systems.",
      image: uccImage,
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
    { id: "feature1", label: "Voice Solutions" },
    { id: "feature2", label: "Collaboration Tools" },
    { id: "feature3", label: "Video Conferencing" },
    { id: "feature4", label: "Cloud Communication" },
    { id: "feature5", label: "Mobile Integration" },
    { id: "feature6", label: "24/7 Support" },
  ];

  return (
    <div>
      <div className="pb-5 maxWidthContainer">
        <div className="max-w-7xl mx-auto px-4 py-20 mt-24">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
    <div className="bg-[#3b37e6] text-white p-10 Br flex flex-col justify-center space-y-8">
      <h1 className="font-bold h1sizing">Unified Communications Solutions</h1>
      <p className="text-lg mb-6">{swipeTexts[currentIndex]}</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={handleButtonClick}
          className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
        >
          Contact us
        </button>
      </div>
    </div>
    
    <div className="relative flex items-center justify-center">
      <div className="relative w-full">
        <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-[#b062ff] to-[#00d2fb] rounded-full opacity-25 animate-bounce"></div>
        <img
          src={uccjpg}
          alt="Unified Communications"
          className="relative z-10 w-full h-auto Br shadow-2xl"
        />
      </div>
    </div>
  </div>
</div>
      </div>

      {/* key feature */}
      
         {/* New Integration Platforms Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001e62] mb-4">
              Seamless Platform Integrations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect your favorite collaboration tools with our unified communications solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Microsoft Teams", logo: "💼", desc: "Full integration with Teams meetings and collaboration" },
              { name: "Zoom", logo: "📹", desc: "Seamless Zoom room integration and interoperability" },
              { name: "Google Meet", logo: "🔍", desc: "Google Workspace integration for unified workflows" },
              { name: "Cisco Webex", logo: "🕸️", desc: "Enterprise-grade Webex integration solutions" },
            ].map((platform, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{platform.logo}</div>
                <h3 className="font-bold text-[#001e62] mb-2">{platform.name}</h3>
                <p className="text-gray-600 text-sm">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
        {/* AV + IT Convergence Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#001e62] mb-6">
                AV + IT Convergence
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Unify your audiovisual and IT infrastructure for streamlined operations, reduced complexity, and enhanced user experiences.
              </p>
              <div className="space-y-4">
                {[
                  "Unified network infrastructure for AV and IT systems",
                  "Centralized management and monitoring",
                  "Enhanced security across all communication platforms",
                  "Scalable solutions that grow with your business",
                  "Reduced total cost of ownership"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#00abfa] rounded-full"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <img
                src={uccImage}
                alt="AV IT Convergence"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-center onsitesubheads font-bold mb-4">Key Features</h2>
        {/* Links Row */}
        <div className="relative overflow-hidden max-w-7xl mx-auto">
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-1 items-center px-32">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => setActiveLink(link.id)}
                className={`px-4 py-2 ${activeLink === link.id ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-700"}`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div
            className="absolute bottom-0 left-0 h-[2px] bg-blue-500 transition-transform"
            style={{
              transform: `translateX(${links.findIndex((link) => link.id === activeLink) * 100}%)`,
            }}
          />
        </div>
        {/* Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-32" style={{ maxWidth: '1100px', margin: '0 auto' }}>
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
      <div className="bg-gradient-to-r from-[#e0f2f7] via-[#f0f9ff] to-[#e0f2f7] py-24 flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-8 leading-tight">
            Your Unified Communications <br/>Solution Awaits
          </h1>
          <button className="bg-blue-600 hover:bg-white hover:border-blue-600 hover:text-blue-600 text-white font-bold py-4 px-8 rounded-full transition duration-300"
          onClick={handleButtonClick}>
            Speak With An Expert
          </button>
        </div>
      </div>
      <SupportMaintain/>
        
      <div id="faqs" className="flex flex-col mt-9 pt-6 justify-center items-center pb-5">
        <h3 className="onsitesubheads">Frequently Asked Questions</h3>
          <FAQ />         
        </div> 
      <Footer />
    </div>
  );
}

export default UCC;
