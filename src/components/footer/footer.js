import React from 'react';
import { graphql, useStaticQuery, Link} from 'gatsby';
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
      <div className={footerStyles.footerContainer}>
        <div className={footerStyles.copyrights}>
          Copyrights © 2020 All Rights Reserved by {data.site.siteMetadata.author}
        </div>

        <div className={footerStyles.footerMenu}>
          <ul>
            <li>
              <Link 
                className={footerStyles.navItem}
                activeClassName={footerStyles.activeNavItem}
                to="/"
              >HOME</Link>
            </li>
            <li>
              <Link 
                className={footerStyles.navItem}
                activeClassName={footerStyles.activeNavItem}
                to="/projects"
              >PROJECTS</Link>
            </li>
            <li>
              <Link 
                className={footerStyles.navItem}
                activeClassName={footerStyles.activeNavItem}
                to="/services"
              >SERVICES</Link>
            </li>
            <li>
              <Link 
                className={footerStyles.navItem}
                activeClassName={footerStyles.activeNavItem}
                to="/blog"
              >BLOG</Link>
            </li>
            <li>
              <Link 
                className={footerStyles.navItem}
                activeClassName={footerStyles.activeNavItem}
                to="/contact"
              >CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}


export default Footer;