import React from "react";
import './About.css';

function About() {
    return (
        <div className="p-6">
            <div className="about-content">
                <h1 className="text-center text-black font-bold md:text-5xl sm:text-3xl py-9">
                    We're in the business of <br />
                    enhancing your business
                </h1>
            </div>
            
            {/* Our Story Section */}
            <div className="our-story">
                <h2 className="py-8 text-center text-[#D7F7FF] font-black sm:text-5xl lg:text-[150px]">OUR STORY</h2>
                <p className="py-10 mx-96 w-96 my-10 leading-normal text-black lg:w-[70%] sm:w-[80%] text-center">
                    Proscene is one of East Africa’s most experienced and innovative providers of Audio Visual products, integrated Audio Visual systems,
                    Video Collaboration and unified communications technology. We provide specialist Audio Visual support, advice and System Installation
                    and maintenance services to a vast range of corporate clients, education, public sector, government departments and Religious Organisation.
                </p>
            </div>
            
            {/* Client Vision and Innovation Section */}
            <div className="vision-section">
                <h3 className="vision-title">Powered by our clients’ vision and driven by innovation</h3>
                <div className="vision-content">
                    <div className="vision-line"></div>
                    <p className="vision-description">
                        Priority specializes in providing organizations with cutting-edge cloud-based business management...
                    </p>
                </div>
            </div>
            
            {/* Diamond-Shaped Cards Section */}
            <div className="diamond-section">
                <div className="diamond-center">We shape around your business</div>
                <div className="card hospitality-card">
                    <button className="card-button blue-button">Hospitality Management</button>
                    <div className="card-hover-content">
                        Next-Gen property management software
                        <button className="read-more-button">Read more</button>
                    </div>
                </div>
                <div className="card retail-card">
                    <button className="card-button purple-button">Retail Management</button>
                    <div className="card-hover-content">
                        Upscale your retail business with Priority’s unified commerce management system
                        <button className="read-more-button">Read more</button>
                    </div>
                </div>
                <div className="card erp-card">
                    <button className="card-button dark-blue-button">ERP</button>
                    <div className="card-hover-content">
                        Solutions that work for you. Not the other way around.
                        <button className="read-more-button">Read more</button>
                    </div>
                </div>
                <div className="card school-card">
                    <button className="card-button orange-button">School Management</button>
                    <div className="card-hover-content">
                        Ace pedagogical management with Priority SMIS.
                        <button className="read-more-button">Read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
