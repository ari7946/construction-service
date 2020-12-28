// currently used in the services card component
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const useServicesData = () => {

  const servicesImages = useStaticQuery(graphql`
      query {
        concrete: file(relativePath: { eq: "images/services/concrete.jpg" }) {
          ...fluidImage
        }

        doorsAndWindows: file(relativePath: { eq: "images/services/doors_and_windows.jpg" }) {
          ...fluidImage
        }

        drywall: file(relativePath: { eq: "images/services/drywall2.jpg" }) {
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
        serviceName: 'Concrete',
        imgSrc: servicesImages.concrete.childImageSharp.fluid,
      },
      {
        serviceName: 'Doors and Windows',
        imgSrc: servicesImages.doorsAndWindows.childImageSharp.fluid,
      },
      {
        serviceName: 'Drywall',
        imgSrc: servicesImages.drywall.childImageSharp.fluid,
      },
      {
        serviceName: 'Electricity',
        imgSrc: servicesImages.electricity.childImageSharp.fluid,
      },
      {
        serviceName: 'Excavation',
        imgSrc: servicesImages.excavation.childImageSharp.fluid,
      },
      {
        serviceName: 'Floor and Tile',
        imgSrc: servicesImages.flooringAndTile.childImageSharp.fluid,
      },
      {
        serviceName: 'Foundation',
        imgSrc: servicesImages.foundation.childImageSharp.fluid,
      },
      {
        serviceName: 'Framing',
        imgSrc: servicesImages.framing.childImageSharp.fluid,
      }, 
      {
        serviceName: 'Heating and Cooling',
        imgSrc: servicesImages.heatingAndCooling.childImageSharp.fluid,
      },
      {
        serviceName: 'Masonry',
        imgSrc: servicesImages.masonry.childImageSharp.fluid,
      },
      {
        serviceName: 'Plumbing',
        imgSrc: servicesImages.plumbing.childImageSharp.fluid,
      },
      {
        serviceName: 'Roofing',
        imgSrc: servicesImages.roofing.childImageSharp.fluid,
      },
    ];

    return servicesData;
}