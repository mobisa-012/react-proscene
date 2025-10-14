import React, { useState } from "react";
import BookDemo from "../pages/BookDemoPage";
import { useNavigate } from "react-router-dom";

function TouchPanelControl() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/bookDemo");
  };

  const [activeTab, setActiveTab] = useState("residential");

  const environments = {
    residential: {
      name: "Residential Control",
      tagline: "Smart Home Automation",
      icon: "🏠",
      color: "from-blue-600 to-blue-800",
      features: [
        { icon: "💡", title: "Lighting Control", desc: "Whole-home lighting scenes and control" },
        { icon: "🌡️", title: "Climate Control", desc: "HVAC and temperature management" },
        { icon: "🎵", title: "Audio/Video", desc: "Multi-room audio and video distribution" },
        { icon: "🛡️", title: "Security", desc: "Integrated security and access control" }
      ]
    },
    commercial: {
      name: "Commercial Control",
      tagline: "Enterprise Room Automation",
      icon: "🏢",
      color: "from-purple-600 to-indigo-700",
      features: [
        { icon: "🎥", title: "AV Control", desc: "Meeting room and presentation control" },
        { icon: "💡", title: "Lighting Scenes", desc: "Preset lighting for different uses" },
        { icon: "🌡️", title: "Environmental", desc: "Climate, shading, and environment control" },
        { icon: "📞", title: "Unified Interface", desc: "Single touchpoint for all room systems" }
      ]
    }
  };

  const current = environments[activeTab];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className={`relative bg-gradient-to-br ${current.color} mt-4 text-white overflow-hidden transition-all duration-500`}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-10 blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center space-y-8">
            <div className="inline-block px-6 py-3 bg-white bg-opacity-20 rounded-full text-sm font-medium backdrop-blur-sm">
              Interactive Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Touch Panel Control
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Accelerate your organization's growth with intuitive control systems that simplify complex technology.
            </p>

            <div className="flex justify-center gap-4 pt-8">
              <button
                onClick={() => setActiveTab("residential")}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                  activeTab === "residential"
                    ? "bg-white text-blue-600 shadow-xl scale-105"
                    : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
                }`}
              >
                🏠 Residential
              </button>
              <button
                onClick={() => setActiveTab("commercial")}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                  activeTab === "commercial"
                    ? "bg-white text-purple-600 shadow-xl scale-105"
                    : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
                }`}
              >
                🏢 Commercial
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Digital Media Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-medium mb-4">
              Digital Media
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {current.name}
            </h2>
            <p className="text-xl text-gray-600">{current.tagline}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {current.features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Audio Visual Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-medium mb-4">
              Audio Visual
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              True Omnichannel Control
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                "Unified control of all AV systems",
                "Customizable user interfaces",
                "Integration with room scheduling",
                "Remote monitoring and management"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-700 text-lg">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center">
              <div className="text-6xl mb-4">👆</div>
              <h3 className="text-2xl font-bold mb-4">Intuitive Touch Interface</h3>
              <p className="text-blue-100">Simple, responsive control for complex systems</p>
            </div>
          </div>
        </div>
      </div>

      {/* Collaboration Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-medium mb-4">
              Collaboration
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enhanced Control Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🎛️", title: "Custom Programming", desc: "Tailored to your specific needs and workflows" },
              { icon: "📱", title: "Multiple Platforms", desc: "Wall panels, tablets, and mobile control" },
              { icon: "🔄", title: "Seamless Integration", desc: "Works with existing systems and technology" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-3xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready for Simplified Control?
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Let's design a touch panel control system that makes technology effortless to use.
            </p>
            <button 
              onClick={handleButtonClick}
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <BookDemo />
    </div>
  );
}

export default TouchPanelControl;