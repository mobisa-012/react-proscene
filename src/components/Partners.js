import React, { useState } from 'react';
import './Partner.css';
import futurefirst from './assets/futurefirst.jpg';
import harney from './assets/harney.jpg';
import icipe from './assets/icipe.jpg';
import mediamax from './assets/mediamax.jpg';
import ridge from './assets/ridge.jpg';
import supaloaf from './assets/supaloaf.jpg';

const partnerData = [
  { id: 1, logo: futurefirst, description: 'Coulson Harney and Co Advocates a member of Bowman and Gilfillian is a large and well-established Law firm in the world with', link: '#loadMore1' },
  { id: 2, logo: harney, description: 'International Centre of Insect Physiology and Ecology wanted to improve their video communication between Nairobi and there remote centre in Mbita, Nyanza Province.', link: '#loadMore2' },
  { id: 3, logo: icipe, description: 'Future’s first is a global Company that deals in international stocks. The branch , based in Nairobi needed an Audio Visual system that integrates the video', link: '#loadMore3' },
  { id: 4, logo: mediamax, description: 'Ridgeways Baptist Church needed a video system for their new worship facility. Currently, they have been using two portable projectors in the sanctuary', link: '#loadMore4' },
  { id: 5, logo: ridge, description: 'When Communication Authority embarked on migrating everyone to digital platform, it became necessary for one of Kenya’s largest meda houses to', link: '#loadMore5' },
  { id: 6, logo: supaloaf, description: 'In an Industry that spans in more than 25 acres, security is a major concern. Mini Group installed there new CCTV system in there Kangundo Road', link: '#loadMore6' },
];

const Card = ({ logo, description, link }) => {
  return (
    <div className="card">
      <img src={logo} alt="Logo" className="partner-Images" />
      <p className="p-4">{description}</p>
      <a href={link} className="p-4 text-indigo-600 font-semibold text-center text-sm">More info</a>
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
    <div className="maxWidthContainer max-w-7xl mx-auto px-8">
    <div className="partners-header">
        <h2 className='h2-Partners'>Trusted by the Best</h2>
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
        <span onClick={handleLoadToggle} className="load-more-text">
          {isExpanded ? (
            <>
                Load Less <span className="load-more-icon">↑</span>
            </>
            ) : (
            <>
                Load More <span className="load-more-icon">↓</span>
            </>
            )}
        </span>
      </div>
    </div>
  );
};

export default Partners;
