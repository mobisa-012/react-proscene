import React from "react";
import SolutionThatWorkForYou from "../components/SolutionWork.js";
import BookDemoToday from "../components/BookDemo";
import Footer from "../components/Footer";
import LogoCarousel from '../components/LogoCarousel';
import ProsceneGetYou from '../components/ProsceneGetsYou';

function Solutions() {
    return(
    <div className='p-0 pb-0'>    
      <SolutionThatWorkForYou/>
      <ProsceneGetYou/>
      <div className='pt-10 pb-10'>
      <LogoCarousel /></div> 
      <BookDemoToday/>
      <Footer />
    </div> 
    );
}

export default Solutions;