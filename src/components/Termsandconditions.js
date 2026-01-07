import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

function TermsAndConditions() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        {
          text: "By accessing our website, requesting quotes, or engaging our audio-visual services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services or website. These terms apply to all visitors, clients, and users of our AV consultation, installation, maintenance, and support services."
        }
      ]
    },
    {
      title: "Services Overview",
      content: [
        {
          subtitle: "AV Consultation and Design",
          text: "We provide professional audio-visual consultation, system design, space planning, and technology recommendations tailored to your specific requirements and budget."
        },
        {
          subtitle: "Installation Services",
          text: "Our installation services include equipment setup, system integration, cable management, mounting, programming, calibration, and commissioning of audio-visual systems."
        },
        {
          subtitle: "Maintenance and Support",
          text: "We offer ongoing maintenance contracts, technical support, troubleshooting, system updates, equipment repairs, and replacement services to ensure optimal system performance."
        },
        {
          subtitle: "Training and Documentation",
          text: "Comprehensive user training, operation manuals, system documentation, and ongoing technical assistance are provided with our installations."
        }
      ]
    },
    {
      title: "Quotes and Proposals",
      content: [
        {
          text: "All quotes and proposals are valid for 30 days from the date of issue unless otherwise specified. Prices are subject to change based on equipment availability, manufacturer pricing, and project scope modifications. Final pricing will be confirmed in writing before project commencement. Quotes are based on information provided by the client and site conditions as understood at the time of quotation. Additional costs may apply if site conditions differ from those described or if additional work is required."
        }
      ]
    },
    {
      title: "Payment Terms",
      content: [
        {
          subtitle: "Project Deposits",
          text: "A deposit of 30-50% is required upon acceptance of proposal to secure equipment and schedule installation. The deposit is non-refundable once equipment has been ordered."
        },
        {
          subtitle: "Progress Payments",
          text: "For larger projects, progress payments may be required at key milestones as outlined in the project agreement. Typical milestones include equipment delivery, installation completion, and system commissioning."
        },
        {
          subtitle: "Final Payment",
          text: "Final payment is due upon project completion and client acceptance, or within 30 days of invoice date. Late payments may incur interest charges of 1.5% per month or the maximum rate allowed by law."
        },
        {
          subtitle: "Payment Methods",
          text: "We accept bank transfers, corporate checks, and approved credit accounts. Credit card payments may incur processing fees."
        }
      ]
    },
    {
      title: "Project Timeline and Scheduling",
      content: [
        {
          text: "Project timelines are estimates based on normal working conditions and equipment availability. We will make reasonable efforts to meet agreed schedules but are not liable for delays caused by equipment availability, manufacturer delays, site access issues, client changes, unforeseen site conditions, force majeure events, or third-party delays. Any changes to project scope or specifications may affect the timeline and will be communicated promptly."
        }
      ]
    },
    {
      title: "Client Responsibilities",
      content: [
        {
          text: "Clients are responsible for providing accurate site information and specifications, ensuring site access during agreed working hours, providing adequate power and network infrastructure, obtaining necessary permits and approvals, ensuring site safety and security, protecting existing equipment during installation, and providing timely feedback and approvals. Failure to meet these responsibilities may result in project delays and additional costs."
        }
      ]
    },
    {
      title: "Equipment and Warranties",
      content: [
        {
          subtitle: "Equipment Supply",
          text: "All equipment supplied is new unless otherwise specified. We source equipment from reputable manufacturers and authorized distributors. Equipment specifications are subject to manufacturer changes and availability."
        },
        {
          subtitle: "Manufacturer Warranties",
          text: "Equipment is covered by manufacturer warranties, typically ranging from 1-5 years depending on the product. Warranty claims must be processed through us or directly with the manufacturer as specified in the warranty documentation."
        },
        {
          subtitle: "Installation Warranty",
          text: "We warrant our installation workmanship for a period of 12 months from the date of project completion. This covers defects in installation but does not cover equipment failures, damage caused by misuse, or normal wear and tear."
        },
        {
          subtitle: "Warranty Exclusions",
          text: "Warranties do not cover damage from misuse, unauthorized modifications, accidents, natural disasters, power surges, or failure to follow maintenance recommendations."
        }
      ]
    },
    {
      title: "Maintenance and Support Contracts",
      content: [
        {
          text: "Maintenance contracts include scheduled system checks, preventive maintenance, priority support response, and discounted repair rates. Contract terms, response times, and coverage levels are specified in the maintenance agreement. Contracts require annual renewal and payment in advance. Emergency support outside of contracted hours may incur additional charges."
        }
      ]
    },
    {
      title: "Intellectual Property",
      content: [
        {
          text: "All system designs, technical documentation, custom programming, and project specifications created by us remain our intellectual property unless otherwise agreed in writing. Clients receive a license to use the systems and documentation for their intended purpose. Unauthorized copying, modification, or distribution of our designs and programming is prohibited."
        }
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        {
          text: "Our liability is limited to the value of services provided for the specific project in question. We are not liable for indirect, consequential, or incidental damages including loss of business, revenue, profits, data, or opportunity. We are not responsible for damage to existing infrastructure unless caused by our negligence. Our liability does not cover issues arising from client-supplied equipment, third-party products, or factors beyond our reasonable control. Maximum liability for any claim shall not exceed the total project value or $50,000, whichever is less."
        }
      ]
    },
    {
      title: "Indemnification",
      content: [
        {
          text: "Clients agree to indemnify and hold us harmless from claims, damages, or expenses arising from misuse of installed systems, failure to follow operational guidelines, unauthorized modifications to systems, accidents not caused by our negligence, or violation of applicable laws or regulations by the client."
        }
      ]
    },
    {
      title: "Confidentiality",
      content: [
        {
          text: "We maintain confidentiality of all client information, project details, site layouts, and proprietary information. Both parties agree not to disclose confidential information to third parties without written consent, except as required by law or to authorized subcontractors under confidentiality agreements. This obligation continues for 5 years after project completion."
        }
      ]
    },
    {
      title: "Cancellation and Termination",
      content: [
        {
          subtitle: "Client Cancellation",
          text: "Clients may cancel projects with written notice. Cancellation fees apply to cover ordered equipment, completed work, and administrative costs. Deposits are non-refundable once equipment has been ordered."
        },
        {
          subtitle: "Our Right to Terminate",
          text: "We reserve the right to terminate services for non-payment, breach of terms, unsafe site conditions, or illegal activities. Upon termination, all outstanding payments become immediately due."
        }
      ]
    },
    {
      title: "Force Majeure",
      content: [
        {
          text: "Neither party is liable for delays or failures in performance due to circumstances beyond reasonable control, including natural disasters, pandemics, government actions, strikes, equipment shortages, transportation delays, or other force majeure events. We will notify clients promptly of any such circumstances and make reasonable efforts to minimize delays."
        }
      ]
    },
    {
      title: "Dispute Resolution",
      content: [
        {
          text: "Any disputes arising from these terms or our services shall first be addressed through good faith negotiations. If resolution cannot be reached within 30 days, disputes shall be resolved through binding arbitration in accordance with local arbitration rules. The prevailing party in any dispute shall be entitled to recover reasonable attorney fees and costs."
        }
      ]
    },
    {
      title: "Insurance",
      content: [
        {
          text: "We maintain appropriate liability insurance and workers compensation coverage. Clients are responsible for insuring their property and equipment. We recommend clients notify their insurance providers before major AV installations."
        }
      ]
    },
    {
      title: "Modifications to Terms",
      content: [
        {
          text: "We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on our website with an updated effective date. Continued use of our services after changes constitute acceptance of modified terms. Material changes to existing project agreements will be communicated directly to affected clients."
        }
      ]
    },
    {
      title: "Governing Law",
      content: [
        {
          text: "These Terms and Conditions are governed by the laws of the jurisdiction in which we operate. Any legal proceedings shall be conducted in the courts of that jurisdiction. If any provision of these terms is found to be unenforceable, the remaining provisions shall remain in full effect."
        }
      ]
    },
    {
      title: "Entire Agreement",
      content: [
        {
          text: "These Terms and Conditions, together with any written project agreements, proposals, and specifications, constitute the entire agreement between the parties. No verbal agreements or representations not documented in writing shall be binding. Any modifications to project terms must be documented in writing and signed by both parties."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#f24b00] to-[#e64500] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-orange-300 rounded-full opacity-15 animate-bounce"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24 mt-16">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Terms & Conditions
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              These terms govern the provision of our audio-visual services, including consultation, installation, maintenance, and support. Please read them carefully.
            </p>
            <div className="text-sm text-orange-200">
              Last Updated: October 14, 2025
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="mb-12 p-8 bg-orange-50 rounded-2xl border-l-4 border-[#f24b00]">
          <p className="text-lg text-gray-700 leading-relaxed">
            These Terms and Conditions outline the rules, responsibilities, and expectations for all parties engaging with our audio-visual services. By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="scroll-mt-24">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#f24b00] text-white rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#16213d]">
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

        {/* Important Notice */}
        <div className="mt-16 p-8 bg-yellow-50 rounded-2xl border-l-4 border-yellow-500">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            ⚠️ Important Notice
          </h3>
          <p className="text-gray-700 leading-relaxed">
            These terms contain important limitations of liability and other provisions that affect your legal rights. Please ensure you understand these terms before engaging our services. If you have questions or concerns about any provision, please contact us before proceeding with any project.
          </p>
        </div>

        {/* Contact Section */}
        <div className="mt-12 p-8 bg-gradient-to-r from-orange-50 to-orange-50 rounded-2xl">
          <h2 className="text-2xl font-bold text-[#16213d] mb-4">
            Questions About These Terms?
          </h2>
          <p className="text-gray-700 mb-6">
            If you have questions about these Terms and Conditions or need clarification on any provision, please contact us:
          </p>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-center">
              <span className="font-semibold w-24">Email:</span>
              <a href="mailto:info@proscene.co.ke" className="text-[#f24b00] hover:underline">
                info@proscene.co.ke
              </a>
            </div>
            <div className="flex items-center">
              <span className="font-semibold w-24">Phone:</span>
              <a href="tel:+254713761269" className="text-[#f24b00] hover:underline">
                +254 713 761269
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 p-6 bg-gray-50 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Related Documents</h3>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => navigate('/privacy-policy')}
              className="text-[#f24b00] hover:underline font-medium"
            >
              Privacy Policy →
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#fff0e6] via-[#fff8f0] to-[#fff0e6] py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-6">
            Ready to Start Your AV Project?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Now that you understand our terms, let's discuss how we can bring your audio-visual vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/bookDemo')}
              className="bg-[#f24b00] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#16213d] transition-all duration-300 transform hover:scale-105"
            >
              Request a Consultation
            </button>
            <button 
              onClick={() => navigate('/')}
              className="border-2 border-[#f24b00] text-[#f24b00] px-8 py-4 rounded-2xl font-bold hover:bg-[#f24b00] hover:text-white transition-all duration-300"
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

export default TermsAndConditions;