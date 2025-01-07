import React from "react";
import BookDemoToday from "../components/BookDemo";
import Footer from "../components/Footer";
import LogoCarousel from "../components/LogoCarousel";
import UCCHeader from "../components/UCC_header";


const features = [
  {
    title: "Interoperability",
    description:
      "Today's workforce wants flexibility and a choice of tools. True interoperability means using any UCC platform and accessing all functions without compromising the end-user experience.",
    icon: "🛠️", // Replace with appropriate icons
  },
  {
    title: "Voice integration",
    description:
      "Enable team and contact center voice communication through UCC platforms with headsets, Teams phones, Webex Calling, Zoom Phones, Google Workspace, or multi-platform headsets and phones.",
    icon: "🎙️",
  },
  {
    title: "User experience",
    description:
      "Start the training process early, before you launch new platforms and upgrade meeting rooms. Ensuring that users are comfortable with new technology will boost adoption.",
    icon: "👥",
  },
  {
    title: "Licensing",
    description:
      "Manage licensing and permissions, monitor profiles, and shut down inactive accounts.",
    icon: "🔑",
  },
  {
    title: "Security",
    description:
      "Manage access to UCC platforms and device access to the cloud and on-prem systems and files. Also, protect end users by ensuring conversations, data, and files are shared securely.",
    icon: "🔒",
  },
  {
    title: "Management and optimization",
    description:
      "Ensure access to UCC platforms and provide 24/7 user support. Monitor device, platform, and room usage to optimize your system and user experience continually.",
    icon: "📊",
  },
];

function UCC() {
  return (
    <div className = ''>
    <UCCHeader/>
    <div className="bg-[#16213D] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">
          Proscene's global UCC deployment
        </h1>
        <p className="mb-8">
          After decades of deploying communications platforms for our customers
          across the globe, Proscene developed a roadmap to successful global
          UCC deployment. We focus on: interoperability, voice integration,
          user experience, licensing, security, and management and
          optimization. Involve our team early in your transformation process to
          ensure success.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className=" p-6 rounded-lg shadow-lg flex flex-col items-center text-center" style={{border:'1px solid rgb(165 243 252 )'}}
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h2 className="text-xl font-bold mb-2">{feature.title}</h2>
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
    <LogoCarousel/>
    <BookDemoToday/>
    <Footer/>
    </div>
  );
}

export default UCC;