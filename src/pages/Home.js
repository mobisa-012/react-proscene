import React from "react";
import Footer from "../components/Footer";
import LogoCarousel from "../components/LogoCarousel";
import SectorCards from "../components/SectorCards.js";
import Moresection from "../components/Moresection.js";
import './Home.css';
import Partners from "../components/Partners.js";
import BookDemoToday from "../components/BookDemo.js";
import SolutionsLayout from "../components/Solutions";
import DriveGrowth from "../components/DriveGrowth.js";
import Stats from "../components/StatsSection.js";


function Home() {
    return (
        <div className="home-container">
        <div>
        <DriveGrowth/>
        </div>
        <div className="home-section" style={{marginBottom:'clamp(1.5rem, 1.4492rem + 1.9542vw, 3.6875rem)'}}>
        <LogoCarousel /> 
        </div>
        <div>
        <SolutionsLayout/>
        </div>
        <div className="home-section mx-auto" style={{marginBlock:'clamp(1.5rem, 2.9915rem + 2.5424vw, 5.375rem)'}}>
        <Partners/>
        </div>
        <div className="sector-section maxWidthContainer">
        <SectorCards />
        </div>  
        <div><Moresection /></div>
        <div className=""><Stats/></div>
        <div className = "demo-section">
        <BookDemoToday/>
        </div>        
        <Footer />
        </div>
    );
}

export default Home;
