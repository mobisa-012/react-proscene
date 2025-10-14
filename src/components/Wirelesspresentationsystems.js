import React, { useState, useEffect } from "react";
import BookDemo from "../pages/BookDemoPage";
import { useNavigate } from "react-router-dom";

function WirelessPresentation() {
    const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/bookDemo");
  };

  const [activeFeature, setActiveFeature] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      title: "Cable-Free Sharing",
      description: "Present from any device without hunting for cables or adapters",
      icon: "📡"
    },
    {
      title: "Multi-Device Display",
      description: "Show content from up to 4 devices simultaneously on one screen",
      icon: "🖥️"
    },
    {
      title: "Cross-Platform Support",
      description: "Works with Windows, Mac, iOS, Android, and Chromebook",
      icon: "🌐"
    },
    {
      title: "Secure Connection",
      description: "Enterprise-grade encryption keeps your presentations private",
      icon: "🔐"
    }
  ];

  const solutions = [
    {
      category: "Small Rooms",
      title: "Huddle Space Solution",
      description: "Perfect for quick team collaborations and informal meetings in compact spaces.",
      applications: ["Up to 8 users", "Single display", "App-based sharing", "Budget-friendly"],
      icon: "💡"
    },
    {
      category: "Conference Rooms",
      title: "Professional Presentation",
      description: "Full-featured wireless presentation for formal meetings and client presentations.",
      applications: ["Up to 32 users", "Dual display support", "Touch-back control", "Advanced moderation"],
      icon: "🎯"
    },
    {
      category: "Training Rooms",
      title: "Interactive Learning",
      description: "Enable seamless collaboration for training sessions and educational environments.",
      applications: ["Unlimited users", "Annotation tools", "Recording capability", "Student engagement"],
      icon: "📚"
    }
  ];

  const brands = [
    { name: "Barco ClickShare", icon: "🔷", color: "from-blue-500 to-blue-700" },
    { name: "Crestron AirMedia", icon: "⚡", color: "from-indigo-500 to-indigo-700" },
    { name: "Solstice by Mersive", icon: "☀️", color: "from-orange-500 to-red-600" },
    { name: "Kramer VIA", icon: "🎬", color: "from-purple-500 to-purple-700" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % solutions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [solutions.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-pink-400 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400 rounded-full opacity-15 blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 mt-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-6 py-3 bg-white bg-opacity-20 rounded-full text-sm font-medium backdrop-blur-sm">
                Wireless Presentation Systems
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Present Without
                <span className="block">The Cable Chaos</span>
              </h1>
              <p className="text-xl text-purple-100 max-w-lg leading-relaxed">
                Transform meeting productivity with wireless presentation technology that lets anyone share content instantly from any device.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleButtonClick}
                  className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  See Demo
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8">
                  <div className="bg-gray-700 rounded-xl h-64 mb-4 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
                    <div className="text-6xl z-10">📊</div>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <div className="flex-1 bg-indigo-600 rounded-lg h-3"></div>
                    <div className="flex-1 bg-purple-600 rounded-lg h-3"></div>
                    <div className="flex-1 bg-pink-600 rounded-lg h-3"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[1,2,3].map((i) => (
                      <div key={i} className="bg-gray-600 rounded-lg p-3 flex flex-col items-center hover:bg-gray-500 transition-colors">
                        <div className="text-2xl mb-1">💻</div>
                        <div className="text-xs text-gray-300">Device {i}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-25 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Features Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Go Wireless?
              <span className="text-indigo-600"> Here's Why</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Say goodbye to technical difficulties and wasted meeting time. Start presenting in seconds, not minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? "bg-indigo-600 text-white shadow-xl transform scale-105"
                      : "bg-white text-gray-700 hover:shadow-lg"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`text-3xl p-3 rounded-xl ${
                      activeFeature === index ? "bg-white bg-opacity-20" : "bg-gray-100"
                    }`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className={`${activeFeature === index ? "text-indigo-100" : "text-gray-600"}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
                <div className="bg-white bg-opacity-10 rounded-2xl p-6 mb-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold">4 Devices Connected</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      { device: "💻", label: "MacBook", active: true },
                      { device: "📱", label: "iPhone", active: true },
                      { device: "🖥️", label: "Surface", active: false },
                      { device: "📲", label: "Android", active: true }
                    ].map((item, i) => (
                      <div 
                        key={i} 
                        className={`bg-white bg-opacity-20 rounded-lg p-4 text-center transition-all ${
                          item.active ? "ring-2 ring-green-400" : "opacity-50"
                        }`}
                      >
                        <div className="text-3xl mb-1">{item.device}</div>
                        <div className="text-xs">{item.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
                    <div className="text-sm">📡 Sharing Active • 🔐 Secure</div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-3">
                    {features[activeFeature].title}
                  </h3>
                  <p className="text-indigo-100">
                    No dongles. No drivers. No delays. Just present.
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-400 rounded-full opacity-30 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Showcase */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Solutions for
              <span className="text-indigo-600"> Every Room Size</span>
            </h2>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 transform ${
                    currentSlide === index ? "scale-105 ring-4 ring-indigo-600 ring-opacity-50" : "hover:scale-102"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                      <div className="text-6xl">{solution.icon}</div>
                    </div>
                    <div className="absolute top-4 left-4 px-3 py-1 bg-indigo-600 text-white text-sm font-semibold rounded-full">
                      {solution.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {solution.applications.map((app, appIndex) => (
                          <div key={appIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                            <span className="text-sm text-gray-600">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-2">
              {solutions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-indigo-600 w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Brands Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leading Brands We Install
            </h2>
            <p className="text-lg text-gray-600">
              We're certified partners with the industry's most trusted wireless presentation brands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {brands.map((brand, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${brand.color} text-white rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300 shadow-lg`}
              >
                <div className="text-5xl mb-3">{brand.icon}</div>
                <h3 className="text-xl font-bold">{brand.name}</h3>
              </div>
            ))}
          </div>

          {/* Comparison Grid */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What Makes Them Different?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🔷</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Barco ClickShare</h4>
                    <p className="text-gray-600 text-sm">Premium solution with button-based sharing and advanced conferencing integration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Crestron AirMedia</h4>
                    <p className="text-gray-600 text-sm">Seamless integration with Crestron control systems and room automation</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">☀️</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Solstice by Mersive</h4>
                    <p className="text-gray-600 text-sm">Software-based solution with unlimited users and powerful collaboration features</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🎬</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Kramer VIA</h4>
                    <p className="text-gray-600 text-sm">Cost-effective solution with excellent compatibility and reliable performance</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Proscene Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🎯", title: "Expert Selection", desc: "We'll recommend the perfect system for your needs and budget" },
              { icon: "⚙️", title: "Professional Install", desc: "Certified technicians ensure flawless setup and configuration" },
              { icon: "🛡️", title: "Ongoing Support", desc: "Training, troubleshooting, and maintenance when you need it" }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
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
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-12 rounded-3xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Cut the Cables?
            </h3>
            <p className="text-indigo-100 mb-8 text-lg">
              Let's design a wireless presentation solution that transforms your meeting experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleButtonClick}
                className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
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

export default WirelessPresentation;