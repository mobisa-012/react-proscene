import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function MicrosoftModernSolutions() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/bookDemo");
  };

  const [activeTab, setActiveTab] = useState("modernWork");

  const solutions = {
    modernWork: {
      name: "Microsoft Modern Work",
      tagline: "Empowering Your Workforce with the Modern Microsoft Cloud",
      icon: "🏢",
      color: "from-[#f24b00] to-[#e54600]",
      features: [
        { icon: "💬", title: "Microsoft Teams", desc: "Unified communication and collaboration platform" },
        { icon: "📧", title: "Outlook", desc: "Enterprise-grade email and calendar management" },
        { icon: "☁️", title: "OneDrive", desc: "1TB of secure cloud storage per user" },
        { icon: "📄", title: "Office Suite", desc: "Real-time document collaboration across web and mobile" },
        { icon: "🌐", title: "SharePoint", desc: "Beautiful intranet experiences and document management" },
        { icon: "🔄", title: "Co-authoring", desc: "Real-time collaboration on documents across devices" }
      ]
    },
    security: {
      name: "Security & Compliance",
      tagline: "Secure, Intelligent, and Always Connected",
      icon: "🛡️",
      color: "from-[#f24b00] to-[#e54600]",
      features: [
        { icon: "🔒", title: "Microsoft Defender", desc: "Advanced Threat Protection with Safe Links & Attachments" },
        { icon: "🤖", title: "Endpoint Detection", desc: "EDR with AI-driven insights and response" },
        { icon: "🔑", title: "Conditional Access", desc: "Multi-factor authentication and access controls" },
        { icon: "📱", title: "Microsoft Intune", desc: "Device management and compliance enforcement" },
        { icon: "🛡️", title: "Business Premium", desc: "Advanced productivity tools with enterprise-grade protection" },
        { icon: "🌍", title: "Secure Access", desc: "Protected access across platforms and locations" }
      ]
    },
    aiCopilot: {
      name: "AI & Copilot",
      tagline: "Unleash the Power of AI with Microsoft Copilot",
      icon: "🤖",
      color: "from-[#f24b00] to-[#e54600]",
      features: [
        { icon: "💡", title: "Copilot for Microsoft 365", desc: "Intelligent productivity assistant built into Office apps" },
        { icon: "⚡", title: "Copilot Studio", desc: "Automate business processes and workflows" },
        { icon: "📊", title: "Microsoft Fabric & Azure AI", desc: "Data-driven decision making capabilities" },
        { icon: "📝", title: "Content Creation", desc: "Draft proposals, analyze reports, summarize meetings" },
        { icon: "🔍", title: "Workflow Automation", desc: "Turn words into powerful workflows and insights" },
        { icon: "🎯", title: "AI Transformation", desc: "Bring AI to every employee in your organization" }
      ]
    },
    businessApps: {
      name: "Business Applications",
      tagline: "Reimagine Business Operations with Dynamics 365",
      icon: "📈",
      color: "from-[#f24b00] to-[#e54600]",
      features: [
        { icon: "🔄", title: "Dynamics 365 Business Central", desc: "AI-powered ERP solution for business management" },
        { icon: "📊", title: "Power BI", desc: "Data visualization and business analytics" },
        { icon: "🌐", title: "Microsoft Fabric", desc: "Unified data analytics platform" },
        { icon: "🤝", title: "Integration", desc: "Seamless connection with Outlook, Excel, and Teams" },
        { icon: "⚡", title: "Automation", desc: "AI-assisted insights and reporting across operations" },
        { icon: "🏢", title: "Global Trust", desc: "Trusted by over 40,000 businesses worldwide" }
      ]
    }
  };

  const pricingTiers = [
    {
      tier: "Business Basic",
      solution: "Web-based Office apps, email, Teams & 1TB OneDrive",
      perfectFor: "Startups & Small Teams",
      features: ["Web-based Office apps", "Business email", "Microsoft Teams", "1TB OneDrive storage"]
    },
    {
      tier: "Business Standard",
      solution: "Full desktop apps + collaboration tools",
      perfectFor: "Growing SMEs",
      features: ["Full desktop Office apps", "All Basic features", "Advanced collaboration", "Business analytics"]
    },
    {
      tier: "Business Premium",
      solution: "Everything in Standard + advanced security & device management",
      perfectFor: "Enterprises & Regulated Sectors",
      features: ["All Standard features", "Advanced security", "Device management", "Compliance tools"]
    }
  ];

  const whyProscene = [
    {
      icon: "🏆",
      title: "Certified Microsoft Partner",
      description: "Decades of AV and IT integration expertise ensuring secure, seamless digital transformation"
    },
    {
      icon: "🔄",
      title: "End-to-End Services",
      description: "Licensing, migration, implementation, integration, training, and ongoing support"
    },
    {
      icon: "🛡️",
      title: "Security First",
      description: "Security hardening and compliance optimization for enterprise-grade protection"
    },
    {
      icon: "🎯",
      title: "Future-Ready Solutions",
      description: "Modern Work solutions designed to scale and adapt with your business needs"
    }
  ];

  const current = solutions[activeTab];

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
              Microsoft Modern Work Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Microsoft Modern Work
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Empowering Your Workforce with the Modern Microsoft Cloud
            </p>
            <p className="text-lg text-orange-200 max-w-4xl mx-auto">
              At Proscene Systems Limited, we help organizations reimagine how work gets done through 
              Microsoft's Modern Work solutions — connecting people, systems, and ideas securely across 
              devices and locations.
            </p>

            {/* Solution Tabs */}
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              {Object.entries(solutions).map(([key, solution]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                    activeTab === key
                      ? "bg-white text-[#f24b00] shadow-xl scale-105"
                      : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
                  }`}
                >
                  {solution.icon} {solution.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-6">
              {current.tagline}
            </h2>
            <div className="prose prose-lg max-w-4xl mx-auto text-gray-600 text-left">
              {activeTab === "modernWork" && (
                <>
                  <p className="text-xl mb-6 text-center">
                    Today's workforce is distributed, mobile, and dynamic. Microsoft 365 brings together Teams, 
                    Outlook, Word, Excel, PowerPoint, and OneDrive — empowering seamless communication and 
                    teamwork anywhere, anytime.
                  </p>
                  <p className="text-xl text-center">
                    Whether you're hosting hybrid meetings, co-authoring documents in real-time, or managing projects 
                    across borders, our Modern Work solutions transform how your team collaborates and delivers results.
                  </p>
                </>
              )}
              {activeTab === "security" && (
                <>
                  <p className="text-xl mb-6">
                    Modern work requires modern security. Proscene integrates Microsoft 365 Business Premium, 
                    combining advanced productivity tools with enterprise-grade protection.
                  </p>
                  <p className="text-xl">
                    Microsoft Defender for Business and Intune safeguard your users, data, and devices — automatically 
                    detecting threats, enforcing policies, and providing secure access across platforms.
                  </p>
                </>
              )}
              {activeTab === "aiCopilot" && (
                <>
                  <p className="text-xl mb-6">
                    Bring AI to every employee with Microsoft 365 Copilot — your everyday AI assistant built right into 
                    Word, Excel, PowerPoint, and Teams.
                  </p>
                  <p className="text-xl">
                    From drafting proposals to analyzing reports or summarizing meetings, Copilot turns words into 
                    powerful workflows and insights.
                  </p>
                </>
              )}
              {activeTab === "businessApps" && (
                <>
                  <p className="text-xl mb-6">
                    Seamlessly connect finance, sales, service, and operations with Dynamics 365 Business Central — an 
                    AI-powered ERP solution trusted by over 40,000 businesses globally.
                  </p>
                  <p className="text-xl">
                    Harness the power of Power BI and Microsoft Fabric to unify your data, visualize performance, and 
                    make informed decisions. From dashboards to real-time analytics, we help you move from data to 
                    discovery — all secured by Microsoft Cloud.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {current.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#16213d] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Tiers Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#f24b00] to-[#e54600] rounded-full text-white text-sm font-medium mb-4">
              Modern Workplace Stack
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-6">
              Choose Your Microsoft 365 Plan
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each plan is designed to help your organization adapt faster, work smarter, and perform better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-[#f24b00] to-[#e54600] p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{tier.tier}</h3>
                  <p className="text-orange-100 mb-4">{tier.solution}</p>
                  <div className="inline-block px-4 py-1 bg-white bg-opacity-20 rounded-full text-sm">
                    Perfect for: {tier.perfectFor}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#f24b00] rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={handleButtonClick}
                    className="w-full mt-8 bg-[#f24b00] text-white py-3 rounded-xl font-bold hover:bg-[#e54600] transition-colors"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Proscene Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-6">
              Why Partner with Proscene Systems
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As a certified Microsoft partner, Proscene Systems Limited brings decades of AV and IT integration 
              expertise — ensuring your digital transformation journey is secure, seamless, and future-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {whyProscene.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-6 text-center hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#16213d] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Services Offered */}
          <div className="bg-gradient-to-r from-[#f24b00] to-[#e54600] rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Modern Work Offering</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { icon: "📋", title: "Licensing & Migration", desc: "Seamless transition to Microsoft 365" },
                { icon: "⚡", title: "Implementation", desc: "Integration with existing systems" },
                { icon: "🎓", title: "User Training", desc: "Onboarding and ongoing support" },
                { icon: "🛡️", title: "Security Optimization", desc: "Hardening and compliance" }
              ].map((service, index) => (
                <div key={index} className="bg-white bg-opacity-10 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <h4 className="font-bold mb-2">{service.title}</h4>
                  <p className="text-orange-100 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-4">
              Transform Your Workplace
            </h2>
            <p className="text-lg text-gray-600">
              Adapt faster. Work smarter. Perform better — with the Microsoft Cloud and Proscene.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: "🚀", 
                title: "Empower Productivity", 
                desc: "Enhance collaboration with next-generation tools for modern workforce needs",
                features: ["Seamless communication", "Real-time collaboration", "Anywhere access"]
              },
              { 
                icon: "🛡️", 
                title: "Enterprise Security", 
                desc: "Advanced protection with AI-driven threat detection and compliance",
                features: ["Advanced threat protection", "Device management", "Data loss prevention"]
              },
              { 
                icon: "🤖", 
                title: "AI Intelligence", 
                desc: "Transform workflows with Microsoft Copilot and AI-powered insights",
                features: ["AI assistance", "Workflow automation", "Data-driven decisions"]
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#16213d] mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <div className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#f24b00] rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#f24b00] to-[#e54600] text-white p-12 rounded-3xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Let's Modernize Your Workplace
            </h3>
            <p className="text-orange-100 mb-6 text-lg">
              Empower your teams with next-generation tools for collaboration, security, and intelligence.
            </p>
            <p className="text-orange-200 mb-8 text-xl font-semibold">
              Talk to our Microsoft Solutions team today and discover how we can transform your work experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleButtonClick}
                className="bg-white text-[#f24b00] px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Modern Work Journey
              </button>
              <button 
                onClick={() => navigate("/contact")}
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-[#f24b00] transition-all duration-300"
              >
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MicrosoftModernSolutions;