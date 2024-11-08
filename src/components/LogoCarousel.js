import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './LogoCarousel.css';
import logo from './logo.png';
import log1 from './log.png';

const LogoCarousel = () => {
    const logos = [
        {src: log1, alt: 'Logo 1',},
        {src: logo, alt: 'Logo 2'},
        {src: log1, alt: 'Logo 3'},
    ];

    return (
    <Carousel 
    autoPlay 
    infiniteLoop 
    showThumbs = {false}
    showArrows = {false}
    showStatus = {false}
    interval={5000}
    transitionTime={1500}
    >
    {logos.map((logo, index) => (
        <div key={index}>
          <img src={logo.src} alt={logo.alt} />
        </div>
      ))}
    </Carousel>
    );
}

export default LogoCarousel