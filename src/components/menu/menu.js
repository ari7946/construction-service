import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons"

import menuStyles from './menu.module.scss'
import SocialMedia from '../social-media/social-media'

const Menu = () => {
  const [status, setStatus] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 800);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 800);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const isOpen = () => {
    if (isDesktop) {
      return true;
    } else if (status) {
      return true;
    } else if (!status) {
      return false;
    } 
  }
  // console.log('status', status);
  // console.log('isDesktop', isDesktop)

  return (
    <>
      <nav className={menuStyles.menuContainer}>
        <div 
          className={menuStyles.closeButton}
          onClick={() => setStatus(!status)}
        >
          <FontAwesomeIcon icon={status ? faTimes : faBars} />
        </div>
        {isOpen() &&
          <ul className={menuStyles.navList}>
            <li>
              <Link
                className={menuStyles.navItem}
                activeClassName={menuStyles.activeNavItem}
                to="/"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                className={menuStyles.navItem}
                activeClassName={menuStyles.activeNavItem}
                to="/projects"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                className={menuStyles.navItem}
                activeClassName={menuStyles.activeNavItem}
                to="/services"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                className={menuStyles.navItem}
                activeClassName={menuStyles.activeNavItem}
                to="/blog"
              >
                Blog
              </Link>
            </li>
            
            <li>
              <Link
                className={menuStyles.navItem}
                activeClassName={menuStyles.activeNavItem}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        }

        <SocialMedia className={menuStyles.SocialMedia} />
      </nav>
    </>
  )
}

export default Menu
