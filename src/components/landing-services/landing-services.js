import React from 'react';
import ServicesStyles from './landing-services.module.scss';
import Img from 'gatsby-image'
import { useServicesData } from '../../custom-hooks/useServicesData';

const LandingServices = () => {
  const servicesData = useServicesData();
  return (
    <section className={ServicesStyles.servicesContainer}>
      <h2 className={ServicesStyles.title}>SERVICES</h2>
      <article className={ServicesStyles.cards}>
        {servicesData.map((service) => (
          <figure className={ServicesStyles.cardContainer} key={service.serviceName}>
            <div className={ServicesStyles.imageContainer}>
              <Img 
                fluid={service.imgSrc} 
                alt={service.serviceName}
                className={ServicesStyles.image}
              />
            </div>
            <figcaption className={ServicesStyles.serviceName}>{service.serviceName}</figcaption>
          </figure>
        ))}
      </article>
    </section>

  )
}

export default LandingServices;