import React from 'react';
import cardStyles from './services-card.module.scss';

const ServicesPage = ({ serviceName, imgSrc }) => {
  console.log('services', imgSrc);
  return (
    <div className={cardStyles.cardContainer}>
      <div className={cardStyles.imageContainer}>
        <img src={imgSrc} alt={serviceName} />
      </div>
      <h4>{serviceName}</h4>
    </div>
  )
}

export default ServicesPage;