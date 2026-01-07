import React, { useState } from "react";
import BookDemo from "../pages/BookDemoPage";
import { useNavigate } from "react-router-dom";

function BuildingWideAutomation() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/bookDemo");
  };

  const [activeTab, setActiveTab] = useState("crestron");

  const platforms = {
    crestron: {
      name: "Crestron Automation",
      tagline: "Enterprise-Grade Building Control",
      icon: "🔷",
      color: "from-[#f24b00] to-[#e54600]",
      features: [
        { icon: "🏢", title: "Complete Ecosystem", desc: "End-to-end control solutions for entire buildings" },
        { icon: "🔌", title: "Deep Integration", desc: "Seamless integration with HVAC, lighting, security" },
        { icon: "📱", title: "Unified Control", desc: "Single interface for all AV and building systems" },
        { icon: "🌐", title: "Scalable Architecture", desc: "From single rooms to multi-campus deployments" }
      ],
      benefits: [
        "Industry-leading reliability for critical environments",
        "Extensive third-party system integration capabilities",
        "Centralized monitoring and management platform",
        "Future-proof technology with regular updates"
      ]
    },
    extron: {
      name: "Extron Automation",
      tagline: "Reliable, Standardized Control Solutions",
      icon: "⚡",
      color: "from-[#f24b00] to-[#e54600]",
      features: [
        { icon: "🎯", title: "Consistent Performance", desc: "Proven reliability across all system components" },
        { icon: "🔧", title: "Easy Management", desc: "Global Configurator for streamlined deployment" },
        { icon: "📊", title: "System Analytics", desc: "Comprehensive monitoring and reporting" },
        { icon: "🔄", title: "Standardized Workflow", desc: "Predictable installation and maintenance" }
      ],
      benefits: [
        "Rapid deployment with pre-configured solutions",
        "Lower total cost of ownership",
        "Excellent technical support and documentation",
        "Consistent user experience across all spaces"
      ]
    }
  };

  const automationAreas = [
    {
      area: "Conference & Meeting Rooms",
      systems: ["Video conferencing", "Lighting control", "Motorized shades", "Room scheduling"],
      icon: "💼",
      platforms: ["Crestron Flex", "Extron MediaLink"]
    },
    {
      area: "Classrooms & Lecture Halls",
      systems: ["Lecture capture", "Student collaboration", "Source control", "Recording systems"],
      icon: "🎓",
      platforms: ["Crestron Fusion", "Extron Control Systems"]
    },
    {
      area: "Corporate Lobbies & Common Areas",
      systems: ["Digital signage", "Background music", "Lighting scenes", "Wayfinding"],
      icon: "🏢",
      platforms: ["Crestron Mercury", "Extron SMP"]
    },
    {
      area: "Executive Suites & Boardrooms",
      systems: ["High-end audio/video", "Climate control", "Security integration", "Preset scenes"],
      icon: "👔",
      platforms: ["Crestron Horizon", "Extron TouchLink"]
    }
  ];

  const integrationFeatures = [
    {
      category: "Environmental Control",
      integrations: ["HVAC systems", "Motorized shades", "Lighting control", "Temperature sensors"],
      icon: "🌡️"
    },
    {
      category: "Security & Access",
      integrations: ["Access control systems", "Surveillance cameras", "Door locks", "Occupancy sensors"],
      icon: "🔒"
    },
    {
      category: "Communication Systems",
      integrations: ["IP telephony", "Emergency notification", "Paging systems", "Digital signage"],
      icon: "📞"
    },
    {
      category: "Energy Management",
      integrations: ["Power monitoring", "Automated shutdown", "Usage reporting", "Efficiency optimization"],
      icon: "💡"
    }
  ];

  const current = platforms[activeTab];

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
              Enterprise Automation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Building-Wide AV Automation
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Accelerate your organization's growth with unified control systems that transform how people work, learn, and collaborate.
            </p>

            <div className="flex justify-center gap-4 pt-8">
              <button
                onClick={() => setActiveTab("crestron")}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                  activeTab === "crestron"
                    ? "bg-white text-[#f24b00] shadow-xl scale-105"
                    : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
                }`}
              >
                🔷 Crestron Solutions
              </button>
              <button
                onClick={() => setActiveTab("extron")}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                  activeTab === "extron"
                    ? "bg-white text-[#f24b00] shadow-xl scale-105"
                    : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
                }`}
              >
                ⚡ Extron Solutions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Digital Media Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#f24b00] to-[#e54600] rounded-full text-white text-sm font-medium mb-4">
              Digital Media
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-4">
              {current.name}
            </h2>
            <p className="text-xl text-gray-600">{current.tagline}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {current.features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-[#16213d] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-[#16213d] mb-8 text-center">
              Why Choose {current.name.split(' ')[0]}?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {current.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#f24b00] to-[#e54600] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Audio Visual Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#f24b00] to-[#e54600] rounded-full text-white text-sm font-medium mb-4">
              Audio Visual
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-6">
              True Omnichannel Building Automation
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#16213d] mb-6">Automation Areas</h3>
              <div className="space-y-6">
                {automationAreas.map((area, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl flex-shrink-0">{area.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[#16213d] mb-2">{area.area}</h4>
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          {area.systems.map((system, i) => (
                            <div key={i} className="flex items-center space-x-1">
                              <div className="w-1.5 h-1.5 bg-[#f24b00] rounded-full"></div>
                              <span className="text-gray-600 text-sm">{system}</span>
                            </div>
                          ))}
                        </div>
                        <div className="text-xs text-gray-500">
                          Platforms: {area.platforms.join(', ')}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#16213d] mb-6">System Integration</h3>
              <div className="space-y-6">
                {integrationFeatures.map((integration, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-2xl">{integration.icon}</div>
                      <h4 className="font-bold text-[#16213d]">{integration.category}</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {integration.integrations.map((item, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#f24b00] rounded-full"></div>
                          <span className="text-gray-600 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collaboration Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#f24b00] to-[#e54600] rounded-full text-white text-sm font-medium mb-4">
              Collaboration
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-4">
              Enhanced Building Intelligence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: "📊", 
                title: "Centralized Management", 
                desc: "Monitor and control all systems from a single platform with real-time analytics and reporting" 
              },
              { 
                icon: "💡", 
                title: "Energy Optimization", 
                desc: "Automated power management and occupancy-based control to reduce energy costs" 
              },
              { 
                icon: "🔄", 
                title: "Scalable Architecture", 
                desc: "Grow your automation system seamlessly as your organization expands" 
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#16213d] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#f24b00] to-[#e54600] text-white p-12 rounded-3xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Automate Your Building?
            </h3>
            <p className="text-orange-100 mb-8 text-lg">
              Let's design a comprehensive building-wide automation solution that enhances productivity and reduces costs.
            </p>
            <button 
              onClick={handleButtonClick}
              className="bg-white text-[#f24b00] px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Assessment
            </button>
          </div>
        </div>
      </div>

      <BookDemo />
    </div>
  );
}

export default BuildingWideAutomation;