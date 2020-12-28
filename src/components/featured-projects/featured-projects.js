import React from "react"
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import featuredProjectsStyles from './featured-projects.module.scss';

export const fluidImage = graphql`
  fragment fluidFeaturedProject on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`;

const FeaturedProjects = () => {
  const images = useStaticQuery(graphql`
    query {
      acapulco: file(relativePath: { eq: "images/acapulco3.jpg" }) {
        ...fluidImage
      }

      ave12: file(relativePath: { eq: "images/ave-121.jpg" }) {
        ...fluidImage
      }

      chevys: file(relativePath: { eq: "images/chevys1.jpg" }) {
        ...fluidImage
      }

      lasBrisas: file(relativePath: { eq: "images/las-brisas1.jpg" }) {
        ...fluidImage
      }

      schoolRoof: file(relativePath: { eq: "images/school-roof1.jpg" }) {
        ...fluidImage
      }

      floorReinforcement: file(relativePath: { eq: "images/floor-reinforcement1.jpg" }) {
        ...fluidImage
      }

      whoSong: file(relativePath: { eq: "images/whosong1.jpg" }) {
        ...fluidImage
      }

      elTorito: file(relativePath: { eq: "images/el-torito1.jpg" }) {
        ...fluidImage
      }
    }
  `)

  return (
    <section>
      <h2 className={featuredProjectsStyles.mainTitle}>FEATURED PROJECTS</h2>
      <div className={featuredProjectsStyles.featuredProjects}>
        <div className={featuredProjectsStyles.colOne}>
          <div className={featuredProjectsStyles.imgContainer}>
            <Img 
              fluid={images.acapulco.childImageSharp.fluid} 
              className={featuredProjectsStyles.featuredImage}
            />
            <div className={featuredProjectsStyles.projectTitle}>School Gym</div>
          </div>

          <div className={featuredProjectsStyles.imgContainer}>
            <Img 
              fluid={images.schoolRoof.childImageSharp.fluid} 
              className={featuredProjectsStyles.featuredImage}
            />
            <div className={featuredProjectsStyles.projectTitle}>School Roof</div>
          </div>
        </div>

        <div className={featuredProjectsStyles.colTwo}>
          <div className={featuredProjectsStyles.imgContainer}>
            <Img 
              fluid={images.lasBrisas.childImageSharp.fluid} 
              className={featuredProjectsStyles.featuredImage}
            />
            <div className={featuredProjectsStyles.projectTitle}>Las Brisas</div>
          </div>

          <div className={featuredProjectsStyles.imgContainer}>
            <Img 
              fluid={images.floorReinforcement.childImageSharp.fluid} 
              className={featuredProjectsStyles.featuredImage}
            />
            <div className={featuredProjectsStyles.projectTitle}>Floor Reinforcement</div>
          </div>
        </div>

        <div className={featuredProjectsStyles.colThree}>
          <div className={featuredProjectsStyles.imgContainer}>
            <Img 
              fluid={images.chevys.childImageSharp.fluid} 
              className={featuredProjectsStyles.featuredImage}
            />
            <div className={featuredProjectsStyles.projectTitle}>Chevy's</div>
          </div>

          <div className={featuredProjectsStyles.imgContainer}>
            <Img 
              fluid={images.whoSong.childImageSharp.fluid} 
              className={featuredProjectsStyles.featuredImage}
            />
            <div className={featuredProjectsStyles.projectTitle}>Who Song and Larry's</div>
          </div>
        </div>

        <div className={featuredProjectsStyles.colFour}>
          <div className={featuredProjectsStyles.imgContainer}>
            <Img 
              fluid={images.ave12.childImageSharp.fluid} 
              className={featuredProjectsStyles.featuredImage}
            />
            <div className={featuredProjectsStyles.projectTitle}>Bath Remodel</div>
          </div>

          <div className={featuredProjectsStyles.imgContainer}>
            <Img 
              fluid={images.elTorito.childImageSharp.fluid} 
              className={featuredProjectsStyles.featuredImage}
            />
            <div className={featuredProjectsStyles.projectTitle}>El Torito</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects;
