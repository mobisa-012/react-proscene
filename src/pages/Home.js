import React from "react";
import Footer from "../components/Footer";
import LogoCarousel from "../components/LogoCarousel";
import SectorCards from "../components/SectorCards.js";
import './Home.css';
// import Partners from "../components/Partners.js";

// When I add hte Partnerrs card, the shape of the Sector cards changes. please help!!

function Home() {
    return (
        <div className="home-container">
        <h1>This is the home page</h1>

        <div className="home-section">
        <LogoCarousel />
        </div>

        <div className="home-section">
        <SectorCards />
        </div>    

        {/* <div className="home-section">
        <Partners/>
        </div>     */}

        <Footer />
        </div>
    );
}

export default Home;
