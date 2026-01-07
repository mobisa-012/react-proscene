import React, { useState, useEffect } from "react";
import BookDemo from "../pages/BookDemoPage"; 
import { useNavigate } from "react-router-dom";

function HybridMeetings() {
     const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/bookDemo");
  };
  
  const sendtoStudypage = () => {
    navigate("/case-studies");
  };

  const [activeFeature, setActiveFeature] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      title: "Crystal Clear Audio & Video",
      description: "Professional-grade AV equipment ensures every participant is seen and heard perfectly",
      icon: "🎥"
    },
    {
      title: "Seamless Connectivity",
      description: "One-touch join for all major platforms - Zoom, Teams, Google Meet, and Webex",
      icon: "🔗"
    },
    {
      title: "Smart Room Technology",
      description: "AI-powered cameras, automatic framing, and intelligent audio tracking",
      icon: "🤖"
    },
    {
      title: "Wireless Collaboration",
      description: "Share content effortlessly from any device without cables or adapters",
      icon: "📡"
    }
  ];

  const solutions = [
    {
      category: "Executive Boardrooms",
      title: "Premium Executive Experience",
      description: "Impress stakeholders with sophisticated AV systems that deliver flawless video conferencing and presentation capabilities.",
      applications: ["4K Video Conferencing", "Wireless Presentation", "Integrated Control Systems", "Premium Audio"]
    },
    {
      category: "Huddle Spaces",
      title: "Small Team Collaboration",
      description: "Transform every small space into a productive meeting hub with compact, powerful AV solutions.",
      applications: ["All-in-One Video Bars", "Touch Screen Displays", "Portable Solutions", "Quick Connect"]
    },
    {
      category: "Training Rooms",
      title: "Interactive Learning Environments",
      description: "Enable effective hybrid training sessions with tools that keep remote and in-room participants equally engaged.",
      applications: ["Multi-camera Setup", "Interactive Whiteboards", "Recording Capabilities", "Breakout Room Support"]
    }
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
      <div className="relative bg-gradient-to-br from-[#f24b00] to-[#e54600] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-orange-400 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-300 rounded-full opacity-15 blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 mt-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-6 py-3 bg-white bg-opacity-20 rounded-full text-sm font-medium backdrop-blur-sm">
                Hybrid Meeting Solutions
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Connect Teams
                <span className="block">Anywhere, Seamlessly</span>
              </h1>
              <p className="text-xl text-orange-100 max-w-lg leading-relaxed">
                Bridge the gap between remote and in-room participants with enterprise-grade AV solutions designed for the modern hybrid workplace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleButtonClick}
                  className="bg-white text-[#f24b00] px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 transform transition-transform duration-500">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8">
                  <div className="bg-gray-700 rounded-xl h-64 mb-4 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f24b00]/20 to-[#e54600]/20"></div>
                    <div className="text-6xl z-10">🎬</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-gray-600 rounded-lg h-12 flex items-center justify-center hover:bg-gray-500 transition-colors">
                      <div className="text-2xl">👤</div>
                    </div>
                    <div className="flex-1 bg-gray-600 rounded-lg h-12 flex items-center justify-center hover:bg-gray-500 transition-colors">
                      <div className="text-2xl">👤</div>
                    </div>
                    <div className="flex-1 bg-gray-600 rounded-lg h-12 flex items-center justify-center hover:bg-gray-500 transition-colors">
                      <div className="text-2xl">👤</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-orange-400 to-[#f24b00] rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-[#f24b00] to-orange-400 rounded-full opacity-25 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Features Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#16213d] mb-6">
              Features That Make
              <span className="text-[#f24b00]"> Hybrid Work Better</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our hybrid meeting solutions eliminate the technology barriers that frustrate teams and reduce productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? "bg-[#f24b00] text-white shadow-xl transform scale-105"
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
                      <p className={`${activeFeature === index ? "text-orange-100" : "text-gray-600"}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#f24b00] to-[#e54600] rounded-3xl p-8 text-white">
                <div className="bg-white bg-opacity-10 rounded-2xl p-6 mb-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold">Live Meeting</span>
                    </div>
                    <div className="text-sm">12 participants</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[1,2,3,4,5,6].map((i) => (
                      <div key={i} className="bg-white bg-opacity-20 rounded-lg h-20 flex items-center justify-center hover:bg-opacity-30 transition-all">
                        <div className="text-2xl">👤</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
                    <div className="text-sm">🎤 Audio Active • 📹 HD Video</div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-3">
                    {features[activeFeature].title}
                  </h3>
                  <p className="text-orange-100">
                    Experience seamless collaboration with technology that just works, every time.
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#f24b00] rounded-full opacity-30 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Showcase */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#16213d] mb-6">
              Solutions for
              <span className="text-[#f24b00]"> Every Meeting Space</span>
            </h2>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 transform ${
                    currentSlide === index ? "scale-105 ring-4 ring-[#f24b00] ring-opacity-50" : "hover:scale-102"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-br from-[#f24b00] to-[#e54600] flex items-center justify-center">
                      <div className="text-6xl">
                        {index === 0 ? "🎯" : index === 1 ? "💡" : "📚"}
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#f24b00] text-white text-sm font-semibold rounded-full">
                      {solution.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#16213d] mb-3">{solution.title}</h3>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-[#16213d]">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {solution.applications.map((app, appIndex) => (
                          <div key={appIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[#f24b00] rounded-full"></div>
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
                    currentSlide === index ? "bg-[#f24b00] w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Integration Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-block px-4 py-2 bg-[#f24b00] text-white rounded-full text-sm font-semibold mb-4">
                  Universal Compatibility
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-6">
                  Works With Your
                  <span className="text-[#f24b00]"> Existing Tools</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our solutions integrate seamlessly with the platforms your team already uses. No need to change workflows or learn new systems.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: "💼", title: "Microsoft Teams", desc: "Native Teams Rooms certification" },
                  { icon: "🔵", title: "Zoom Rooms", desc: "Fully optimized for Zoom platforms" },
                  { icon: "🎯", title: "Google Meet", desc: "Certified Google Meet hardware" },
                  { icon: "💻", title: "Cisco Webex", desc: "Enterprise Webex integration" }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-bold text-[#16213d] mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleButtonClick}
                  className="bg-[#f24b00] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-[#e54600] transition-colors duration-300"
                >
                  Get Started
                </button>
                <button onClick={sendtoStudypage} className="border-2 border-[#f24b00] text-[#f24b00] px-8 py-3 rounded-2xl font-semibold hover:bg-[#f24b00] hover:text-white transition-colors duration-300">
                  View Case Studies
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform">
                    <div className="text-4xl mb-2">📹</div>
                    <div className="text-sm font-semibold text-gray-700">Teams</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform">
                    <div className="text-4xl mb-2">🔵</div>
                    <div className="text-sm font-semibold text-gray-700">Zoom</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform">
                    <div className="text-4xl mb-2">🎯</div>
                    <div className="text-sm font-semibold text-gray-700">Meet</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform">
                    <div className="text-4xl mb-2">💻</div>
                    <div className="text-sm font-semibold text-gray-700">Webex</div>
                  </div>
                </div>
                <div className="text-center text-gray-600 text-sm font-medium">
                  One system. All platforms.
                </div>
              </div>
              
              <div className="absolute top-8 right-8 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">Connected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Specifications */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-12">
            Enterprise-Grade Technology
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { name: "4K Cameras", desc: "Ultra HD clarity" },
              { name: "AI Framing", desc: "Auto speaker tracking" },
              { name: "Spatial Audio", desc: "Immersive sound" },
              { name: "Easy Control", desc: "Touch panels" }
            ].map((tech, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-2xl hover:bg-[#f24b00] hover:text-white transition-all duration-300 group">
                <div className="text-2xl font-bold mb-2 text-[#f24b00] group-hover:text-white">{tech.name}</div>
                <div className="text-gray-600 group-hover:text-orange-100">{tech.desc}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#f24b00] to-[#e54600] text-white p-12 rounded-3xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Upgrade Your Meeting Rooms?
            </h3>
            <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
              Let Proscene design and install a hybrid meeting solution that makes collaboration effortless for your teams.
            </p>
            <button 
              onClick={handleButtonClick}
              className="bg-white text-[#f24b00] px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
      
      <BookDemo />
    </div>
    
  );
}

export default HybridMeetings;