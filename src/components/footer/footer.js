import React from 'react';
import { graphql, useStaticQuery} from 'gatsby';

import footerStyles from './footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer classname={footerStyles.footer}>
      <p>
        Copyrights © 2020 All Rights Reserved by {data.site.siteMetadata.author}
      </p>
    </footer>
  )
}

export default Footer;