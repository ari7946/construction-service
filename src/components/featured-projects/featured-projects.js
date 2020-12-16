import React from "react"
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import featuredProjectsStyles from './featured-projects.module.scss';

const FeaturedProjects = () => {
  const images = useStaticQuery(graphql`
    query {
      acapulco: file(relativePath: { eq: "images/acapulco3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      ave12: file(relativePath: { eq: "images/ave-121.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      chevys: file(relativePath: { eq: "images/chevys1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      lasBrisas: file(relativePath: { eq: "images/las-brisas1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      schoolRoof: file(relativePath: { eq: "images/school-roof1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      floorReinforcement: file(relativePath: { eq: "images/floor-reinforcement1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      whoSong: file(relativePath: { eq: "images/whosong1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      elTorito: file(relativePath: { eq: "images/el-torito1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`)

  return (
    <section>
      <div className={featuredProjectsStyles.featuredProjects}>
        <div className={featuredProjectsStyles.colOne}>
          <div className={featuredProjectsStyles.imgContainer}>
=            <Img 
              fluid={images.acapulco.childImageSharp.fluid} 
              className={featuredProjectsStyles.featuredImage}
            />
            {/* <div>Acapulco</div> */}
          </div>

          <div className={featuredProjectsStyles.imgContainer}>
            <Img 
              fluid={images.schoolRoof.childImageSharp.fluid} 
              className={featuredProjectsStyles.featuredImage}
            />
            {/* <div>School Roof</div> */}
          </div>
        </div>

        <div className={featuredProjectsStyles.colTwo}>
          <div className={featuredProjectsStyles.imgContainer}>
            <Img 
              fluid={images.lasBrisas.childImageSharp.fluid} 
              className={featuredProjectsStyles.featuredImage}
            />
            {/* <div>Las Brisas</div> */}
          </div>

          <div className={featuredProjectsStyles.imgContainer}>
            <Img 
              fluid={images.floorReinforcement.childImageSharp.fluid} 
              className={featuredProjectsStyles.featuredImage}
            />
            {/* <div>Floor Reinforcement</div> */}
          </div>
        </div>

        <div className={featuredProjectsStyles.colThree}>
          <div className={featuredProjectsStyles.imgContainer}>
            <Img 
              fluid={images.chevys.childImageSharp.fluid} 
              className={featuredProjectsStyles.featuredImage}
            />
            {/* <div>Chevy's</div> */}
          </div>

          <div className={featuredProjectsStyles.imgContainer}>
            <Img 
              fluid={images.whoSong.childImageSharp.fluid} 
              className={featuredProjectsStyles.featuredImage}
            />
            {/* <div>Who Song and Larry's</div> */}
          </div>
        </div>

        <div className={featuredProjectsStyles.colFour}>
          <div className={featuredProjectsStyles.imgContainer}>
            <Img 
              fluid={images.ave12.childImageSharp.fluid} 
              className={featuredProjectsStyles.featuredImage}
            />
            {/* <div>Bath Remodel</div> */}
          </div>

          <div className={featuredProjectsStyles.imgContainer}>
            <Img 
              fluid={images.elTorito.childImageSharp.fluid} 
              className={featuredProjectsStyles.featuredImage}
            />
            {/* <div>El Torito</div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects;
