import React from 'react';
import BookDemoToday from '../components/BookDemo';
import Footer from '../components/Footer';
import AboutCoop from '../components/AboutCoop';
import CoopNav from '../components/CoopNav';

function CorporateSolution (){
  return (
    <div className ="">
    <AboutCoop/>
    <CoopNav/>
    <BookDemoToday/>
    <Footer/>
    </div>
  );
};

export default CorporateSolution;
