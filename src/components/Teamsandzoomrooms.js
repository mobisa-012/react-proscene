import React, { useState } from "react";
import BookDemo from "../pages/BookDemoPage";
import { useNavigate } from "react-router-dom";

function TeamsZoomRooms() {
    const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/bookDemo");
  };

  const [activeTab, setActiveTab] = useState("teams");

  const platforms = {
    teams: {
      name: "Microsoft Teams Rooms",
      tagline: "Enterprise Collaboration, Perfected",
      icon: "💼",
      color: "from-blue-600 to-blue-800",
      features: [
        { icon: "🎯", title: "Native Integration", desc: "Seamlessly integrated with Microsoft 365 ecosystem" },
        { icon: "📅", title: "Calendar Sync", desc: "One-touch join from Outlook calendar" },
        { icon: "🖥️", title: "Dual Display", desc: "Content and video on separate screens" },
        { icon: "🎨", title: "Whiteboarding", desc: "Interactive Microsoft Whiteboard support" },
        { icon: "🔐", title: "Enterprise Security", desc: "Advanced security and compliance built-in" },
        { icon: "🌐", title: "Global Reach", desc: "Connect teams worldwide effortlessly" }
      ],
      benefits: [
        "Certified hardware for guaranteed compatibility",
        "Unified management through Teams Admin Center",
        "AI-powered features like background blur and noise suppression",
        "Seamless integration with SharePoint and OneDrive"
      ]
    },
    zoom: {
      name: "Zoom Rooms",
      tagline: "Simple, Reliable, Scalable",
      icon: "🔵",
      color: "from-purple-600 to-indigo-700",
      features: [
        { icon: "⚡", title: "Lightning Fast", desc: "Join meetings in seconds with one tap" },
        { icon: "📊", title: "Smart Gallery", desc: "AI-powered gallery view and speaker tracking" },
        { icon: "🎬", title: "Recording", desc: "Cloud recording and transcription" },
        { icon: "💬", title: "Chat & Share", desc: "Wireless content sharing and chat" },
        { icon: "📱", title: "Mobile Control", desc: "Control rooms from your smartphone" },
        { icon: "🔌", title: "Easy Setup", desc: "Quick deployment and configuration" }
      ],
      benefits: [
        "Works with any conferencing platform",
        "Flexible deployment options for any space",
        "Advanced analytics and reporting",
        "Automatic software updates and monitoring"
      ]
    }
  };

  const current = platforms[activeTab];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className={`relative bg-gradient-to-br ${current.color} text-white overflow-hidden transition-all duration-500`}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full opacity-10 blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 mt-5">
          <div className="text-center space-y-8">
            <div className="inline-block px-6 py-3 bg-white bg-opacity-20 rounded-full text-sm font-medium backdrop-blur-sm">
              Certified Room Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Microsoft Teams & Zoom Rooms
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Transform your meeting spaces with certified solutions that deliver exceptional video conferencing experiences on the platforms your teams trust.
            </p>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Click on each button to view related content
            </p>

            {/* Platform Tabs */}
            <div className="flex justify-center gap-4 pt-8">
              <button
                onClick={() => setActiveTab("teams")}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                  activeTab === "teams"
                    ? "bg-white text-blue-600 shadow-xl scale-105"
                    : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
                }`}
              >
                💼 Microsoft Teams
              </button>
              <button
                onClick={() => setActiveTab("zoom")}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                  activeTab === "zoom"
                    ? "bg-white text-purple-600 shadow-xl scale-105"
                    : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
                }`}
              >
                🔵 Zoom Rooms
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Details */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-6xl mb-4">{current.icon}</div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              {current.name}
            </h2>
            <p className="text-2xl text-gray-600 font-light">{current.tagline}</p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {current.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose {current.name}?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {current.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Room Sizes Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Solutions for Every Space
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From small huddle rooms to large boardrooms, we design and install certified systems that fit your space perfectly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                size: "Small Huddle Rooms",
                capacity: "2-4 people",
                equipment: ["All-in-one video bar", "Touch controller", "Wireless content sharing"],
                icon: "💡"
              },
              {
                size: "Medium Conference Rooms",
                capacity: "6-10 people",
                equipment: ["PTZ camera", "Soundbar with mics", "Dual displays", "Touch panel control"],
                icon: "🎯"
              },
              {
                size: "Large Boardrooms",
                capacity: "12+ people",
                equipment: ["Multiple cameras", "Ceiling mic array", "Large format displays", "Advanced control system"],
                icon: "🏢"
              }
            ].map((room, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{room.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{room.size}</h3>
                <p className="text-gray-600 mb-6">{room.capacity}</p>
                <div className="space-y-2">
                  {room.equipment.map((item, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Not Sure Which Platform?
            </h2>
            <p className="text-lg text-gray-600">
              Both platforms are excellent. We'll help you choose based on your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Teams If:</h3>
              <ul className="space-y-3">
                {[
                  "You're a Microsoft 365 organization",
                  "You need tight Office integration",
                  "Enterprise security is critical",
                  "You use SharePoint/OneDrive heavily"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">▶</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-5xl mb-4">🔵</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Zoom If:</h3>
              <ul className="space-y-3">
                {[
                  "You want platform flexibility",
                  "Ease of use is top priority",
                  "You host webinars/large meetings",
                  "You need the simplest setup"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-purple-600 mt-1">▶</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Still unsure? We can install both platforms in different rooms!
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      

      <BookDemo />
    </div>
  );
}

export default TeamsZoomRooms;