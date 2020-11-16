import React from 'react';
import servicesStyles from './services-card.module.scss';

const ServicesPage = ({ img }) => {
  return (
    <div className={servicesStyles.servicesContainer}>
      <p>Services Card</p>
      <img src={img} alt="concrete"/>
    </div>
  )
}

export default ServicesPage;