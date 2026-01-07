import { React } from "react";
import Footer from "../components/Footer";
import BookDemoToday from "../components/BookDemo";
import AboutPS from "../components/AboutPs";
import CoopNav from "../components/CoopNav";
import StrategyDesign from "../components/StrategyDesign";
import Stats from "../components/StatsSection";
import { useNavigate } from "react-router-dom";

function PublicSector() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("bookDemo");
    }
    return (
        <div className="">
        <AboutPS/>
        <CoopNav/>
        <div className="flex flex-col items-center max-w-7xl py-28 bg-white mx-auto">
            <h2 className="text-center text-5xl mb-20 text-[#16213d]  font-semibold tracking-wider">We help you</h2>
            <h2 className="text-center font-extrabold text-[#16213d] text-7xl tracking-widest">WORK WITHOUT BORDERS</h2>
        </div>
        <StrategyDesign/>
        <Stats/>
        <div className="bg-gradient-to-r from-[#e0f2f7] via-[#f0f9ff] to-[#e0f2f7] py-24 flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#16213d] mb-8 leading-tight">
          Your New <br />
          Experience Awaits
        </h1>
        <button className="bg-[#f24b00] hover:bg-[#16213d] text-white font-bold py-4 px-8 rounded-full transition duration-300"
        onClick={handleButtonClick}>
          Speak With An Expert
        </button>
      </div>
    </div>
        <BookDemoToday/>
        <Footer/>
        </div>
    );
}

export default PublicSector