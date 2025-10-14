import React, { useState, useEffect } from "react";
import BookDemo from "../pages/BookDemoPage";
import { useNavigate } from "react-router-dom";

function RoomScheduling() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/bookDemo");
  };

  const [activeFeature, setActiveFeature] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("panels");

  const technologies = {
    panels: {
      name: "Scheduling Panels",
      tagline: "Smart Room Displays",
      icon: "📱",
      color: "from-blue-600 to-blue-800",
      features: [
        { icon: "👆", title: "Touch Interface", desc: "Intuitive touchscreen for easy room booking and management" },
        { icon: "📅", title: "Real-Time Availability", desc: "Instant visibility of room schedules and bookings" },
        { icon: "🎨", title: "Custom Branding", desc: "Match your organization's look and feel" },
        { icon: "🔌", title: "Easy Integration", desc: "Seamless connection with calendar systems" },
        { icon: "⚡", title: "Instant Booking", desc: "One-touch room reservation and check-in" },
        { icon: "🔋", title: "PoE Powered", desc: "Simple installation with Power over Ethernet" }
      ],
      benefits: [
        "Reduce meeting room conflicts and double-bookings",
        "Improve space utilization and efficiency",
        "Enhance employee experience and productivity",
        "Real-time room status and availability"
      ]
    },
    software: {
      name: "Scheduling Software",
      tagline: "Centralized Room Management",
      icon: "💻",
      color: "from-purple-600 to-indigo-700",
      features: [
        { icon: "🌐", title: "Web Portal", desc: "Book rooms from any device with web browser" },
        { icon: "📱", title: "Mobile App", desc: "Room booking and management on the go" },
        { icon: "📊", title: "Analytics", desc: "Usage reports and space utilization data" },
        { icon: "🔄", title: "Sync Integration", desc: "Automatic sync with Outlook and Google Calendar" },
        { icon: "🎯", title: "Smart Scheduling", desc: "AI-powered room suggestions based on needs" },
        { icon: "🛡️", title: "Admin Control", desc: "Centralized management and permissions" }
      ],
      benefits: [
        "Centralized control of all meeting spaces",
        "Detailed analytics for space optimization",
        "Flexible booking policies and rules",
        "Scalable solution for organizations of any size"
      ]
    }
  };

  const applications = [
    {
      category: "Corporate Offices",
      title: "Meeting Room Management",
      description: "Streamline room bookings and eliminate scheduling conflicts in corporate environments.",
      features: ["Outlook integration", "Mobile booking", "Resource scheduling", "Conflict prevention"],
      icon: "🏢"
    },
    {
      category: "Education",
      title: "Classroom & Lab Scheduling",
      description: "Efficiently manage classroom, lab, and facility bookings for educational institutions.",
      features: ["Course scheduling", "Faculty bookings", "Equipment management", "Student access"],
      icon: "🎓"
    },
    {
      category: "Healthcare",
      title: "Medical Room Scheduling",
      description: "Coordinate consultation rooms, operating theaters, and medical equipment usage.",
      features: ["Patient scheduling", "Equipment tracking", "Staff coordination", "Emergency overrides"],
      icon: "🏥"
    }
  ];

  const products = [
    { 
      name: "Touch Panels", 
      icon: "👆", 
      color: "from-blue-500 to-blue-700",
      specs: ["7-10 inch displays", "Touch interface", "Room status", "Instant booking"]
    },
    { 
      name: "Desktop Software", 
      icon: "💻", 
      color: "from-purple-500 to-purple-700",
      specs: ["Web-based portal", "Admin controls", "Reporting tools", "User management"]
    },
    { 
      name: "Mobile Apps", 
      icon: "📱", 
      color: "from-indigo-500 to-indigo-700",
      specs: ["iOS & Android", "On-the-go booking", "Push notifications", "QR check-in"]
    },
    { 
      name: "Analytics Suite", 
      icon: "📊", 
      color: "from-blue-600 to-purple-600",
      specs: ["Usage reports", "Space utilization", "Trend analysis", "ROI tracking"]
    }
  ];

  const integrations = [
    { name: "Microsoft Outlook", icon: "📧", color: "from-blue-500 to-blue-700" },
    { name: "Google Calendar", icon: "📅", color: "from-green-500 to-green-700" },
    { name: "Office 365", icon: "🏢", color: "from-orange-500 to-orange-700" },
    { name: "Teams & Zoom", icon: "🎥", color: "from-purple-500 to-purple-700" }
  ];

  const current = technologies[activeTab];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % applications.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [applications.length]);

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
              Interactive Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Room Scheduling Systems
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Accelerate your organization's growth with intelligent room scheduling that eliminates conflicts and maximizes space utilization.
            </p>

            {/* Technology Tabs */}
            <div className="flex justify-center gap-4 pt-8">
              <button
                onClick={() => setActiveTab("panels")}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                  activeTab === "panels"
                    ? "bg-white text-blue-600 shadow-xl scale-105"
                    : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
                }`}
              >
                📱 Scheduling Panels
              </button>
              <button
                onClick={() => setActiveTab("software")}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                  activeTab === "software"
                    ? "bg-white text-purple-600 shadow-xl scale-105"
                    : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
                }`}
              >
                💻 Scheduling Software
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
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Smart Room Management
            </h2>
            <p className="text-2xl text-gray-600 font-light">Next-generation scheduling solutions for modern workplaces</p>
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
              Benefits of {current.name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {current.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-medium mb-4">
              Audio Visual
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              True Omnichannel Room Management
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All-in-one scheduling solutions that integrate seamlessly with your AV systems and meeting room technology.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {applications.map((application, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 transform ${
                    currentSlide === index ? "scale-105 ring-4 ring-blue-600 ring-opacity-50" : "hover:scale-102"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-6xl">{application.icon}</div>
                    </div>
                    <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                      {application.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{application.title}</h3>
                    <p className="text-gray-600 mb-4">{application.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {application.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-2">
              {applications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-blue-600 w-8" : "bg-gray-300"
                  }`}
                />
              ))}
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
              Enhanced Meeting Collaboration
            </h2>
            <p className="text-lg text-gray-600">
              Streamline meeting room management and enable seamless collaboration across your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {products.map((product, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${product.color} text-white rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300 shadow-lg`}
              >
                <div className="text-5xl mb-3">{product.icon}</div>
                <h3 className="text-xl font-bold mb-4">{product.name}</h3>
                <div className="space-y-2">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="text-sm opacity-90">• {spec}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Integration Partners */}
          <div className="bg-white rounded-3xl p-8 shadow-xl mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Seamless Integrations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${integration.color} text-white rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300`}
                >
                  <div className="text-4xl mb-3">{integration.icon}</div>
                  <h4 className="font-bold text-lg">{integration.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Workflow Section */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              How It Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1", icon: "📅", title: "Book Room", desc: "Schedule via panel, app, or web portal" },
                { step: "2", icon: "✅", title: "Check In", desc: "Tap to confirm your meeting" },
                { step: "3", icon: "⚡", title: "Auto Setup", desc: "AV systems activate automatically" },
                { step: "4", icon: "📊", title: "Analytics", desc: "Track usage and optimize space" }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <div className="text-3xl mb-2">{step.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Proscene Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🎯", title: "Expert Consultation", desc: "We analyze your space and recommend the perfect scheduling solution" },
              { icon: "⚙️", title: "Professional Installation", desc: "Certified technicians ensure seamless setup and integration" },
              { icon: "🛡️", title: "Ongoing Support", desc: "Training, maintenance, and technical support when you need it" }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
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
              Ready to Transform Your Room Management?
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Let's implement an intelligent room scheduling system that eliminates conflicts and maximizes your space utilization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleButtonClick}
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      <BookDemo />
    </div>
  );
}

export default RoomScheduling;