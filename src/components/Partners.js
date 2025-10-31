import React, { useState } from 'react';
import './Partner.css';
import ICIPE from './assets/ICIPE.png';
import harney from './assets/harney.webp';
import MicrosoftKenya from './assets/microsoftKenya.png';
import SBM from './assets/SBM.png';
import AUA from './assets/AUA.png';
import NCBA from './assets/NCBA2.png';
import DHL from './assets/DHL.png';
import HHM from './assets/HHM.png';
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const partnerData = [
  { 
    id: 1, 
    logo: MicrosoftKenya, 
    description: 'Proscene Systems Limited delivered an exceptional AV upgrade for our meeting room. Their professionalism, technical expertise, and seamless implementation exceeded our expectations. We are extremely satisfied with the results and highly recommend their services. ~ Microsoft Kenya', 
    link: '#loadMore1' 
  },
  { 
    id: 2, 
    logo: SBM, 
    description: "Proscene Systems Limited has been our trusted audio-visual solutions partner for over 10 years, supporting our branches and head office with advanced technology, installation, and ongoing service. They are reliable, professional, and highly recommended.", 
    link: '#loadMore2' 
  },
  { 
    id: 3, 
    logo: harney, 
    description: 'Proscene Systems Limited has consistently delivered reliable audio-visual services and maintenance for our organization. Their professionalism and high-quality solutions make them easy to recommend to any organization seeking dependable AV services.', 
    link: '#loadMore3' 
  },
  { 
    id: 4, 
    logo: AUA, 
    description: 'Proscene Systems Limited has been a dependable partner, providing professional audio-visual services and continued maintenance support for our organization. Their expertise and service quality make them highly recommended for organizations seeking reliable AV solutions.', 
    link: '#loadMore4' 
  },
  { 
    id: 5, 
    logo: NCBA, 
    description: 'Proscene Systems Limited supplied and installed digital signage displays across our branches. The delivery was efficient and the screens performed exactly as expected.', 
    link: '#loadMore5' 
  },
  { 
    id: 6, 
    logo: MicrosoftKenya, 
    description: 'Proscene Systems Limited delivered an exceptional AV upgrade for our meeting room. Their professionalism, expertise, and attention to detail ensured a seamless implementation and a user-friendly, high-performing system ~ Microsoft Nigeria', 
    link: '#loadMore6' 
  },
  { 
    id: 7, 
    logo: MicrosoftKenya, 
    description: 'Proscene Systems Limited delivered an outstanding AV upgrade to our meeting room. We are very pleased with the outcome and confidently recommend Proscene Systems Limited for dependable, high-quality AV integration services. ~ Microsoft Tunisia', 
    link: '#loadMore4' 
  },
  { 
    id: 8, 
    logo: ICIPE, 
    description: 'We partnered with Proscene Systems Limited for a meeting-room AV upgrade and were extremely impressed. They delivered a seamless, well-executed solution that is modern, easy to use, and has greatly improved our meeting experience. Their professionalism and technical capability make them a standout choice for AV projects', 
    link: '#loadMore5' 
  },
  { 
    id: 9, 
    logo: HHM, 
    description: 'Proscene Systems Limited delivered an exceptional AV upgrade for our meeting room. Their professionalism, expertise, and attention to detail ensured a seamless implementation and a user-friendly, high-performing system ~ Microsoft Nigeria', 
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