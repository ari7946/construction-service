import React from 'react';
import Layout from '../components/layout/layout';
import Head from "../components/head";
import ServicesCard from '../components/service-card/services-card';
import servicesStyles from './services-page.module.scss';

import concrete from '../images/services/concrete.jpg';
import doors_and_windows from '../images/services/doors_and_windows.jpg';
import drywall from '../images/services/drywall.jpg';
import electricity from '../images/services/electricity.jpg';
import exavation from '../images/services/excavation.jpg';
import flooring_and_tile from '../images/services/flooring_and_tile.jpg';
import foundation from '../images/services/foundation.jpg';
import framing from '../images/services/framing.jpg';
import heating_and_cooling from '../images/services/heating-and-cooling.jpg';
import masonry from '../images/services/masonry.jpg';
import plumbing from '../images/services/plumbing.jpg';
import roofing from '../images/services/roofing.jpg';
import stucco from '../images/services/stucco.jpg';

const servicesData = [
  {
    serviceName: 'concrete',
    imgSrc: concrete,
  },
  {
    serviceName: 'doors and windows',
    imgSrc: doors_and_windows,
  },
  {
    serviceName: 'drywall',
    imgSrc: drywall,
  },
  {
    serviceName: 'electricity',
    imgSrc: electricity,
  },
  {
    serviceName: 'excavation',
    imgSrc: exavation,
  },
  {
    serviceName: 'floor and tile',
    imgSrc: flooring_and_tile,
  },
  {
    serviceName: 'foundation',
    imgSrc: foundation,
  },
  {
    serviceName: 'framing',
    imgSrc: framing,
  }, 
  {
    serviceName: 'heating and cooling',
    imgSrc: heating_and_cooling,
  },
  {
    serviceName: 'masonry',
    imgSrc: masonry,
  },
  {
    serviceName: 'plumbing',
    imgSrc: plumbing,
  },
  {
    serviceName: 'roofing',
    imgSrc: roofing,
  },
  {
    serviceName: 'stucco',
    imgSrc: stucco,
  }

];


const ServicesPage = () => {
  return (
    <Layout className=''>
      <Head 
        title="Services" 
        description="We offer a variety of services including concrete, doors and windows, drywall, electricity, excavation, floor and tile, foundation, framing, heating and cooling, masonry, roofing, stucco"
      />
      <div className={servicesStyles.servicesContainer}>
        {servicesData.map(({ serviceName, imgSrc}) => {
          return (
            <ServicesCard serviceName={serviceName} imgSrc={imgSrc} />
          )
        })}
      </div>
    </Layout>
  )
}

export default ServicesPage;