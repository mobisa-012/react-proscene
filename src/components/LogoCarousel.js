import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './LogoCarousel.css';
import avaya from './assets/avaya.jpg';
import barco from './assets/barco.jpg';
import creston from './assets/creston.jpg';
import epson from './assets/epson.jpg';
import extron from './assets/extron.jpg';
import LG from './assets/LG.jpg';
import lifesize from './assets/lifesize.jpg';
import optoma from './assets/optoma.jpg';
import panasonic from './assets/panasonic.jpg';
import samsung from './assets/samsung.jpg';

const LogoCarousel = () => {
  const logos = [
    { src: avaya, alt: 'Avaya' },
    { src: barco, alt: 'Barco' },
    { src: creston, alt: 'Creston' },
    { src: epson, alt: 'Epson' },
    { src: extron, alt: 'Extron' },
    { src: LG, alt: 'LG' },
    { src: lifesize, alt: 'Lifesize' },
    { src: optoma, alt: 'Optoma' },
    { src: panasonic, alt: 'Panasonic' },
    { src: samsung, alt: 'Samsung' },
  ];

  return (
    <div className="logo-carousel">
      <h2 className="carousel-heading">
      We partner with the best
      </h2>
      <div className="carousel">
        <div className="carousel-content">
          {logos.map((logo, index) => (
            <div key={index} className="carousel-item">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="carousel-item">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
