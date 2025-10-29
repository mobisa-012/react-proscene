import React, { useState } from 'react';
import './Partner.css';
import safaricom from './assets/safaricom.png';
import harney from './assets/harney.webp';
import cocacola from './assets/cocacola.png';
import NCBA from './assets/NCBA2.png';
import DHL from './assets/DHL.png';
import UON from './assets/UON.jpg';
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const partnerData = [
  { 
    id: 1, 
    logo: harney, 
    description: 'Proscene gave us courtroom-grade clarity in our boardrooms. The technology is discreet, secure, and intuitive—our clients immediately notice the professionalism it adds.', 
    link: '#loadMore1' 
  },
  { 
    id: 2, 
    logo: cocacola, 
    description: "I can confidently say the Proscene team transformed our meeting and event spaces. The audio and visuals are world-class, and they've made collaboration effortless for us.", 
    link: '#loadMore2' 
  },
  { 
    id: 3, 
    logo: safaricom, 
    description: 'I highly recommend their solutions. Our boardrooms and training suites run smoothly, the systems are reliable, and our teams connect with customers better than ever.', 
    link: '#loadMore3' 
  },
  { 
    id: 4, 
    logo: DHL, 
    description: 'They modernized our control rooms and warehouses seamlessly. Communication is clear, downtime is minimal, and the scalable design supports our fast-paced logistics operations perfectly.', 
    link: '#loadMore4' 
  },
  { 
    id: 5, 
    logo: NCBA, 
    description: 'With the Proscene AV setup, our hybrid meetings are smooth and feel in-person. The rollout was easy, and their support has been consistently excellent.', 
    link: '#loadMore5' 
  },
  { 
    id: 6, 
    logo: UON, 
    description: 'Our lecture halls and hybrid classrooms were upgraded without disruption. Faculty finds the systems simple, and students benefit from clear visuals and audio everywhere.', 
    link: '#loadMore6' 
  },
];

const Card = ({ logo, description, link }) => {
  return (
    <div className="card hover:shadow-[0_4px_6px_rgba(0,0,0,0.2)] transition-shadow duration-300 rounded-[17px]">
      <div>
        <img 
          src={logo} 
          style={{width:'60%', aspectRatio:'3/1', margin:'1em'}} 
          alt="Logo" 
          className="partner-Images" 
        />
      </div>
      <p className="p-4" style={{color:'#16213d', fontSize:'400'}}>
        {description}
      </p>
    </div>
  );
};

const Partners = () => {
  const [visibleCards, setVisibleCards] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLoadToggle = () => {
    if (isExpanded) {
      setVisibleCards(3);
    } else {
      setVisibleCards(partnerData.length);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-7xl mx-auto px-3">
      <div className="partners-header">
        <h2 className='h2-Partners text-[#16213d]'>Trusted by the best</h2>
      </div>
      
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {partnerData.slice(0, visibleCards).map((card) => (
          <Card
            key={card.id}
            logo={card.logo}
            description={card.description}
            link={card.link}
            className="px-3"
          />
        ))}
      </div>

      <div className="load-more-container">
        <span 
          onClick={handleLoadToggle} 
          className="load-more-text cursor-pointer flex items-center gap-2"
        >
          {isExpanded ? (
            <div className='flex flex-col items-center gap-3' style={{fontWeight:'400', color:'#ff4e00'}}>
              Load Less <FaChevronUp className="load-more-icon text-lg" />
            </div>
          ) : (
            <div className='flex flex-col items-center gap-3' style={{fontWeight:'400', color:'#ff4e00'}}>
              Load More <FaChevronDown className="load-more-icon text-lg" />
            </div>
          )}
        </span>
      </div>
    </div>
  );
};

export default Partners;