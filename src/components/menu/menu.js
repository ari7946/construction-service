import React, { useState, useEffect } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons"

import menuStyles from "./menu.module.scss"
import SocialMedia from "../social-media/social-media"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Menu = () => {
  const [status, setStatus] = useState(false)
  const [isDesktop, setDesktop] = useState(true)

  const updateMedia = () => {
    setDesktop(window.innerWidth > 800)
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia)
    updateMedia()
    return () => window.removeEventListener("resize", updateMedia)
  })

  const isOpen = () => {
    if (isDesktop) {
      return true
    } else if (status) {
      return true
    } else if (!status) {
      return false
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
        {isOpen() && (
          <ul className={menuStyles.navList}>
            <li>
              <AniLink
                className={menuStyles.navItem}
                fade
                activeClassName={menuStyles.activeNavItem}
                to="/"
              >
                Home
              </AniLink>
            </li>

            <li>
              <AniLink
                className={menuStyles.navItem}
                activeClassName={menuStyles.activeNavItem}
                to="/projects"
                fade
              >
                Projects
              </AniLink>
            </li>

            <li>
              <AniLink
                className={menuStyles.navItem}
                activeClassName={menuStyles.activeNavItem}
                to="/services"
                fade
              >
                Services
              </AniLink>
            </li>

            <li>
              <AniLink
                className={menuStyles.navItem}
                activeClassName={menuStyles.activeNavItem}
                to="/blog"
                fade
              >
                Blog
              </AniLink>
            </li>

            <li>
              <AniLink
                className={menuStyles.navItem}
                activeClassName={menuStyles.activeNavItem}
                to="/contact"
                fade
              >
                Contact
              </AniLink>
            </li>
          </ul>
        )}

        <SocialMedia />
      </nav>
    </>
  )
}

export default Menu
