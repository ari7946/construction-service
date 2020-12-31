import { graphql, useStaticQuery } from 'gatsby';

export const useProjectPageData = () => {
  const projectPageImages = useStaticQuery(graphql`
    query {
      allContentfulProjects {
        edges {
          node {
            name
            media {
              file {
                fileName
                url
                contentType
              }
            }
          }
        }
      }
    }
  `)

  return projectPageImages;
}
