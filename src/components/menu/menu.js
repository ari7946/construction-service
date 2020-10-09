import React from "react"
import { Link } from "gatsby"

import menuStyles from './menu.module.scss'

const Menu = () => {
  return (
    <nav>
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
            to="/blog"
          >
            Blog
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
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
