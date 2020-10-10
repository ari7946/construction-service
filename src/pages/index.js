import React from "react";
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import Head from '../components/head';
import FeaturedProjects from '../components/featured-projects/featured-projects'
import Personnel from '../components/personnel/personnel'

const indexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <main>
        <FeaturedProjects />
        <hr />
        <Personnel />
      </main>
    </Layout>
  )
}

export default indexPage;