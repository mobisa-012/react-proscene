import React from 'react';
import BookDemoToday from '../components/BookDemo';
import Footer from '../components/Footer';
import LogoCarousel from '../components/LogoCarousel';

function Sector() {
  return (
    <div className='p-0 pb-0'>    
      <div className='pt-10 pb-10'>
      <LogoCarousel /></div> 
      <BookDemoToday/>
      <Footer />
    </div>  
  );
}

export default Sector