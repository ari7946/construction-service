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
          <figure className={featuredProjectsStyles.imgContainer}>
            <Img 
              fluid={images.acapulco.childImageSharp.fluid} 
              className={featuredProjectsStyles.featuredImage}
              alt='Acapulco'
            />
            <figcaption className={featuredProjectsStyles.projectTitle}>School Gym</figcaption>
          </figure>

          <figure className={featuredProjectsStyles.imgContainer}>
            <Img 
              fluid={images.schoolRoof.childImageSharp.fluid} 
              className={featuredProjectsStyles.featuredImage}
              alt='School roof'
            />
            <figcaption className={featuredProjectsStyles.projectTitle}>School Roof</figcaption>
          </figure>
        </div>

        <div className={featuredProjectsStyles.colTwo}>
          <figure className={featuredProjectsStyles.imgContainer}>
            <Img 
              fluid={images.lasBrisas.childImageSharp.fluid} 
              className={featuredProjectsStyles.featuredImage}
              alt='Las brisas'
            />
            <figcaption className={featuredProjectsStyles.projectTitle}>Las Brisas</figcaption>
          </figure>

          <figure className={featuredProjectsStyles.imgContainer}>
            <Img 
              fluid={images.floorReinforcement.childImageSharp.fluid} 
              className={featuredProjectsStyles.featuredImage}
              alt='Floor reinforcement'
            />
            <figcaption className={featuredProjectsStyles.projectTitle}>Floor Reinforcement</figcaption>
          </figure>
        </div>

        <div className={featuredProjectsStyles.colThree}>
          <figure className={featuredProjectsStyles.imgContainer}>
            <Img 
              fluid={images.chevys.childImageSharp.fluid} 
              className={featuredProjectsStyles.featuredImage}
              alt='Chevys'
            />
            <figcaption className={featuredProjectsStyles.projectTitle}>Chevy's</figcaption>
          </figure>

          <figure className={featuredProjectsStyles.imgContainer}>
            <Img 
              fluid={images.whoSong.childImageSharp.fluid} 
              className={featuredProjectsStyles.featuredImage}
              alt="Who Song and Larry's"
            />
            <figcaption className={featuredProjectsStyles.projectTitle}>Who Song and Larry's</figcaption>
          </figure>
        </div>

        <div className={featuredProjectsStyles.colFour}>
          <figure className={featuredProjectsStyles.imgContainer}>
            <Img 
              fluid={images.ave12.childImageSharp.fluid} 
              className={featuredProjectsStyles.featuredImage}
              alt="Ave 12 aparments"
            />
            <figcaption className={featuredProjectsStyles.projectTitle}>Bath Remodel</figcaption>
          </figure>

          <figure className={featuredProjectsStyles.imgContainer}>
            <Img 
              fluid={images.elTorito.childImageSharp.fluid} 
              className={featuredProjectsStyles.featuredImage}
              alt="El Torito"
            />
            <figcaption className={featuredProjectsStyles.projectTitle}>El Torito</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects;
