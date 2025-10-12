import React, { useState } from 'react';
import { FaPhoneAlt, FaMousePointer, FaMapMarkerAlt, FaUsers, FaThumbsUp, FaHeart } from 'react-icons/fa';
import Footer from "../components/Footer";

function BookDemo() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    email: '',
    role: '',
    country: '',
    interest: '',
    message: ''
  });

  const countries = [
    "Kenya", "Uganda", "Tanzania", "Rwanda", "Ethiopia", 
    "United States", "United Kingdom", "Canada", "Germany", "Australia"
  ];
  
  const roles = [
    "Owner/President/CEO",
    "CFO/Finance Director",
    "CTO",
    "CMO/Marketing",
    "IT Director",
    "COO/CIO",
    "Consultant",
    "Other"
  ];

  const interests = [
    "Meeting Spaces & Boardrooms",
    "Video Conferencing Solutions",
    "Digital Signage & Video Walls",
    "Auditorium AV Systems",
    "Managed Services",
    "IPTV/MATV Solutions",
    "Religious Organization AV",
    "Complete AV Infrastructure"
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const resources = [
    {
      icon: <FaPhoneAlt className="text-2xl" />,
      title: "Find Support",
      description: "Get always-on access to technical support, self-help resources, and your Proscene systems.",
    },
    {
      icon: <FaMousePointer className="text-2xl" />,
      title: "Experience a Demo",
      description: "See how Proscene solutions can streamline and unite your organization to achieve goals.",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Locate Our Office",
      description: "We have experts in regions around Kenya and East Africa, ready to support your digital journey.",
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Explore Our Impact",
      description: "Get tailored support and strategic guidance to integrate solutions and accelerate value.",
    },
    {
      icon: <FaThumbsUp className="text-2xl" />,
      title: "Succeed with Partnerships",
      description: "Whatever your business challenge, our ecosystem of partners will help drive results.",
    },
    {
      icon: <FaHeart className="text-2xl" />,
      title: "Collaborate with Community",
      description: "Tap into a community of Proscene beneficiaries and success stories.",
    },
  ];

  return (
    <div className="min-h-screen mt-8 bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#3b37e6] to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-20 text-center">
          <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-4">
            Let's Connect
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Get the Resources
            <span className="block text-yellow-300">You Need</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Experience how Proscene can transform your workspace. Book a personalized demo or connect with our expert team.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Section - Resources */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  How We Can Help
                </h2>
                <p className="text-lg text-gray-600">
                  Discover the full range of support and services available to help you succeed.
                </p>
              </div>

              <div className="space-y-6">
                {resources.map((resource, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#3b37e6] to-blue-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {resource.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Prefer to Talk Directly?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-[#3b37e6]" />
                    <a href="tel:+254713761269" className="text-gray-700 hover:text-[#3b37e6] transition-colors">
                      +254 713 761 269
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#3b37e6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@proscene.co.ke" className="text-gray-700 hover:text-[#3b37e6] transition-colors">
                      info@proscene.co.ke
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-[#3b37e6] mt-1" />
                    <p className="text-gray-700">
                      Karen, Off Southern Bypass<br />
                      P.O BOX 66760-00800<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <div className="lg:sticky lg:top-8 h-fit">
              <div className="bg-gradient-to-br from-[#3b37e6] to-blue-800 text-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="p-8 lg:p-10">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-3">Book a Demo</h2>
                    <p className="text-blue-100">
                      Fill out the form below and our team will get back to you within 24 hours
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          placeholder="John"
                          className="w-full p-3 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          placeholder="Doe"
                          className="w-full p-3 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                        />
                      </div>
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Name *</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Your Company"
                        className="w-full p-3 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                      />
                    </div>

                    {/* Contact Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+254 700 000 000"
                          className="w-full p-3 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Business Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                          className="w-full p-3 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                        />
                      </div>
                    </div>

                    {/* Role & Country */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Your Role *</label>
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          required
                          className="w-full p-3 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                        >
                          <option value="">Select your role</option>
                          {roles.map((role, index) => (
                            <option key={index} value={role}>
                              {role}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Country *</label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                          className="w-full p-3 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                        >
                          <option value="">Select country</option>
                          {countries.map((country, index) => (
                            <option key={index} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Interest */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Interested In *</label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                      >
                        <option value="">Select area of interest</option>
                        {interests.map((interest, index) => (
                          <option key={index} value={interest}>
                            {interest}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or any specific requirements..."
                        rows="4"
                        className="w-full p-3 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all resize-none"
                      ></textarea>
                    </div>

                    {/* Terms */}
                    <div className="text-sm text-blue-100">
                      <p>
                        By submitting this form you agree to our{" "}
                        <a href="/terms" className="text-yellow-300 hover:text-yellow-200 underline font-medium">
                          Terms & Conditions
                        </a>{" "}
                        and{" "}
                        <a href="/privacy" className="text-yellow-300 hover:text-yellow-200 underline font-medium">
                          Privacy Policy
                        </a>.
                      </p>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-white text-[#3b37e6] py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Submit Request
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted Across East Africa
            </h2>
            <p className="text-lg text-gray-600">
              Join hundreds of organizations who trust Proscene
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "3000+", label: "Projects Completed" },
              { number: "7", label: "Countries Served" },
              { number: "14+", label: "Years Experience" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#3b37e6] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BookDemo;