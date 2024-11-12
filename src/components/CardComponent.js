import React from 'react';
import './CardComponent.css';

function CardComponent({ title, description, imageUrl, link }) {
  return (
    <div className="card">
      <div className="card-left">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <a href={link} className="read-more-link">Read More</a>
      </div>
      <div className="card-right">
        <img src={imageUrl} alt={title} className="card-image" />
      </div>
    </div>
  );
}

export default CardComponent;