import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

function PrivacyPolicy() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you request a consultation, demo, or AV installation services, we collect your name, email address, phone number, company name, job title, and project requirements. For service requests, we may also collect building/venue information, technical specifications, and budget details to provide accurate quotes and solutions."
        },
        {
          subtitle: "Technical Information",
          text: "We may collect information about your existing AV infrastructure, equipment specifications, room dimensions, and technical requirements to design and implement optimal audio-visual solutions. This may include site surveys, network details, and compatibility assessments."
        },
        {
          subtitle: "Usage and Analytics",
          text: "We automatically collect information about your device, browser type, IP address, pages visited, and interaction with our website. This helps us improve our online experience and understand which AV solutions and services interest our visitors most."
        },
        {
          subtitle: "Cookies and Tracking",
          text: "We use cookies to remember your preferences, analyze website traffic, and provide personalized content about our AV solutions. You can control cookie settings through your browser preferences."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        {
          text: "We use your information to provide AV consultation services, design custom audio-visual solutions, prepare quotes and proposals, schedule installations and maintenance, provide technical support and training, send service updates and equipment maintenance reminders, share information about new AV technologies and solutions, and improve our products and services based on your feedback and usage patterns."
        }
      ]
    },
    {
      title: "Information Sharing and Disclosure",
      content: [
        {
          subtitle: "Service Partners",
          text: "We may share your information with trusted AV equipment manufacturers, installation subcontractors, and technical support partners who assist in delivering our services. All partners are bound by confidentiality agreements."
        },
        {
          subtitle: "What We Don't Share",
          text: "We do not sell, trade, or rent your personal information or project details to third parties. Your AV system specifications, venue layouts, and proprietary information remain confidential and are only shared with parties directly involved in your project delivery."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose information if required by law, to protect our rights and safety, or to comply with legal processes."
        }
      ]
    },
    {
      title: "Data Security",
      content: [
        {
          text: "We implement industry-standard security measures to protect your personal and project information, including encrypted data transmission, secure servers, access controls and authentication, regular security audits, and secure backup systems. Given the technical nature of AV projects, we take special care to protect sensitive information such as network configurations, security system details, and facility layouts."
        }
      ]
    },
    {
      title: "Project Documentation and Records",
      content: [
        {
          text: "We maintain records of AV installations, system configurations, equipment warranties, and service history to provide ongoing support and maintenance. This documentation includes system diagrams, user manuals, training materials, and maintenance schedules. These records are kept securely and are accessible to you upon request for the duration of your service agreement and warranty periods."
        }
      ]
    },
    {
      title: "Your Rights and Choices",
      content: [
        {
          text: "You have the right to access your personal and project information, update or correct your information, request deletion of your data (subject to legal and contractual obligations), opt out of marketing communications, request copies of your AV system documentation, and withdraw consent for data processing where applicable. To exercise these rights, please contact us using the information provided below."
        }
      ]
    },
    {
      title: "Client Site Visits and Media",
      content: [
        {
          text: "During site surveys, installations, and service visits, our technicians may take photographs or videos of your venue and equipment for documentation, troubleshooting, and training purposes. We will seek your permission before using any site images for marketing or portfolio purposes. All site documentation is stored securely and used solely for service delivery unless you provide explicit consent for other uses."
        }
      ]
    },
    {
      title: "Third-Party Equipment and Software",
      content: [
        {
          text: "Our AV solutions may include equipment and software from third-party manufacturers. These products may have their own privacy policies and data collection practices. We recommend reviewing the privacy policies of manufacturers for equipment that connects to the internet or cloud services, such as video conferencing systems, digital signage platforms, or control systems."
        }
      ]
    },
    {
      title: "Data Retention",
      content: [
        {
          text: "We retain your information for as long as necessary to provide services, fulfill contractual obligations, maintain equipment warranties, comply with legal requirements, and resolve disputes. Project documentation and service records are typically retained for 7 years or the duration of equipment warranties, whichever is longer."
        }
      ]
    },
    {
      title: "Children's Privacy",
      content: [
        {
          text: "Our AV services are designed for businesses, educational institutions, and organizations. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us immediately."
        }
      ]
    },
    {
      title: "International Data Transfers",
      content: [
        {
          text: "Your information may be transferred to and processed in countries where we, our service partners, or equipment manufacturers operate. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws."
        }
      ]
    },
    {
      title: "Changes to This Privacy Policy",
      content: [
        {
          text: "We may update this Privacy Policy to reflect changes in our practices, services, or legal requirements. We will notify you of significant changes by posting the updated policy on our website and updating the 'Last Updated' date. For active service agreements, we may also notify you directly via email."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#3b37e6] to-[#5b51ff] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-300 rounded-full opacity-15 animate-bounce"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24 mt-16">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your privacy and the security of your AV project information matter to us. This policy explains how we collect, use, and protect your data throughout our service delivery.
            </p>
            <div className="text-sm text-blue-200">
              Last Updated: October 14, 2025
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="mb-12 p-8 bg-blue-50 rounded-2xl border-l-4 border-[#3b37e6]">
          <p className="text-lg text-gray-700 leading-relaxed">
            This Privacy Policy describes how we, as an audio-visual solutions provider, collect, use, disclose, and protect your information when you engage our services for AV consultation, installation, maintenance, or support. By using our services or website, you agree to the collection and use of information in accordance with this policy.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="scroll-mt-24">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#3b37e6] text-white rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#001e62]">
                  {section.title}
                </h2>
              </div>
              
              <div className="ml-16 space-y-6">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    {item.subtitle && (
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {item.subtitle}
                      </h3>
                    )}
                    <p className="text-gray-600 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
          <h2 className="text-2xl font-bold text-[#001e62] mb-4">
            Contact Us About Privacy
          </h2>
          <p className="text-gray-700 mb-6">
            If you have questions about this Privacy Policy, your data, or our AV project security practices, please contact us:
          </p>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-center">
              <span className="font-semibold w-24">Email:</span>
              <a href="mailto:privacy@yourcompany.com" className="text-[#3b37e6] hover:underline">
                info@proscene.co.ke
              </a>
            </div>
            <div className="flex items-center">
              <span className="font-semibold w-24">Phone:</span>
              <a href="tel:+1234567890" className="text-[#3b37e6] hover:underline">
                +254 713 761269
              </a>
            </div>
            {/* <div className="flex items-start">
              <span className="font-semibold w-24">Address: </span>
              <span>info@proscene.co.ke</span>
            </div> */}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 p-6 bg-gray-50 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Related Policies</h3>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => navigate('/terms')}
              className="text-[#3b37e6] hover:underline font-medium"
            >
              Terms of Service →
            </button>
            {/* <button 
              onClick={() => navigate('/cookie-policy')}
              className="text-[#3b37e6] hover:underline font-medium"
            >
              Cookie Policy →
            </button>
            <button 
              onClick={() => navigate('/service-agreement')}
              className="text-[#3b37e6] hover:underline font-medium"
            >
              Service Agreement →
            </button> */}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#e0f2f7] via-[#f0f9ff] to-[#e0f2f7] py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Your Privacy & Project Security Matter
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We're committed to protecting your information and maintaining the confidentiality of your AV projects. Questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-[#3b37e6] text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </button>
            <button 
              onClick={() => navigate('/')}
              className="border-2 border-[#3b37e6] text-[#3b37e6] px-8 py-4 rounded-2xl font-bold hover:bg-[#3b37e6] hover:text-white transition-all duration-300"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PrivacyPolicy;