import React from "react";
import Footer from "../components/Footer";
import LogoCarousel from "../components/LogoCarousel";
import SectorCards from "../components/SectorCards.js";
import './Home.css';
import Partners from "../components/Partners.js";
import BookDemoToday from "../components/BookDemo.js";
import SolutionsLayout from "../components/Solutions";


function Home() {
    return (
        <div className="home-container">
        <div>
        <SolutionsLayout/>
        </div>

        <div className="home-section">
        <Partners/>
        </div> 

        <div className="home-section">
        <LogoCarousel /> 
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
