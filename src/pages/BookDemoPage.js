import React from "react";
import Footer from "../components/Footer";

function BookDemo () {
  const countries = ["United States", "Kenya", "Canada", "Germany", "Australia"];
  const roles = [
    "Owner|President|CEO",
    "CFO|Finance Director",
    "CTO",
    "CMO |Marketing",
    "Other",
    "Consultant",
    "IT Director",
    "COO|CIO",
  ];

  return (
    <div className = "" style={{marginBlock:"clamp(1.4238rem, 1.0921rem + 1.6585vw, 2.6469rem)"}}>
    <div className="flex items-center justify-center bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 mt-14">
        {/* Left Section */}
        <div className="flex flex-col justify-center text-left p-6 space-y-6">
          <h1 className="text-4xl font-bold text-[#3b37e6]">Ready to take a closer look?</h1>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center">
              <span className=" rounded-full bg-red-400 inline-block mr-2" style={{width:'.8em', aspectRatio:'1'}}></span>
              Watch Proscene in action. See how we help you grow
            </li>
            <li className="flex items-center">
              <span className=" rounded-full bg-purple-400  inline-block mr-2" style={{width:'.8em', aspectRatio:'1'}}></span>
              Flexible, scalable solutions powered by innovative technology
            </li>
            <li className="flex items-center">
              <span className="rounded-full bg-blue-400 inline-block mr-2" style={{width:'.8em', aspectRatio:'1'}}></span>
              Business management solutions tailored to your needs
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="bg-[#16213D] text-white p-5 mb-2 mx-3 rounded-[12px] h-auto flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold mb-6">Book a Demo</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="p-3 rounded-md bg-white text-black"
              />
              <input
                type="text"
                placeholder="Last name"
                className="p-3 rounded-md bg-white text-black"
              />
            </div>
            <input
              type="text"
              placeholder="Company name"
              className="w-full p-3 rounded-md bg-white text-black"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full p-3 rounded-md bg-white text-black"
            />
            <input
              type="email"
              placeholder="Business email"
              className="w-full p-3 rounded-md bg-white text-black"
            />
            <select className="w-full p-3 rounded-md bg-white text-black">
              <option>Select your role</option>
                {roles.map((role,index) => (
                  <option key = {index} value= {role}>
                  {role}</option>
                ))}
            </select>
            <select className="w-full p-3 rounded-md bg-white text-black">
              <option value="">Select Country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <select className="w-full p-3 rounded-md bg-white text-black">
              <option>Interested in</option>
              <option>Software Solutions</option>
              <option>Proscene Partnership</option>
            </select>
            <textarea
              placeholder="Message (Optional)"
              className="w-full p-3 rounded-md bg-white text-black h-24"
            ></textarea>
            <p className="text-sm">
              By submitting this form you agree to our{" "}
              <a href="/corporate" className="underline">
                Terms & Conditions
              </a>.
            </p>
            <button
              type="submit"
              className="w-1/2 flex max-w-7xl mx-auto justify-center bg-[#16213D] border hover:bg-white text-white hover:text-black py-3 rounded-xl font-medium">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default BookDemo;
