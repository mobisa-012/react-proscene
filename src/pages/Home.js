import React from "react";
import Footer from "../components/Footer";
import LogoCarousel from "../components/LogoCarousel";
import SectorCards from "../components/SectorCards.js";
import './Home.css';
import Partners from "../components/Partners.js";
import BookDemoToday from "../components/BookDemo.js";


function Home() {
    return (
        <div className="home-container">
        <h1>This is the home page</h1>          

        <div className="home-section">
        <LogoCarousel />
        </div>

        <div className="home-section">
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
