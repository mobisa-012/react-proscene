import React, { useState } from "react";
import BookDemo from "../pages/BookDemoPage";
import { useNavigate } from "react-router-dom";

function IPTV() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/bookDemo");
  };

  const [activeTab, setActiveTab] = useState("corporate");

  const solutions = {
    corporate: {
      name: "Corporate IPTV",
      tagline: "Internal Communications & Digital Signage",
      icon: "🏢",
      color: "from-[#ff4e00] to-[#e54600]",
      features: [
        { icon: "📢", title: "Corporate Communications", desc: "Live broadcasts and company announcements" },
        { icon: "📊", title: "Data Feeds", desc: "Real-time KPI dashboards and performance metrics" },
        { icon: "🎓", title: "Training Content", desc: "On-demand training and onboarding videos" },
        { icon: "🌐", title: "Multi-location", desc: "Centralized control across all office locations" }
      ]
    },
    hospitality: {
      name: "Hospitality IPTV",
      tagline: "In-Room Entertainment & Hotel TV",
      icon: "🏨",
      color: "from-[#ff4e00] to-[#e54600]",
      features: [
        { icon: "📺", title: "In-Room Entertainment", desc: "Live TV, movies, and guest information" },
        { icon: "💼", title: "Hotel Services", desc: "Room service, amenities, and billing integration" },
        { icon: "📍", title: "Wayfinding", desc: "Interactive maps and local attractions" },
        { icon: "🛎️", title: "Guest Experience", desc: "Personalized welcome messages and promotions" }
      ]
    }
  };

  const applications = [
    {
      industry: "Corporate",
      useCases: ["Employee communications", "Digital signage", "Training broadcasts", "Live event streaming"],
      icon: "💼"
    },
    {
      industry: "Healthcare",
      useCases: ["Patient education", "Waiting room TV", "Staff training", "Emergency alerts"],
      icon: "🏥"
    },
    {
      industry: "Education",
      useCases: ["Lecture capture", "Campus TV", "Emergency alerts", "Event broadcasting"],
      icon: "🎓"
    },
    {
      industry: "Retail",
      useCases: ["In-store promotions", "Brand messaging", "Product demos", "Queue management"],
      icon: "🛍️"
    }
  ];

  const current = solutions[activeTab];

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
              IPTV Solutions
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Accelerate your organization's growth with professional IPTV systems for digital signage, communications, and entertainment.
            </p>

            <div className="flex justify-center gap-4 pt-8">
              <button
                onClick={() => setActiveTab("corporate")}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                  activeTab === "corporate"
                    ? "bg-white text-[#ff4e00] shadow-xl scale-105"
                    : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
                }`}
              >
                🏢 Corporate IPTV
              </button>
              <button
                onClick={() => setActiveTab("hospitality")}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                  activeTab === "hospitality"
                    ? "bg-white text-[#ff4e00] shadow-xl scale-105"
                    : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
                }`}
              >
                🏨 Hospitality IPTV
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
              True Omnichannel Video Delivery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                "Live TV and video on demand delivery",
                "Centralized content management system",
                "Multi-zone content targeting",
                "Integration with existing AV systems"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#ff4e00] to-[#e54600] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-700 text-lg">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-[#ff4e00] to-[#e54600] rounded-3xl p-8 text-white text-center">
              <div className="text-6xl mb-4">📡</div>
              <h3 className="text-2xl font-bold mb-4">Network Video Distribution</h3>
              <p className="text-orange-100">Deliver content efficiently over your existing IP infrastructure</p>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Applications */}
      <div className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#ff4e00] to-[#e54600] rounded-full text-white text-sm font-medium mb-4">
              Collaboration
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-4">
              Industry-Specific Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-4xl mb-4 text-center">{app.icon}</div>
                <h3 className="text-lg font-bold text-[#16213d] mb-4 text-center">{app.industry}</h3>
                <ul className="space-y-2">
                  {app.useCases.map((useCase, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-[#ff4e00] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-6">
              Professional IPTV Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🎛️", title: "Central Management", desc: "Control all screens and content from one platform" },
              { icon: "📱", title: "Multi-Device", desc: "Deliver to TVs, digital signage, and mobile devices" },
              { icon: "🔒", title: "Secure Delivery", desc: "Enterprise-grade security and access controls" }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-8 text-center">
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
          <div className="bg-gradient-to-r from-[#ff4e00] to-[#e54600] text-white p-12 rounded-3xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Streamline Your Video Delivery?
            </h3>
            <p className="text-orange-100 mb-8 text-lg">
              Let's design an IPTV solution that enhances communication and engagement across your organization.
            </p>
            <button 
              onClick={handleButtonClick}
              className="bg-white text-[#ff4e00] px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>

      <BookDemo />
    </div>
  );
}

export default IPTV;