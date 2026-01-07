import React, { useState } from 'react';
import CardComponent from './CardComponent';
import hc from './assets/Medical.jpg';
import legal from './assets/legal.jpeg';
import ed from './assets/Education.jpg';
import coop from './assets/indeed-offices.jpg';
import ps from './assets/bigscreen.jpg';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

function SectorCards() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  const cards = [
    { 
      image: coop, 
      title: 'Find out how Proscene empowers Corporate businesses with cutting-edge solutions', 
      description: "Find seamless integration of display, distribution, and control systems, designed to elevate your business experience and boost productivity with Proscene&apos;s top-tier solutions.", 
      link: '/corporate',
    },
    { 
      image: ed, 
      title: 'Find the perfect solution for Education with Proscene&apos;s innovative technologies', 
      description: "Unlock dynamic learning environments with tailored solutions that inspire and engage students and teachers, enhancing the educational experience with Proscene&apos;s expertise.", 
      link: '/education' ,
    },
    { 
      image: ps, 
      title: 'Find out how Proscene transforms Public Sector operations with advanced tech', 
      description: 'Revolutionize public service delivery with Proscene&apos;s advanced audiovisual solutions, streamlining operations and improving communication across government sectors.', 
      link: '/publicSector' ,
    },
    { 
      image: hc, 
      title: 'Find the future of Healthcare with Proscene&apos;s collaboration tools', 
      description: 'Enhance patient care and medical collaboration across East Africa with Proscene&apos;s state-of-the-art telehealth solutions and telemedicine tools.',
      link: '/healthcare',
    },
    { 
      image: legal, 
      title: 'Find out how Proscene enhances Legal Collaboration with seamless technology', 
      description: 'Transform the way legal professionals collaborate with Proscene&apos;s cutting-edge telepresence solutions, enabling effective consultation and saving time on travel', 
      link: '/legalCollaboration' ,
    },
  ];

  const handlePreviousCard = () => {
    setSelectedCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleNextCard = () => {
    setSelectedCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div className="max-w-7xl flex flex-col justify-between items-center my-12" style={{maxWidth:'1400px', margin:'0 auto'}}>
      <div className='ml-2 mr-2 mb-2'>
        <CardComponent
          title={cards[selectedCardIndex].title}
          description={cards[selectedCardIndex].description}
          imageUrl={cards[selectedCardIndex].image}
          link= {cards[selectedCardIndex].link}
        />
      </div>
      <div className='flex gap-2'>
        <div 
          className="bg-[#f24b00] rounded-full p-2 cursor-pointer hover:bg-[#16213d] transition-colors duration-300" 
          onClick={handlePreviousCard}
        >
          <ArrowBackOutlinedIcon className="text-white" />
        </div>
        <div 
          className="bg-[#f24b00] rounded-full p-2 cursor-pointer hover:bg-[#16213d] transition-colors duration-300" 
          onClick={handleNextCard}
        >
          <ArrowForwardOutlinedIcon className="text-white"/>
        </div>
      </div>
    </div>
  );
}

export default SectorCards;