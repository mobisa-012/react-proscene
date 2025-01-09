import React from 'react';
import photo1 from '../components/assets/th.jpeg';
import BookDemoToday from '../components/BookDemo';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

function CorporateSolution (){
  const navigate  = useNavigate();
  
      const handleButtonClick = () => {
          navigate("/bookDemo");
      }
  return (
    <div className ="">
    <div className="bg-[#0F172A] text-white flex flex-col lg:flex-row items-center lg:justify-evenly px-20 rounded-[80px] 
      max-w-screen-xl mx-auto min-h-fit py-10 pb-12 mb-8 mt-8">
      <div className="lg:w-1/2">
        <h1 className="text-4xl font-bold mb-4 pb-8 pt-8">Corporate Production Solution</h1>
        <p className="text-lg mb-6 pb-5 mx-auto">
          Streamline and automate your entire production, packaging, and
          distribution process with a comprehensive Proscene solutions.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl"
        onClick={handleButtonClick}>
          Schedule a demo
        </button>
      </div>

      <div className="relative lg:w-1/2 mt-10 lg:mt-0">
        <div className="absolute -bottom-0 -right-0 w-32 h-32 bg-blue-800 rounded-full"></div>
        <div className="absolute top-4 right-6 w-6 h-6 bg-[#65C8FF] rounded-full"></div>
        <div className="absolute -bottom-4 right-4 w-6 h-6 bg-[#65C8FF] rounded-full"></div>
        <div className="absolute bottom-10 right-8 w-8 h-32 bg-[#FF7878] rounded-md flex flex-col items-center justify-center">
          <div className="text-white">&#9650;</div>
          <div className="text-white">&#9650;</div>
          <div className="text-white">&#9650;</div>
        </div>        

        {/* Image */}
        <div>
        <img
          src={photo1}
          alt="Agriculture ERP"
          className="rounded-2xl shadow-lg h-80 w-[85] bg-slate-100 object-cover content-center"
        />
        </div>        
      </div>
    </div>
    <BookDemoToday/>
    <Footer/>
    </div>
  );
};

export default CorporateSolution;
