import React, {useEffect, useState} from "react";
import './Onsitesupport.css'
import leftbottomSvg from "../components/assets/leftbottom.svg";
import supportjpg from "../components/assets/support.jpg";
import { motion } from "framer-motion";
import FAQ from "./Faq";

function OnSiteSupport() {
    const swipeTexts = [
            "Amplify operational efficiency, discover new opportunities, and stay agile in the rapidly changing market.",
            "Streamline your processes and innovate faster to achieve measurable success.",
            "Empower your business with cutting-edge solutions tailored to your needs."
        ];
        const handleScroll = (id) => {
            const section = document.getElementById(id);
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }};
    
        const [currentIndex, setCurrentIndex] = useState(0);
    
        // te texts swipe evry 3seconds
        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % swipeTexts.length);
            }, 3000);
    
            return () => clearInterval(interval);
        }, [swipeTexts.length]);
        const cardVariants = {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        };
        const [activeLink, setActiveLink] = useState("feature1");

  const links = [
    { id: "feature1", label: "Feature 1" },
    { id: "feature2", label: "Feature 2" },
    { id: "feature3", label: "Feature 3" },
    { id: "feature4", label: "Feature 4" },
    { id: "feature5", label: "Feature 5" },
  ];

  const content = {
    feature1: {
      title: "Feature 1 Title",
      description: "Description for Feature 1.",
      image: "https://via.placeholder.com/300",
    },
    feature2: {
      title: "Feature 2 Title",
      description: "Description for Feature 2.",
      image: "https://via.placeholder.com/300",
    },
    feature3: {
      title: "Feature 3 Title",
      description: "Description for Feature 3.",
      image: "https://via.placeholder.com/300",
    },
    feature4: {
      title: "Feature 4 Title",
      description: "Description for Feature 4.",
      image: "https://via.placeholder.com/300",
    },
    feature5: {
      title: "Feature 5 Title",
      description: "Description for Feature 5.",
      image: "https://via.placeholder.com/300",
    },
  };
  
      
    return(
        <div>
            <div className="pb-5 maxWidthContainer">
            <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-white">
                <div className="bg-[#3b37e6] py-16 text-white p-10 md:w-1/2 Br" style={{height:'100%'}}>
                    <h1 className="font-bold h1sizing">
                        Need assistance? Support made easy.
                    </h1>
                    <p className="text-lg mb-6">
                    {/* added 3 `line texts` that swipe automatically */}
                        {swipeTexts[currentIndex]}
                    </p>
                    <div className="button-Center">
                        <button className="border border-white text-white py-2 px-6 rounded-2xl hover:bg-blue-700">
                            Contact us
                        </button>
                    </div>
                </div>

                <div className="relative md:w-1/2 flex items-center justify-center mt-8 md:mt-0 bg-growth">
                    <img src={supportjpg} alt="home" className=" ml-10 shadow-lg" style={{borderRadius:'2em'}}/>
                    <img src={leftbottomSvg} alt="home" className="absolute -bottom-2   left-4 w-40"  style={{zIndex:'999'}}/>

                    <div className="absolute -top-5 -right-5 w-32 h-32 bg-purple-200 rounded-lg"></div>
                    {/* <div className="absolute -bottom-12 -left-8 w-32 h-16 bg-cyan-200 rounded-full"></div> */}
                    <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-red-300 rounded-lg"></div>
                </div>
            </div>
        </div>
        <div>
      {/* Button Row */}
      <div className="flex justify-center items-center bg-white">
        <div className="flex flex-wrap justify-center space-x-4 max-w-[800px]">
          {[
            { text: "Competitive edge", id: "competitive-edge" },
            { text: "Key features", id: "key-features" },
            { text: "Case studies", id: "case-studies" },
            { text: "FAQs", id: "faqs" },
          ].map((button, index) => (
            <button
              key={index}
              onClick={() => handleScroll(button.id)}
              className="bg-[#e3eeff] text-[#3b37e6] font-semibold px-6 py-2 transition-colors duration-300 hover:bg-[#3b37e6] hover:text-white" style={{borderRadius:'3em'}}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div id="competitive-edge" className="pt-9 pb-9 flex justify-center items-center">
      <div className="flex flex-wrap items-center justify-center md:justify-between max-w-[1200px] mx-auto p-4">
      {/* First Column */}
      <div className="md:w-1/2 w-full p-4">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">Your Title Here</h1>
        <p className="mt-4 text-gray-600">
          This is a paragraph providing some details. Make it as descriptive or brief as you need.
        </p>
      </div>

      {/* Second Column */}
      <div className="md:w-1/2 w-full relative flex justify-end items-center p-4">
        {/* Divs Container */}
        <div className="flex flex-end">
          {/* First Div */}
          <div
            // className="absolute"
            style={{
              backgroundColor: "#ecdeff",
              border: "1px solid #3b37e6",
              borderRadius: "46px",
              height: "334px",
              width: "178px",
              right: "-8px",
              top: "0",
            }}
          ></div>

          {/* Second Div */}
          <div
            // className="absolute"
            style={{
              backgroundColor: "#3b37e6",
              border: "1px solid #ecdeff",
              borderRadius: "46px",
              height: "334px",
              width: "180px",
              right: "189px",
              top: "0",
            }}
          ></div>

          {/* Last Div */}
          <div
            className="absolute"
            style={{
              height: "259px",
              backgroundImage: `url('https://images.unsplash.com/photo-1736246633159-bc8735d6c63b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8')`,
              borderRadius: "46px",
            //   marginInline:'1em',
              width: "422px",
              left: "30px",
              top: "45px",
              position: "absolute",
              zIndex: 20,
            }}
          > </div>
        </div>
      </div>
    </div>
      </div>
      <div id="key-features" className="pt-9 pb-9 flex justify-center items-center">
      <div className="max-w-[1100px] w-full mx-auto my-4 pt-12 pb-14 bg-[#e3eeff] border border-[#3b37e6] rounded-3xl">
      <h1 className="text-center bookdemotitle">See how Proscene works for you</h1>
      <button className="mt-4 mx-auto block px-6 py-2 mb-4 rounded-[10px] bg-[#3b37e6] text-white hover:bg-[#16213d] transition-all duration-300">
        Book a demo today
      </button>
    </div>
      </div>
      <div id="case-studies" className="bg-[#f3f6ff] flex justify-center items-center">
        
      <div className=" min-h-screen flex flex-col justify-center items-center p-6">
      <h1 className="onsitesubheads mb-12 text-center">Proscene gives you a true <br></br>competitive edge</h1>

      <div className="w-full max-w-7xl">
        {/* Row 1 */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          transition={{
            staggerChildren: 0.3, // Stagger delay for children (cards)
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Card 1 */}
          <motion.div
            className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center justify-center"
            variants={cardVariants}
          >
            <div className="w-16 h-16  rounded-full mb-4 flex items-center justify-center">
              <span className="text-xl text-gray-700">🎯</span>
            </div>
            <h3 className="font-semibold text-lg">Tailored Solutions</h3>
            <p className="text-gray-600 text-sm mt-2">On-site support allows technicians to address technical issues in real-time, minimizing downtime and disruptions during critical events or daily operations.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center justify-center"
            variants={cardVariants}
          >
            <div className="w-16 h-16  rounded-full mb-4 flex items-center justify-center">
              <span className="text-xl text-gray-700">🚀</span>
            </div>
            <h3 className="font-semibold text-lg">Improved User Confidence</h3>
            <p className="text-gray-600 text-sm mt-2">Having professionals on-site reassures staff and event organizers, providing confidence that any technical challenges will be swiftly resolved.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center justify-center"
            variants={cardVariants}
          >
            <div className="w-16 h-16  rounded-full mb-4 flex items-center justify-center">
              <span className="text-xl text-gray-700">⚡</span>
            </div>
            <h3 className="font-semibold text-lg">Enhanced Communication</h3>
            <p className="text-gray-600 text-sm mt-2">Face-to-face interactions improve clarity and allow your technicians to gather immediate feedback, which can lead to more effective troubleshooting and service customization.</p>
          </motion.div>
        </motion.div>

        {/* Row 2 (same as Row 1) */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12"
          initial="hidden"
          whileInView="visible"
          transition={{
            staggerChildren: 0.3, // Stagger delay for children (cards)
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Card 4 */}
          <motion.div
            className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center justify-center"
            variants={cardVariants}
          >
            <div className="w-16 h-16  rounded-full mb-4 flex items-center justify-center">
              <span className="text-xl text-gray-700">🎯</span>
            </div>
            <h3 className="font-semibold text-lg">Cost Efficiency</h3>
            <p className="text-gray-600 text-sm mt-2">While on-site support may seem like an added expense, it can save businesses money in the long run by preventing costly delays, errors, or the need to replace improperly used equipment.</p>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center justify-center"
            variants={cardVariants}
          >
            <div className="w-16 h-16  rounded-full mb-4 flex items-center justify-center">
              <span className="text-xl text-gray-700">🚀</span>
            </div>
            <h3 className="font-semibold text-lg">Immediate Problem Resolution</h3>
            <p className="text-gray-600 text-sm mt-2">On-site support allows technicians to address technical issues in real-time, minimizing downtime and disruptions during critical events or daily operations.</p>
          </motion.div>

          {/* Card 6 */}
          <motion.div
            className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center justify-center"
            variants={cardVariants}
          >
            <div className="w-16 h-16  rounded-full mb-4 flex items-center justify-center">
              <span className="text-xl text-gray-700">⚡</span>
            </div>
            <h3 className="font-semibold text-lg">Enhanced Reliability</h3>
            <p className="text-gray-600 text-sm mt-2">On-site support ensures that businesses can rely on expert assistance during high-stakes events like conferences, presentations, or product launches, where flawless AV performance is critical.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
      </div>
      <div className="max-w-[1100px] mx-auto bg-[#f3f6ff] border border-[#3b37e6] rounded-lg p-6">
      <div className="flex flex-col md:flex-row gap-4">
        {/* First Column */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-lg text-gray-700 mb-4">
            
          Schedule a no-obligation call with one of our experts to get expert advice on how Proscene can help streamline your operations.
          </p>
          <div>
            <button className="bg-[#3b37e6] text-white px-6 py-2 rounded-[15px] hover:bg-[#16213d] transition-colors">
              Click Me
            </button>
          </div>
        </div>
        {/* Second Column */}
        <div className="flex-1">
          <img
            src="https://cdn.dribbble.com/userupload/16234377/file/original-dd430bfca6e0238d28e9b5ac1cd05b5a.png?resize=2048x1536&vertical=center"
            alt="Placeholder"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Key Features</h2>
      {/* Links Row */}
      <div className="relative overflow-hidden">
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-1">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveLink(link.id)}
              className={`px-4 py-2 ${
                activeLink === link.id
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-700"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-blue-500 transition-transform"
          style={{
            width: "100%",
            transform: `translateX(${
              links.findIndex((link) => link.id === activeLink) * 100
            }%)`,
          }}
        />
      </div>
      {/* Content Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4">
        <div className="m-4">
          <h3 className="text-xl font-semibold mb-2">
            {content[activeLink].title}
          </h3>
          <p>{content[activeLink].description}</p>
        </div>
        <div className="m-4">
          <img
            src={content[activeLink].image}
            alt={content[activeLink].title}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
      <div id="faqs" className=" flex justify-center items-center">
        <FAQ />
      </div>
    </div>
        </div>
    );
}

export default OnSiteSupport