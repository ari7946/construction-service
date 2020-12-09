import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYelp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import socialMediaStyles from './social-media.module.scss'

const SocialMedia = () => {
  return (
    <div className={socialMediaStyles.container}>
      <div>
        <a href="#">
          <FontAwesomeIcon href="#" icon={faFacebook} size="2x" target="_blank"/>
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/ownbyjrs/">
          <FontAwesomeIcon href="https://www.instagram.com/ownbyjrs/" icon={faInstagram} size="2x" target="_blank"/>
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/ownbyjrs/">
          <FontAwesomeIcon href="#" icon={faYelp} size="2x" target="_blank"/>
        </a>
      </div>
    </div>
  )
}

export default SocialMedia;