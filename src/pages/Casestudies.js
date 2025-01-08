import React from "react";
import Footer from "../components/Footer";
import BookDemoToday from "../components/BookDemo.js";
import WhatCustomersSay from "../components/case-studies-components/WhatCustomersSay.js";
import FeaturedStudies from "../components/case-studies-components/featured_studies.js";

function Casestudies() {
    return(
        <div className = ''>        
        <WhatCustomersSay/>
        <div className= "pt-10 pb-10">
        <h3 className="text-center text-2xl font-bold">Featured Case studies</h3>
        </div>
        <div className="">
        <FeaturedStudies/>
        </div> 
        <BookDemoToday/>
        <Footer/>
        </div>
    );
}

export default Casestudies;