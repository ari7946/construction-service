import React from "react";
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import Head from '../components/head';
import FeaturedProjects from '../components/featured-projects/featured-projects'

const indexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <main>
        <FeaturedProjects />
      </main>
    </Layout>
  )
}

export default indexPage;