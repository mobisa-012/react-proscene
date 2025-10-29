import React, { useState } from "react";
import BookDemo from "../pages/BookDemoPage";
import { useNavigate } from "react-router-dom";

function Localizations() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/bookDemo");
  };

  const [activeTab, setActiveTab] = useState("technical");

  const localizationTypes = {
    technical: {
      name: "Technical Localization",
      tagline: "Room-Specific AV Configuration",
      icon: "⚙️",
      color: "from-[#ff4e00] to-[#e54600]",
      features: [
        { icon: "📍", title: "Device Placement", desc: "Strategic equipment positioning for optimal performance" },
        { icon: "🎛️", title: "Room Programming", desc: "Custom control interfaces for each space" },
        { icon: "🔊", title: "Acoustic Calibration", desc: "Room-specific audio tuning and optimization" },
        { icon: "💡", title: "Lighting Profiles", desc: "Preset lighting scenes for different use cases" }
      ]
    },
    geographic: {
      name: "Geographic Localization",
      tagline: "Multi-Location AV Deployment",
      icon: "🌍",
      color: "from-[#ff4e00] to-[#e54600]",
      features: [
        { icon: "🏢", title: "Branch Deployment", desc: "Consistent AV systems across all locations" },
        { icon: "📋", title: "Compliance", desc: "Local electrical and safety code adherence" },
        { icon: "🗣️", title: "Language Support", desc: "Local language interfaces and content" },
        { icon: "⚡", title: "Infrastructure", desc: "Adaptation to local power and network standards" }
      ]
    }
  };

  const localizationScenarios = [
    {
      scenario: "Conference Room Setup",
      description: "Custom configurations for different room sizes and purposes",
      localizations: [
        "Control interface tailored to room equipment",
        "Audio settings optimized for room acoustics",
        "Lighting scenes for presentations and video calls",
        "Display settings for room layout"
      ],
      icon: "💼"
    },
    {
      scenario: "Multi-Branch Deployment",
      description: "Standardized systems across geographic locations",
      localizations: [
        "Regional power and network compliance",
        "Local language support in interfaces",
        "Location-specific content and branding",
        "Centralized management with local control"
      ],
      icon: "🏢"
    },
    {
      scenario: "Digital Signage Network",
      description: "Targeted content for different areas and regions",
      localizations: [
        "Zone-specific content scheduling",
        "Regional promotions and messaging",
        "Local emergency and information alerts",
        "Cultural and language adaptation"
      ],
      icon: "📺"
    }
  ];

  const benefits = [
    {
      icon: "🎯",
      title: "Optimized Performance",
      description: "Each system perfectly tuned for its specific environment and use case"
    },
    {
      icon: "💰",
      title: "Cost Efficiency",
      description: "Standardized deployment processes with localized customization"
    },
    {
      icon: "🚀",
      title: "Rapid Deployment",
      description: "Proven templates and configurations for faster implementation"
    },
    {
      icon: "🛡️",
      title: "Compliance Assurance",
      description: "All local regulations and standards automatically addressed"
    }
  ];

  const current = localizationTypes[activeTab];

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
              Professional Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              AV Localizations
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Accelerate your organization's growth with perfectly localized AV systems tailored to each space and location.
            </p>

            <div className="flex justify-center gap-4 pt-8">
              <button
                onClick={() => setActiveTab("technical")}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                  activeTab === "technical"
                    ? "bg-white text-[#ff4e00] shadow-xl scale-105"
                    : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
                }`}
              >
                ⚙️ Technical Localization
              </button>
              <button
                onClick={() => setActiveTab("geographic")}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                  activeTab === "geographic"
                    ? "bg-white text-[#ff4e00] shadow-xl scale-105"
                    : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
                }`}
              >
                🌍 Geographic Localization
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Digital Media Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#ff4e00] to-[#e54600] rounded-full text-white text-sm font-medium mb-4">
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
        </div>
      </div>

      {/* Audio Visual Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#ff4e00] to-[#e54600] rounded-full text-white text-sm font-medium mb-4">
              Audio Visual
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-6">
              True Omnichannel Localization
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {localizationScenarios.map((scenario, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-6 shadow-lg">
                <div className="text-4xl mb-4 text-center">{scenario.icon}</div>
                <h3 className="text-xl font-bold text-[#16213d] mb-3 text-center">{scenario.scenario}</h3>
                <p className="text-gray-600 mb-4 text-center">{scenario.description}</p>
                <ul className="space-y-2">
                  {scenario.localizations.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-[#ff4e00] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Collaboration Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#ff4e00] to-[#e54600] rounded-full text-white text-sm font-medium mb-4">
              Collaboration
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-4">
              Enhanced System Performance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-[#16213d] mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Localization Process */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-6">
              Our Localization Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", icon: "📐", title: "Assessment", desc: "Analyze space requirements and constraints" },
              { step: "2", icon: "🎯", title: "Planning", desc: "Design customized solutions for each location" },
              { step: "3", icon: "⚡", title: "Implementation", desc: "Deploy and configure localized systems" },
              { step: "4", icon: "🔧", title: "Optimization", desc: "Fine-tune performance for each environment" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-[#ff4e00] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <div className="text-3xl mb-2">{step.icon}</div>
                <h4 className="font-bold text-[#16213d] mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#ff4e00] to-[#e54600] text-white p-12 rounded-3xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Perfectly Localized AV Systems?
            </h3>
            <p className="text-orange-100 mb-8 text-lg">
              Let us tailor AV solutions that work perfectly in every space and location.
            </p>
            <button 
              onClick={handleButtonClick}
              className="bg-white text-[#ff4e00] px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Localization
            </button>
          </div>
        </div>
      </div>

      <BookDemo />
    </div>
  );
}

export default Localizations;