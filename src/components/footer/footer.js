import React from 'react';
import { graphql, useStaticQuery, Link} from 'gatsby';

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
        <small className={footerStyles.copyrights}>
          Copyrights © 2021 All Rights Reserved by {data.site.siteMetadata.author}
        </small>

        <ul className={footerStyles.footerMenu}>
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
    </footer>
  )
}


export default Footer;