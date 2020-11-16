import React from 'react';
import Layout from '../components/layout/layout';
import Head from "../components/head";
import ServicesCard from '../components/service-card/services-card';
import concrete from '../images/services/concrete.jpg';

const ServicesPage = () => {
  return (
    <Layout className=''>
      <Head title="Services" />
      <ServicesCard img={concrete} />
    </Layout>
  )
}

export default ServicesPage;