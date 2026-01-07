import React, { useState, useEffect } from "react";
import BookDemo from "../pages/BookDemoPage";
import { useNavigate } from "react-router-dom";

function VideoWallsLED() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/bookDemo");
  };

  const [activeFeature, setActiveFeature] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("videowalls");

  const technologies = {
    videowalls: {
      name: "Video Walls",
      tagline: "Seamless Large-Format Displays",
      icon: "🖼️",
      color: "from-[#f24b00] to-[#e54600]",
      features: [
        { icon: "🔲", title: "Narrow Bezels", desc: "Ultra-thin borders for seamless viewing experience" },
        { icon: "💎", title: "4K Resolution", desc: "Crystal-clear imagery with exceptional detail" },
        { icon: "⚡", title: "High Brightness", desc: "Perfect for bright environments and retail spaces" },
        { icon: "🔄", title: "24/7 Operation", desc: "Built for continuous use in control rooms" },
        { icon: "🎛️", title: "Easy Control", desc: "Intuitive management and content scheduling" },
        { icon: "🛡️", title: "Reliability", desc: "Commercial-grade components for long-term use" }
      ],
      benefits: [
        "Custom configurations from 2x2 to large-scale arrays",
        "Professional calibration for color accuracy",
        "Content management system integration",
        "Remote monitoring and maintenance"
      ]
    },
    led: {
      name: "LED Displays",
      tagline: "Brilliant, Flexible Visual Solutions",
      icon: "✨",
      color: "from-[#f24b00] to-[#e54600]",
      features: [
        { icon: "🌟", title: "High Brightness", desc: "Outstanding visibility even in direct sunlight" },
        { icon: "🎨", title: "Vivid Colors", desc: "Wide color gamut for stunning visual impact" },
        { icon: "⚡", title: "Low Latency", desc: "Real-time content updates and live feeds" },
        { icon: "🔄", title: "Flexible Shapes", desc: "Curved, cylindrical, and custom configurations" },
        { icon: "💡", title: "Energy Efficient", desc: "Advanced LED technology reduces power consumption" },
        { icon: "🌧️", title: "Weather Resistant", desc: "IP65+ rated for indoor and outdoor use" }
      ],
      benefits: [
        "Pixel pitches from P0.9 to P10 for any viewing distance",
        "Seamless integration with existing systems",
        "Real-time content management capabilities",
        "Durable construction for high-traffic areas"
      ]
    }
  };

  const applications = [
    {
      category: "Corporate",
      title: "Lobby & Reception Displays",
      description: "Make powerful first impressions with stunning video walls in corporate entrances and reception areas.",
      features: ["Brand messaging", "Visitor information", "Event promotions", "Social media feeds"],
      icon: "🏢"
    },
    {
      category: "Control Rooms",
      title: "Mission Critical Monitoring",
      description: "Real-time data visualization for security, transportation, and operations centers.",
      features: ["24/7 reliability", "Multiple data sources", "Alert systems", "Remote collaboration"],
      icon: "🎮"
    },
    {
      category: "Retail & Hospitality",
      title: "Digital Signage & Advertising",
      description: "Engage customers and drive sales with dynamic digital displays in retail and hospitality environments.",
      features: ["Content scheduling", "Interactive elements", "Sales analytics", "Multi-zone content"],
      icon: "🛍️"
    }
  ];

  const products = [
    { 
      name: "LCD Video Walls", 
      icon: "📺", 
      color: "from-[#f24b00] to-[#e54600]",
      specs: ["Narrow bezels", "4K resolution", "55-86 inch panels", "Commercial grade"]
    },
    { 
      name: "Direct View LED", 
      icon: "🌟", 
      color: "from-[#f24b00] to-[#e54600]",
      specs: ["Fine pixel pitch", "High brightness", "Seamless display", "Indoor/outdoor"]
    },
    { 
      name: "Transparent LED", 
      icon: "🔍", 
      color: "from-[#f24b00] to-[#e54600]",
      specs: ["See-through design", "Maintains visibility", "Retail applications", "Modern aesthetic"]
    },
    { 
      name: "Creative Shapes", 
      icon: "💡", 
      color: "from-[#f24b00] to-[#e54600]",
      specs: ["Curved displays", "Custom shapes", "Architectural integration", "Brand identity"]
    }
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
              Video Walls & LED Displays
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Accelerate your organization's growth with stunning large-format displays that captivate audiences and deliver your message with impact.
            </p>

            {/* Technology Tabs */}
            <div className="flex justify-center gap-4 pt-8">
              <button
                onClick={() => setActiveTab("videowalls")}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                  activeTab === "videowalls"
                    ? "bg-white text-[#f24b00] shadow-xl scale-105"
                    : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
                }`}
              >
                🖼️ Video Walls
              </button>
              <button
                onClick={() => setActiveTab("led")}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                  activeTab === "led"
                    ? "bg-white text-[#f24b00] shadow-xl scale-105"
                    : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
                }`}
              >
                ✨ LED Displays
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
            <h2 className="text-3xl md:text-5xl font-bold text-[#16213d] mb-4">
              Next-Gen Display Solutions
            </h2>
            <p className="text-2xl text-gray-600 font-light">Professional display technology for every environment</p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {current.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#16213d] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-[#16213d] mb-8 text-center">
              Why Choose {current.name}?
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
            <h2 className="text-3xl md:text-5xl font-bold text-[#16213d] mb-6">
              True Omnichannel Visual Experiences
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All-in-one visual solutions that integrate seamlessly with your audio and control systems.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {applications.map((application, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 transform ${
                    currentSlide === index ? "scale-105 ring-4 ring-[#f24b00] ring-opacity-50" : "hover:scale-102"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-br from-[#f24b00] to-[#e54600] flex items-center justify-center">
                      <div className="text-6xl">{application.icon}</div>
                    </div>
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#f24b00] text-white text-sm font-semibold rounded-full">
                      {application.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#16213d] mb-3">{application.title}</h3>
                    <p className="text-gray-600 mb-4">{application.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-[#16213d]">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {application.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[#f24b00] rounded-full"></div>
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
                    currentSlide === index ? "bg-[#f24b00] w-8" : "bg-gray-300"
                  }`}
                />
              ))}
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
              Enhanced Visual Collaboration
            </h2>
            <p className="text-lg text-gray-600">
              Transform spaces with display solutions that enable seamless collaboration and communication.
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

          {/* Technical Comparison */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-[#16213d] mb-6 text-center">
              Technology Comparison
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🖼️</div>
                  <div>
                    <h4 className="font-bold text-[#16213d]">LCD Video Walls</h4>
                    <p className="text-gray-600 text-sm">Ideal for control rooms, corporate lobbies, and retail with excellent color accuracy and reliability</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🌟</div>
                  <div>
                    <h4 className="font-bold text-[#16213d]">Direct View LED</h4>
                    <p className="text-gray-600 text-sm">Perfect for large venues, events, and outdoor advertising with seamless displays and high brightness</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🔍</div>
                  <div>
                    <h4 className="font-bold text-[#16213d]">Transparent LED</h4>
                    <p className="text-gray-600 text-sm">Innovative solution for retail windows, museums, and architectural integration maintaining visibility</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">💡</div>
                  <div>
                    <h4 className="font-bold text-[#16213d]">Creative Shapes</h4>
                    <p className="text-gray-600 text-sm">Custom configurations for brand experiences, exhibitions, and unique architectural features</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-4">
              The Proscene Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🎯", title: "Expert Design", desc: "Custom solutions tailored to your space and requirements" },
              { icon: "⚙️", title: "Professional Installation", desc: "Certified technicians ensure perfect setup and calibration" },
              { icon: "🛡️", title: "Complete Support", desc: "Ongoing maintenance, content management, and technical support" }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
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
              Ready to Make an Impact?
            </h3>
            <p className="text-orange-100 mb-8 text-lg">
              Let's design a stunning video wall or LED display solution that transforms your space and engages your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleButtonClick}
                className="bg-white text-[#f24b00] px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      <BookDemo />
    </div>
  );
}

export default VideoWallsLED;