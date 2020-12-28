import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import ContactInfo from '../contact-info/contact-info';

import headerStyles from './header.module.scss'
import logo from '../../images/logo31.png'
import Menu from '../menu/menu';

const Header = () => {
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
    <div className={headerStyles.headerContainer}>
      <header className={headerStyles.header}>
        <div className={headerStyles.logo}>
          <Link to="/">
            <img src={logo} alt={data.site.siteMetadata.title} />
          </Link>
        </div>
        <ContactInfo />
      </header>
      <h1 className={headerStyles.siteDescription}>Junior's Construction is a residential and commercial construction company based in Los Angeles, California.</h1>
      <Menu />
    </div>
  )
}

export default Header;