import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Head = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Helmet>
      <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
      {/* The charset, viewport and author meta tags will always have the same value, so we hard code them! */}
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
    </Helmet>
  )
}

export default Head;