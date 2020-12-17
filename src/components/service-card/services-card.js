import React from 'react';
import cardStyles from './services-card.module.scss';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

const ServicesCards = () => {
  const servicesImages = useStaticQuery(graphql`
    query {
      concrete: file(relativePath: { eq: "images/services/concrete.jpg" }) {
        ...fluidImage
      }

      doorsAndWindows: file(relativePath: { eq: "images/services/doors_and_windows.jpg" }) {
        ...fluidImage
      }

      drywall: file(relativePath: { eq: "images/services/drywall.jpg" }) {
        ...fluidImage
      }

      electricity: file(relativePath: { eq: "images/services/electricity.jpg" }) {
        ...fluidImage
      }

      excavation: file(relativePath: { eq: "images/services/excavation.jpg" }) {
        ...fluidImage
      }

      flooringAndTile: file(relativePath: { eq: "images/services/flooring_and_tile.jpg" }) {
        ...fluidImage
      }

      foundation: file(relativePath: { eq: "images/services/foundation.jpg" }) {
        ...fluidImage
      }

      framing: file(relativePath: { eq: "images/services/framing.jpg" }) {
        ...fluidImage
      }

      heatingAndCooling: file(relativePath: { eq: "images/services/heating-and-cooling.jpg" }) {
        ...fluidImage
      }

      masonry: file(relativePath: { eq: "images/services/masonry.jpg" }) {
        ...fluidImage
      }

      plumbing: file(relativePath: { eq: "images/services/plumbing.jpg" }) {
        ...fluidImage
      }

      roofing: file(relativePath: { eq: "images/services/roofing.jpg" }) {
        ...fluidImage
      }

      stucco: file(relativePath: { eq: "images/services/stucco.jpg" }) {
        ...fluidImage
      }
    }
  `)

  const servicesData = [
    {
      serviceName: 'concrete',
      imgSrc: servicesImages.concrete.childImageSharp.fluid,
    },
    {
      serviceName: 'doors and windows',
      imgSrc: servicesImages.doorsAndWindows.childImageSharp.fluid,
    },
    {
      serviceName: 'drywall',
      imgSrc: servicesImages.drywall.childImageSharp.fluid,
    },
    {
      serviceName: 'electricity',
      imgSrc: servicesImages.electricity.childImageSharp.fluid,
    },
    {
      serviceName: 'excavation',
      imgSrc: servicesImages.excavation.childImageSharp.fluid,
    },
    {
      serviceName: 'floor and tile',
      imgSrc: servicesImages.flooringAndTile.childImageSharp.fluid,
    },
    {
      serviceName: 'foundation',
      imgSrc: servicesImages.foundation.childImageSharp.fluid,
    },
    {
      serviceName: 'framing',
      imgSrc: servicesImages.framing.childImageSharp.fluid,
    }, 
    {
      serviceName: 'heating and cooling',
      imgSrc: servicesImages.heatingAndCooling.childImageSharp.fluid,
    },
    {
      serviceName: 'masonry',
      imgSrc: servicesImages.masonry.childImageSharp.fluid,
    },
    {
      serviceName: 'plumbing',
      imgSrc: servicesImages.plumbing.childImageSharp.fluid,
    },
    {
      serviceName: 'roofing',
      imgSrc: servicesImages.roofing.childImageSharp.fluid,
    },
    {
      serviceName: 'stucco',
      imgSrc: servicesImages.stucco.childImageSharp.fluid,
    },
  ];

  return (
    <div className={cardStyles.servicesContainer}>
      {servicesData.map((service) => (
        <div className={cardStyles.cardContainer} key={service.serviceName}>
          <div className={cardStyles.imageContainer}>
            <Img 
              fluid={service.imgSrc} 
              alt={service.serviceName}
              className={cardStyles.image}
            />
          </div>
          <h4 className={cardStyles.serviceName}>{service.serviceName}</h4>
        </div>
      ))}
    </div>
  )
}

export default ServicesCards;