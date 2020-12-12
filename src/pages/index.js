import React from "react";
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import Head from '../components/head';
import FeaturedProjects from '../components/featured-projects/featured-projects'
import Personnel from '../components/personnel/personnel'

const indexPage = () => {
  return (
    <Layout>
      <Head 
        title="Home" 
        description="Junior's Inc is a construction company based in Los Angeles that specializes in commercial and residential projects"
      />
      <main>
        <FeaturedProjects />
        <hr />
        <Personnel />
      </main>
    </Layout>
  )
}

export default indexPage;