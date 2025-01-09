import React from "react";
import Footer from "../components/Footer";
import SupportPackage from "../components/services-components/Support";
import WhyProscene from "../components/services-components/WhyProscene";


function Services() {
    return(
        <div className = "">
        <WhyProscene />
            <SupportPackage />            
            <Footer />
        </div>
    );
}

export default Services;