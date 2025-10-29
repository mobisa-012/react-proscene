import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function CertificationsPage() {
  const navigate = useNavigate();

  const certifications = [
    {
      id: "ca-kenya",
      logo: "/assets/certifications/ca-logo.png",
      title: "TELECOMMUNICATIONS CONTRACTOR",
      organization: "Communications Authority of Kenya",
      description: "Licensed telecommunications contractor qualified to design, install, and maintain telecommunications infrastructure across Kenya.",
      benefits: [
        "Authorized to deploy telecom infrastructure",
        "Compliance with national telecom standards",
        "Qualified for government and corporate projects",
        "Regular audits and quality assurance"
      ],
      badgeColor: "from-[#ff4e00] to-[#e54600]"
    },
    {
      id: "work-at-height",
      logo: "/assets/certifications/viscar-logo.png",
      title: "WORK AT HEIGHT CERTIFICATION",
      organization: "Viscar Integrated Consulting Limited",
      description: "Certified for safe work at elevated heights, essential for installing AV equipment, rigging, and infrastructure in challenging environments.",
      benefits: [
        "Safety-compliant installations",
        "Reduced risk of workplace accidents",
        "Trained in fall protection systems",
        "Insurance and liability coverage"
      ],
      badgeColor: "from-[#ff4e00] to-[#e54600]"
    },
    {
      id: "nca-company",
      logo: "/assets/certifications/nca-logo.png",
      title: "NCA 2 COMPANY",
      organization: "National Construction Authority",
      description: "NCA Category 2 registered company authorized to undertake construction and installation projects up to KES 4 Million.",
      benefits: [
        "Qualified for medium-scale projects",
        "Government tender eligibility",
        "Quality assurance certification",
        "Project management standards"
      ],
      badgeColor: "from-[#ff4e00] to-[#e54600]"
    },
    {
      id: "nca-individual",
      logo: "/assets/certifications/nca-logo.png",
      title: "NCA INDIVIDUAL",
      organization: "National Construction Authority",
      description: "Individual NCA registration for our key personnel, ensuring professional competence in construction project management.",
      benefits: [
        "Professional accreditation",
        "Continuous professional development",
        "Industry recognition",
        "Compliance with building codes"
      ],
      badgeColor: "from-[#ff4e00] to-[#e54600]"
    },
    {
      id: "epra-t3",
      logo: "/assets/certifications/epra-logo.png",
      title: "T3 LICENSES",
      organization: "EPRA (Energy and Petroleum Regulatory Authority)",
      description: "Licensed electrical contractors with T3 certifications for electrical installations in commercial and industrial settings.",
      benefits: [
        "Authorized electrical installations",
        "Safety standards compliance",
        "Power system design and installation",
        "Regulatory compliance"
      ],
      badgeColor: "from-[#ff4e00] to-[#e54600]"
    },
    {
      id: "epra-t2",
      logo: "/assets/certifications/epra-logo.png",
      title: "T2 CERTIFICATIONS",
      organization: "EPRA (Energy and Petroleum Regulatory Authority)",
      description: "Advanced electrical certification for complex power systems, UPS installations, and energy management solutions.",
      benefits: [
        "Complex power system installations",
        "UPS and backup power solutions",
        "Energy efficiency consulting",
        "High-voltage equipment handling"
      ],
      badgeColor: "from-[#ff4e00] to-[#e54600]"
    }
  ];

  const industryRecognition = [
    {
      icon: "🏆",
      title: "Industry Leader",
      description: "14+ years of certified excellence in AV solutions"
    },
    {
      icon: "✅",
      title: "Compliance Guaranteed",
      description: "All installations meet national and international standards"
    },
    {
      icon: "🔒",
      title: "Safety First",
      description: "Certified safety protocols for all installations"
    },
    {
      icon: "📋",
      title: "Quality Assured",
      description: "Regular audits and continuous improvement"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#ff4e00] to-[#e54600] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28 text-center">
          <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-6">
            Licensed & Certified
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            We're <span className="text-[#16213d]">Certified</span>
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
            Proscene Systems Limited holds multiple certifications and licenses, ensuring that every project meets the highest standards of quality, safety, and regulatory compliance.
          </p>
        </div>
      </div>

      {/* Industry Recognition Cards */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryRecognition.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#16213d] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-4">
              Our Certifications & Licenses
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every certification represents our commitment to excellence, safety, and compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Header with Badge */}
                <div className={`bg-gradient-to-r ${cert.badgeColor} p-6 relative`}>
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center p-3 shadow-lg">
                      <img
                        src={cert.logo}
                        alt={cert.organization}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<div class="text-3xl">🏅</div>';
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {cert.organization}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#16213d] flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#ff4e00]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {cert.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-600">
                          <div className="w-1.5 h-1.5 bg-[#ff4e00] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Certifications Matter */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-4">
              Why Our Certifications Matter
            </h2>
            <p className="text-lg text-gray-600">
              More than just paperwork - our certifications mean quality, safety, and peace of mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Client Protection",
                description: "Our certifications ensure you're working with a legitimate, qualified contractor backed by regulatory bodies."
              },
              {
                icon: "⚡",
                title: "Quality Assurance",
                description: "Every certification requires ongoing compliance, training, and quality control measures."
              },
              {
                icon: "📜",
                title: "Legal Compliance",
                description: "We meet all national standards and regulations, protecting you from legal and safety liabilities."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#16213d] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-[#ff4e00] to-[#e54600] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "6+", label: "Active Certifications" },
              { number: "14+", label: "Years Licensed" },
              { number: "100%", label: "Compliance Rate" },
              { number: "3000+", label: "Certified Projects" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-orange-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-6">
            Work With a Certified Partner
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our certifications ensure that your AV project is delivered with the highest standards of quality, safety, and professionalism.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/bookDemo")}
              className="bg-[#ff4e00] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-[#16213d] transition-colors duration-300 shadow-lg"
            >
              Request Consultation
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="border-2 border-[#ff4e00] text-[#ff4e00] px-8 py-3 rounded-2xl font-semibold hover:bg-[#ff4e00] hover:text-white transition-colors duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CertificationsPage;