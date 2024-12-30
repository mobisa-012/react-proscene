import React from "react";
import Footer from "../components/Footer";
import LogoCarousel from "../components/LogoCarousel";
import SectorCards from "../components/SectorCards.js";
import './Home.css';
import Partners from "../components/Partners.js";
import BookDemoToday from "../components/BookDemo.js";
import SolutionsLayout from "../components/Solutions";
import DriveGrowth from "../components/DriveGrowth.js";


function Home() {
    return (
        <div className="home-container">
        <div>
        <DriveGrowth/>
        </div>
        <div className="home-section">
        <LogoCarousel /> 
        </div>
        <div>
        <SolutionsLayout/>
        </div>

        <div className="home-section mx-auto">
        <Partners/>
        </div> 

        <div className="sector-section">
        <SectorCards />
        </div>        

        <div className = "demo-section">
        <BookDemoToday/>
        </div> 
        
        <Footer />
        </div>
    );
}

export default Home;
