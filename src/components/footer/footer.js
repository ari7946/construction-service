import React from 'react';
import { graphql, useStaticQuery} from 'gatsby';
import SocialMedia from '../social-media/social-media'
import ContactInfo from '../contact-info/contact-info'

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
    <footer className={footerStyles.footer}>
      <h4>
        Copyrights © 2020 All Rights Reserved by {data.site.siteMetadata.author}
      </h4>
    </footer>
  )
}


export default Footer;