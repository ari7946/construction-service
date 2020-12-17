import React from 'react';
import Layout from '../components/layout/layout';
import Head from "../components/head";
import ServicesCards from '../components/service-card/services-card';
import servicesStyles from './services-page.module.scss';

const ServicesPage = () => {
  return (
    <Layout className=''>
      <Head 
        title="Services" 
        description="We offer a variety of services including concrete, doors and windows, drywall, electricity, excavation, floor and tile, foundation, framing, heating and cooling, masonry, roofing, stucco"
      />
      <div className={servicesStyles.servicesContainer}>
        <ServicesCards />
      </div>
    </Layout>
  )
}

export default ServicesPage;