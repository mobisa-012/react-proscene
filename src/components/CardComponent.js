import React from 'react';

function CardComponent({ title, description, imageUrl, link }) {
  return (
    <div className="sector-card">
      <div className="flex flex-col justify-between gap-3 flex-1">
        <h2 className="font-bold text-indigo-700 text-2xl lg:text-5xl tracking-wide">{title}</h2>
        <p className="font-normal text-black lg:w-[70%] sm:w-[80%] tracking-normal">{description}</p>
        <a href={link} className="text-[#368cee] font-medium">Read More</a>
      </div>
      <div className="h-96 w-96 object-cover content-center">
        <img src={imageUrl} alt={title} className="h-96 w-full content-center object-cover rounded-2xl" />
      </div>
    </div>
  );
}

export default CardComponent;