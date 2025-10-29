import React, { useState, useEffect } from "react";
import BookDemo from "../pages/BookDemoPage";
import { useNavigate } from "react-router-dom";

function MicrosoftModernSolutions() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/bookDemo");
  };

  const [activeFeature, setActiveFeature] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("microsoft365");

  const technologies = {
    microsoft365: {
      name: "Microsoft 365",
      tagline: "Modern Workplace Platform",
      icon: "🏢",
      color: "from-[#ff4e00] to-[#e54600]",
      features: [
        { icon: "📧", title: "Office Apps", desc: "Word, Excel, PowerPoint, Outlook with cloud integration" },
        { icon: "☁️", title: "Cloud Storage", desc: "OneDrive with 1TB storage per user" },
        { icon: "🔄", title: "Real-Time Collaboration", desc: "Co-author documents simultaneously with Teams integration" },
        { icon: "🛡️", title: "Enterprise Security", desc: "Advanced threat protection and data loss prevention" },
        { icon: "📊", title: "Business Analytics", desc: "Power BI integration for data insights" },
        { icon: "🌐", title: "Anywhere Access", desc: "Access files and apps from any device, anywhere" }
      ],
      benefits: [
        "Increase team productivity by 30% with seamless collaboration",
        "Reduce IT costs with cloud-based management",
        "Enhance security with enterprise-grade protection",
        "Scale effortlessly as your business grows"
      ]
    },
    azureCopilot: {
      name: "Azure Copilot",
      tagline: "AI-Powered Business Transformation",
      icon: "🤖",
      color: "from-[#ff4e00] to-[#e54600]",
      features: [
        { icon: "💡", title: "AI Assistance", desc: "Intelligent suggestions and automation across Microsoft 365" },
        { icon: "📝", title: "Content Creation", desc: "Generate documents, emails, and presentations with AI" },
        { icon: "🔍", title: "Data Insights", desc: "Analyze and visualize data with natural language queries" },
        { icon: "⚡", title: "Workflow Automation", desc: "Automate repetitive tasks and processes" },
        { icon: "🎯", title: "Personalized Experiences", desc: "AI-driven personalization for each user" },
        { icon: "🛡️", title: "Security AI", desc: "AI-powered threat detection and security recommendations" }
      ],
      benefits: [
        "Accelerate content creation and decision-making",
        "Reduce manual tasks with intelligent automation",
        "Gain deeper insights from your business data",
        "Enhance security with AI-driven protection"
      ]
    }
  };

  const applications = [
    {
      category: "Enterprise Businesses",
      title: "Digital Workplace Transformation",
      description: "Complete Microsoft 365 implementation with Azure Copilot for large-scale organizations.",
      features: ["Enterprise security", "AI integration", "Global scalability", "Compliance management"],
      icon: "🏢"
    },
    {
      category: "Small & Medium Business",
      title: "Productivity Suite",
      description: "Microsoft 365 solutions tailored for growing businesses with AI capabilities.",
      features: ["Cost-effective plans", "Easy deployment", "Team collaboration", "Business analytics"],
      icon: "📈"
    },
    {
      category: "Education",
      title: "Learning Platform",
      description: "Microsoft 365 for Education with AI-enhanced teaching and learning tools.",
      features: ["Classroom tools", "Student management", "Parent communication", "Learning analytics"],
      icon: "🎓"
    }
  ];

  const products = [
    { 
      name: "Microsoft 365 Business", 
      icon: "💼", 
      color: "from-[#ff4e00] to-[#e54600]",
      specs: ["Office apps", "1TB cloud storage", "Business email", "Teams integration"]
    },
    { 
      name: "Enterprise Plans", 
      icon: "🏛️", 
      color: "from-[#ff4e00] to-[#e54600]",
      specs: ["Advanced security", "Power BI", "Azure services", "24/7 support"]
    },
    { 
      name: "Azure Copilot", 
      icon: "🤖", 
      color: "from-[#ff4e00] to-[#e54600]",
      specs: ["AI assistance", "Workflow automation", "Data insights", "Security AI"]
    },
    { 
      name: "Migration Services", 
      icon: "🚀", 
      color: "from-[#ff4e00] to-[#e54600]",
      specs: ["Data migration", "User training", "Setup & configuration", "Ongoing support"]
    }
  ];

  const integrations = [
    { name: "Microsoft Teams", icon: "💬", color: "from-[#ff4e00] to-[#e54600]" },
    { name: "SharePoint", icon: "📁", color: "from-[#ff4e00] to-[#e54600]" },
    { name: "Power Platform", icon: "⚡", color: "from-[#ff4e00] to-[#e54600]" },
    { name: "Azure Services", icon: "🌐", color: "from-[#ff4e00] to-[#e54600]" }
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
              Microsoft Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Microsoft Modern Workplace
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Transform your business with Microsoft 365 and Azure Copilot - the complete solution for modern, AI-powered workplace productivity.
            </p>

            {/* Technology Tabs */}
            <div className="flex justify-center gap-4 pt-8">
              <button
                onClick={() => setActiveTab("microsoft365")}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                  activeTab === "microsoft365"
                    ? "bg-white text-[#ff4e00] shadow-xl scale-105"
                    : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
                }`}
              >
                🏢 Microsoft 365
              </button>
              <button
                onClick={() => setActiveTab("azureCopilot")}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                  activeTab === "azureCopilot"
                    ? "bg-white text-[#ff4e00] shadow-xl scale-105"
                    : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
                }`}
              >
                🤖 Azure Copilot
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Digital Workplace Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#ff4e00] to-[#e54600] rounded-full text-white text-sm font-medium mb-4">
              Digital Workplace
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#16213d] mb-4">
              Modern Workplace Solutions
            </h2>
            <p className="text-2xl text-gray-600 font-light">AI-powered productivity and collaboration for the modern enterprise</p>
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
              Benefits of {current.name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {current.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#ff4e00] to-[#e54600] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Business Solutions Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#ff4e00] to-[#e54600] rounded-full text-white text-sm font-medium mb-4">
              Business Solutions
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#16213d] mb-6">
              Tailored Microsoft Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive Microsoft 365 and Azure Copilot implementations designed for your specific business needs.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {applications.map((application, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 transform ${
                    currentSlide === index ? "scale-105 ring-4 ring-[#ff4e00] ring-opacity-50" : "hover:scale-102"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-br from-[#ff4e00] to-[#e54600] flex items-center justify-center">
                      <div className="text-6xl">{application.icon}</div>
                    </div>
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#ff4e00] text-white text-sm font-semibold rounded-full">
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
                            <div className="w-2 h-2 bg-[#ff4e00] rounded-full"></div>
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
                    currentSlide === index ? "bg-[#ff4e00] w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products & Services Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#ff4e00] to-[#e54600] rounded-full text-white text-sm font-medium mb-4">
              Products & Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-4">
              Complete Microsoft Ecosystem
            </h2>
            <p className="text-lg text-gray-600">
              End-to-end Microsoft solutions with expert implementation and support services.
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
            <h3 className="text-2xl font-bold text-[#16213d] mb-8 text-center">
              Microsoft Ecosystem Integration
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

          {/* Implementation Process */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-[#16213d] mb-6 text-center">
              Our Implementation Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1", icon: "🔍", title: "Assessment", desc: "Analyze your current setup and business needs" },
                { step: "2", icon: "📋", title: "Planning", desc: "Design tailored Microsoft solution architecture" },
                { step: "3", icon: "🚀", title: "Deployment", desc: "Implement and configure Microsoft 365 & Copilot" },
                { step: "4", icon: "🎓", title: "Training & Support", desc: "Train users and provide ongoing support" }
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
      </div>

      {/* Benefits Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-4">
              The Proscene Microsoft Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "👨‍💼", title: "Microsoft Gold Partner", desc: "Certified expertise in Microsoft 365 and Azure solutions" },
              { icon: "🔧", title: "Expert Implementation", desc: "Professional deployment and configuration services" },
              { icon: "🛡️", title: "Comprehensive Support", desc: "Training, maintenance, and 24/7 technical support" }
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
          <div className="bg-gradient-to-r from-[#ff4e00] to-[#e54600] text-white p-12 rounded-3xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Workplace with Microsoft?
            </h3>
            <p className="text-orange-100 mb-8 text-lg">
              Let's implement Microsoft 365 and Azure Copilot to revolutionize your productivity and collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleButtonClick}
                className="bg-white text-[#ff4e00] px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Microsoft Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      <BookDemo />
    </div>
  );
}

export default MicrosoftModernSolutions;