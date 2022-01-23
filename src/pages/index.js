import React from "react";

import Layout from '../components/layout/layout';
import Head from '../components/head';
import FeaturedProjects from '../components/featured-projects/featured-projects'
import Personnel from '../components/personnel/personnel'
import BlockButton from '../components/block-button/block-button'
import LandingServices from '../components/landing-services/landing-services'

const indexPage = () => {
  return (
    <Layout>
      <Head 
        title="Home" 
        description="Junior's Inc is a construction company based in Los Angeles that specializes in commercial and residential projects"
      />
      <main>
        <FeaturedProjects />
        <BlockButton text="SEE MORE PROJECTS" location='projects' />
        <LandingServices />
        <BlockButton text="CONTACT US FOR AN ESTIMATE" location='contact' />
        {/* <Personnel /> */}
      </main>
    </Layout>
  )
}

export default indexPage;