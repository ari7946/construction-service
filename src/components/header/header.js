import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"

import headerStyles from './header.module.scss'
import logo from '../../images/logo3.png'

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
    <header className={headerStyles.header}>
      <div>
        <Link className={headerStyles.title} to="/">
          <img src={logo} alt={data.site.siteMetadata.title} />
        </Link>
      </div>
      <div className={headerStyles.contact}>
        <h1>
          <span className="icon">
            <FontAwesomeIcon icon={faPhone} size="2x" />
          </span>
          <span>
            CALL US
            <br />
            (562) 309-7784
          </span>
        </h1>
        <h1>
          <span>
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </span>
          <span>
            EMAIL US <br />
            juniors2016inc@gmail.com
          </span>
        </h1>
      </div>
    </header>
  )
}

export default Header;