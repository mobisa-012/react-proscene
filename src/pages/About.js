import React from "react";
import futurefirst from '../components/assets/futurefirst.png';
import harney from '../components/assets/harney.webp';
import photo1 from '../components/assets/1.png';
import icipe from '../components/assets/icipe-logo.png';
import BookDemoToday from "../components/BookDemo.js";
import Footer from "../components/Footer";

const teamMembers = [
  { name: 'Wilkins Michira', image: photo1, borderColor: '#FF5733', backgroundColor: '#FFE4C4', linkedinUrl: 'https://www.linkedin.com/in/wilkins-michira-2a724021/'},
  { name: 'Ninoy Kichari', image: photo1, borderColor: '#3498DB', backgroundColor: '#E0FFFF',linkedinUrl: 'https://www.linkedin.com/in/mobisa-kwamboka-a56691223/'},
  { name: 'Polland Onderi', image: photo1, borderColor: '#2ECC71', backgroundColor: '#F0FFF0',linkedinUrl: 'https://www.linkedin.com/in/polland-onderi-0123351b2/'},
  { name: 'Alice Johnson', image: photo1, borderColor: '#9B59B6', backgroundColor: '#F8F0E3',linkedinUrl: 'https://www.linkedin.com/in/mobisa-kwamboka-a56691223/' },
  { name: 'John Doe', image: photo1, borderColor: '#F1C40F', backgroundColor: '#FFF8DC',linkedinUrl: 'https://www.linkedin.com/in/mobisa-kwamboka-a56691223/' },
];

const TeamMemberCard = ({ name, image, borderColor, backgroundColor, linkedinUrl }) => (
  <div className="flex flex-col items-center py-10 mr-5 ml-5">
    <div
      className="group relative w-64 h-64 rounded-2xl shadow-md overflow-hidden"
      style={{ border: `1px solid ${borderColor}`, backgroundColor }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 bg-opacity-50"
      >
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
        >
          LinkedIn
        </a>
      </div>
    </div>
    <div className="text-center pt-4">
      <h2 className="text-lg font-semibold">{name}</h2>
    </div>
  </div>
);

function About() {
    return (
        <div className="p-0">
        {/* We're in Business Section */}
            <div className="p-6 w-full max-w-7xl mx-auto my-12 items-center bg-[#16213d] rounded-[50px] flex gap-4">
            <div className="flex flex-col items-center gap-4">
                <h1 className="py-8 px-6 mx-3 text-center text-white leading font-bold md:text-5xl sm:text-3xl">
                    We're in the business of <br />
                    enhancing your business
                </h1>
                <button className="bg-white text-black font-bold py-3 px-6 rounded-2xl hover:bg-blue-700 focus:outline-none">
                    Learn More
                </button>
            </div>
            <img 
                className="rounded-[50px] max-w-full h-auto" 
                src={harney}
                alt="Business Enhancement" 
            />
        </div>
            
            {/* Our Story Section */}
            <div className="w-full mx-auto flex flex-col justify-center items-center">
                <h2 className="py-5 text-center ourstory text-[#D7F7FF] font-black sm:text-5xl lg:text-[150px]">OUR STORY</h2>
                <p className="items-center justify-center mx-auto my-10 tracking-wide leading-relaxed text-base
                text-black lg:w-[40%] sm:w-[80%] text-center">
                    Proscene is one of East Africa’s most experienced and innovative providers of Audio Visual products, integrated Audio Visual systems,
                    Video Collaboration and unified communications technology. We provide specialist Audio Visual support, advice and System Installation
                    and maintenance services to a vast range of corporate clients, education, public sector, government departments and Religious Organisation.
                </p>
            </div>
            
            {/* Client Vision and Innovation Section */}
            <div class="flex flex-col items-center justify-center min-h-5 py-7 pb-7">
            <div class="flex gap-1 items-center w-full max-w-7xl">
               {/* title */}
                <h3 
                class="text-7xl w-1/2 font-bold vision-title text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 leading">
                Powered by our clients’ vision and driven by innovation
                </h3>
                {/* line */}
                <div class="w-0.5 h-56 bg-purple-500"></div>
                {/* description */}
                <p class="ml-4 text-lg text-gray-700 vision-description px-8 w-1/2 ">
                    Proscene specializes in providing organizations with cutting-edge cloud-based business management solutions...
                </p>
                </div>
            </div>

            {/* diamond section */}
            <div className="relative bg-[#16213d] flex flex-col items-center justify-center overflow-hidden p-20">
            {/* Top Row */}
            <div className="flex justify-center mb-6 transform -translate-y-12">
                <div className="relative group w-60 h-80">
                <img
                    src={futurefirst}
                    alt="Hospitality Management"
                    className="w-full h-full rounded-lg object-cover"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Hospitality Management
                </div>
                </div>
            </div>

            {/* Centered Text */}
            <div className="text-white text-center  text-xl font-bold">
                We shape around your business
            </div>

            {/* Middle Row */}
            <div className="flex justify-between w-full mx-auto mb-6">
                <div className="relative group w-60 h-80">
                <img
                    src={futurefirst}
                    alt="ERP"
                    className="w-full h-full rounded-lg object-cover"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-2 rounded-lg">
                    ERP
                </div>
                </div>

                <div className="relative group w-60 h-80">
                <img
                    src={icipe}
                    alt="Retail Management"
                    className="w-full h-full rounded-lg object-cover"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-4 py-2 rounded-lg">
                    Retail Management
                </div>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="flex justify-center transform translate-y-0">
                <div className="relative group w-60 h-80">
                <img
                    src={harney}
                    alt="School Management"
                    className="w-full h-full rounded-lg object-cover"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-lg">
                    School Management
                </div>
                </div>
            </div>
            </div>

            {/* our team */}
            <div class="mx-auto p-10 flex flex-col items-center">  
            <div class="text-center lg:text-4xl sm:text-sm font-bold">Our team means business</div>
            <div class="flex flex-row items-center w-auto">  
            {teamMembers.map((member) => (
                <TeamMemberCard key={member.name} {...member} />
            ))}
            </div>
            </div>            
            <BookDemoToday/>
            <Footer/>
        </div>        
    );
}

export default About;
