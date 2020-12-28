import React from 'react';
import cardStyles from './services-card.module.scss';
import Img from 'gatsby-image'
import { useServicesData } from '../../custom-hooks/useServicesData';

const ServicesCards = () => {
  const servicesData = useServicesData();
  return (
    <div className={cardStyles.servicesContainer}>
      {servicesData.map((service) => (
        <div className={cardStyles.cardContainer} key={service.serviceName}>
          <div className={cardStyles.imageContainer}>
            <Img 
              fluid={service.imgSrc} 
              alt={service.serviceName}
              className={cardStyles.image}
            />
          </div>
          <h4 className={cardStyles.serviceName}>{service.serviceName}</h4>
        </div>
      ))}
    </div>
  )
}

export default ServicesCards;