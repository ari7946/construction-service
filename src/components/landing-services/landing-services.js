import React from 'react';
import ServicesStyles from './landing-services.module.scss';
import Img from 'gatsby-image'
import { useServicesData } from '../../custom-hooks/useServicesData';

const LandingServices = () => {
  const servicesData = useServicesData();
  return (
    <div className={ServicesStyles.servicesContainer}>
      <h2 className={ServicesStyles.title}>SERVICES</h2>
      <div className={ServicesStyles.cards}>
        {servicesData.map((service) => (
          <div className={ServicesStyles.cardContainer} key={service.serviceName}>
            <div className={ServicesStyles.imageContainer}>
              <Img 
                fluid={service.imgSrc} 
                alt={service.serviceName}
                className={ServicesStyles.image}
              />
            </div>
            <h4 className={ServicesStyles.serviceName}>{service.serviceName}</h4>
          </div>
        ))}
      </div>
    </div>

  )
}

export default LandingServices;