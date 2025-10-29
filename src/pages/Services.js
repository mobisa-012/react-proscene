import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function ServicesPage() {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: "professional-services",
      icon: "🎯",
      title: "Professional Services",
      shortDesc: "Collaboration program design and system engineering",
      fullDesc: "We take the time to understand the way your organization works and recommend a system design and solutions to benefit your teams. PMP and industry-certified engineers lead your project from design through training.",
      features: [
        "Collaboration program design",
        "System engineering",
        "Implementation services",
        "Training and adoption",
        "Site visits, demos and PoCs",
        "Consultancy and system/solution design"
      ],
      benefits: [
        "Tailored solutions for your workflow",
        "Expert project management",
        "Comprehensive training programs",
        "Seamless implementation"
      ]
    },
    {
      id: "meeting-spaces",
      icon: "🏢",
      title: "Meeting Spaces",
      shortDesc: "Boardrooms, huddle rooms, and conference facilities",
      fullDesc: "Transform your meeting environments with integrated AV solutions. From intimate huddle spaces to executive boardrooms, we design and deploy technology that enhances collaboration and productivity.",
      features: [
        "Executive boardrooms",
        "Huddle rooms",
        "Conference rooms",
        "Video conferencing solutions",
        "Wireless presentation systems",
        "Room control systems"
      ],
      benefits: [
        "200+ meeting spaces produced each year",
        "One-touch operation",
        "Seamless video collaboration",
        "Enhanced productivity"
      ]
    },
    {
      id: "auditoriums",
      icon: "🎭",
      title: "Auditoriums & Large Venues",
      shortDesc: "Complete AV systems for auditoriums and event spaces",
      fullDesc: "Design and install comprehensive audio-visual systems for auditoriums, lecture halls, and large venues. From LED walls to professional sound reinforcement, we deliver immersive experiences.",
      features: [
        "LED video walls",
        "Professional sound systems (RCF, etc.)",
        "Panasonic PTZ cameras",
        "Delegate conference systems",
        "Stage lighting integration",
        "Broadcast quality production"
      ],
      benefits: [
        "Crystal-clear audio coverage",
        "Stunning visual displays",
        "Scalable solutions",
        "Professional event production"
      ]
    },
    {
      id: "video-conferencing",
      icon: "📹",
      title: "Video Collaboration & Unified Communications",
      shortDesc: "Connect teams across any distance",
      fullDesc: "Deploy enterprise-grade video collaboration and unified communications technology. Enable real-time collaboration regardless of location or device, with seamless integration into your existing infrastructure.",
      features: [
        "Video conferencing systems",
        "Unified communications platforms",
        "Teams, Zoom, WebEx integration",
        "AV distribution over network",
        "Multi-platform compatibility",
        "Cloud and on-premise solutions"
      ],
      benefits: [
        "Work together in real-time",
        "Location-independent collaboration",
        "Exceptional outcomes",
        "Enhanced team productivity"
      ]
    },
    {
      id: "digital-signage",
      icon: "📺",
      title: "Digital Media & Signage",
      shortDesc: "Engage audiences with dynamic content",
      fullDesc: "Deploy stunning digital signage solutions that captivate your audience. From corporate lobbies to retail spaces, deliver the right message at the right time with centrally managed displays.",
      features: [
        "Video wall installations (2x2, 3x3, custom)",
        "Interactive displays",
        "Content management systems",
        "IPTV and MATV solutions",
        "Wayfinding systems",
        "Emergency alert integration"
      ],
      benefits: [
        "Real-time content updates",
        "Enhanced brand visibility",
        "Improved customer engagement",
        "Centralized control"
      ]
    },
    {
      id: "support-field-services",
      icon: "🛠️",
      title: "Support & Field Services",
      shortDesc: "24/7 support and maintenance",
      fullDesc: "Because we're a certified service provider for all major AV and UC vendors, our Customer Care service ensures the reliability of your systems and minimizes downtime.",
      features: [
        "24/7 dedicated AV contact centre",
        "Warranty services",
        "Preventative maintenance",
        "Break/fix support",
        "Attentive helpdesk",
        "Field support for new & existing infrastructure"
      ],
      benefits: [
        "Minimized system downtime",
        "1 year workmanship free support",
        "Quick issue resolution",
        "Peace of mind"
      ]
    },
    {
      id: "managed-services",
      icon: "⚙️",
      title: "Managed Services",
      shortDesc: "Proactive monitoring and management",
      fullDesc: "A positive end-user experience depends on behind-the-scenes support. Our dedicated technicians work around the clock to monitor and manage the AV and video collaboration devices on your network.",
      features: [
        "Proactive issue resolution",
        "Resource scheduling",
        "Video conference production",
        "Hosted infrastructure services",
        "Customer dashboard for monitoring",
        "Firmware & software upgrades"
      ],
      benefits: [
        "Around-the-clock monitoring",
        "Predictive maintenance",
        "Enhanced system reliability",
        "Comprehensive reporting"
      ]
    },
    {
      id: "religious-organizations",
      icon: "⛪",
      title: "Religious Organization AV",
      shortDesc: "Worship spaces and multi-purpose facilities",
      fullDesc: "Specialized audio-visual solutions for houses of worship. From sound reinforcement to live streaming, we help you engage your congregation with professional technology.",
      features: [
        "Worship audio systems",
        "Video projection and displays",
        "Live streaming solutions",
        "Recording systems",
        "Stage lighting",
        "Multi-room audio distribution"
      ],
      benefits: [
        "Enhanced worship experience",
        "Professional broadcast quality",
        "Reliable performance",
        "Easy operation for volunteers"
      ]
    },
    {
      id: "hospitality-iptv",
      icon: "🏨",
      title: "Hospitality Industry IPTV/MATV",
      shortDesc: "Entertainment systems for hotels and resorts",
      fullDesc: "Deploy comprehensive IPTV and MATV solutions for hospitality environments. Deliver exceptional guest experiences with reliable, high-quality entertainment systems.",
      features: [
        "IPTV systems",
        "MATV distribution",
        "Interactive guest services",
        "Digital signage integration",
        "Control systems",
        "Content management"
      ],
      benefits: [
        "Enhanced guest satisfaction",
        "Scalable infrastructure",
        "Easy content management",
        "Revenue opportunities"
      ]
    }
  ];

  const sectors = [
    {
      name: "Corporate Sector",
      icon: "🏢",
      description: "Boardrooms, meeting spaces, and collaboration hubs for businesses"
    },
    {
      name: "Education Sector",
      icon: "🎓",
      description: "Classrooms, lecture halls, and learning environments"
    },
    {
      name: "Public Sector",
      icon: "🏛️",
      description: "Government departments and public facilities"
    },
    {
      name: "Health Sector",
      icon: "🏥",
      description: "Healthcare facilities and telemedicine solutions"
    },
    {
      name: "Legal Collaboration",
      icon: "⚖️",
      description: "Courtrooms and legal collaboration spaces"
    },
    {
      name: "Religious Organizations",
      icon: "⛪",
      description: "Houses of worship and faith-based facilities"
    }
  ];

  const engagementOptions = [
    {
      title: "On-site",
      icon: "🏗️",
      description: "Direct installation and support at your location"
    },
    {
      title: "Remote",
      icon: "💻",
      description: "Remote monitoring, support, and troubleshooting"
    },
    {
      title: "Cloud",
      icon: "☁️",
      description: "Cloud-based management and services"
    }
  ];

  const serviceApproach = [
    {
      step: "01",
      title: "Understanding Your Needs",
      description: "We begin by comprehending your unique challenges and workflow requirements.",
      icon: "🔍"
    },
    {
      step: "02",
      title: "Planning & Building",
      description: "Design and engineer solutions tailored to meet your specific needs.",
      icon: "📐"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Professional installation with comprehensive training and commissioning.",
      icon: "⚙️"
    },
    {
      step: "04",
      title: "Support & Management",
      description: "Reliable tech support and managed services for ongoing success.",
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#ff4e00] to-[#e64500] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium">
              Comprehensive AV Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Digitally Transforming How We
              <span className="block text-[#16213d]">Work, Learn, and Live</span>
            </h1>
            <p className="text-xl text-orange-100 leading-relaxed">
              East Africa's leading video communications partner providing integrated and professional Audio Visual solutions designed to help clients collaborate and communicate effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                onClick={() => navigate("/bookDemo")}
                className="bg-white text-[#ff4e00] px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Schedule Consultation
              </button>
              <button
                onClick={() => document.getElementById('services-grid').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white hover:text-[#ff4e00] transition-colors duration-300"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Statement */}
      <div className="py-12 px-4 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#16213d] mb-4">
            East Africa's Most Trusted AV, UC and Video Collaboration Provider
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            We earn that trust through diligence in everything we do
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            {[
              { icon: "🔍", text: "Understanding your needs" },
              { icon: "📐", text: "Planning solutions" },
              { icon: "⚙️", text: "Building & implementing" },
              { icon: "🛡️", text: "Reliable support & managed services" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-4xl mb-2">{item.icon}</div>
                <p className="text-gray-700 text-sm text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div id="services-grid" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Flexible service offerings from room design to service program design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                onClick={() => setActiveService(activeService === index ? null : index)}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#ff4e00] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.shortDesc}
                </p>
                
                {activeService === index && (
                  <div className="space-y-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {service.fullDesc}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-[#ff4e00] rounded-full"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center text-[#ff4e00] font-semibold mt-4 group-hover:translate-x-2 transition-transform">
                  {activeService === index ? "Show Less" : "Learn More"}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activeService === index ? "M5 15l7-7 7 7" : "M9 5l7 7-7 7"} />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Approach */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-4">
              Our Service Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Service is at the forefront of our system integration model
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceApproach.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#ff4e00] to-[#e64500] rounded-full flex items-center justify-center mx-auto text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#16213d] rounded-full flex items-center justify-center text-sm font-bold text-white shadow-md">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#16213d] mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Engagement Options */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-4">
              Flexible Engagement Options
            </h2>
            <p className="text-lg text-gray-600">
              Choose the service model that works best for your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-5xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-bold text-[#16213d] mb-3">{option.title}</h3>
                <p className="text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sectors We Serve */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-4">
              Sectors We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by organizations across East Africa's diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-3">{sector.icon}</div>
                <h3 className="font-bold text-[#16213d] mb-2">{sector.name}</h3>
                <p className="text-sm text-gray-600">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-[#ff4e00] to-[#e64500] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "25+", label: "Employees" },
              { number: "3000+", label: "Projects Completed" },
              { number: "7", label: "Countries Served" },
              { number: "200", label: "Meeting Spaces/Year" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-orange-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Value Added Support */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-4">
              Value Added Support
            </h2>
            <p className="text-lg text-gray-600">
              Managing your AV estate with comprehensive service offerings
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: "🏢", title: "Site Visits, Demos and PoCs" },
              { icon: "📋", title: "Consultancy and System Design" },
              { icon: "☎️", title: "Attentive Helpdesk Support" },
              { icon: "🔧", title: "Field Support for AV Infrastructure" },
              { icon: "🛡️", title: "Maintenance & Warranty" },
              { icon: "🔄", title: "Firmware & Software Upgrades" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-[#16213d] text-sm">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-6">
            Ready to Transform Your Workspace?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let Proscene serve as your trusted partner in digital workplace transformation. Our aim is to ignite success and generate tangible impact for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/bookDemo")}
              className="bg-[#ff4e00] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-[#16213d] transition-colors duration-300 shadow-lg"
            >
              Schedule Consultation
            </button>
            <button
              onClick={() => navigate("/case-studies")}
              className="border-2 border-[#ff4e00] text-[#ff4e00] px-8 py-3 rounded-2xl font-semibold hover:bg-[#ff4e00] hover:text-white transition-colors duration-300"
            >
              View Our Projects
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ServicesPage;