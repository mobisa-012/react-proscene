import React from "react";
import './BookDemo.css';

function BookDemoToday() {
    return (
        <div className="demo-container">
        <svg 
                className="background-svg" 
                width="910" 
                height="343" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    opacity=".6" 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M526 288c0 30.376-24.624 55-55 55H55c-30.376 0-55-24.624-55-55v-445c0-30.376 24.624-55 55-55h306.5c12.426 0 22.5-10.074 22.5-22.5s10.074-22.5 22.5-22.5H855c30.376 0 55 24.624 55 55V45c0 30.376-24.624 55-55 55H581c-30.376 0-55 24.624-55 55v133Z" 
                    fill="#16213D"
                />
            </svg>
            <div className="demo-content">
                <h1 className="demo-title">
                    See how Proscene <br /> works for you
                </h1>
                <button className="demo-button">Book a Demo Today</button>
            </div>            
        </div>
    );
}

export default BookDemoToday;
