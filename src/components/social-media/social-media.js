import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYelp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import socialMediaStyles from './social-media.module.scss'

const SocialMedia = () => {
  return (
    <div className={socialMediaStyles.container}>
      <div><FontAwesomeIcon icon={faFacebook} size="2x" /></div>
      <div><FontAwesomeIcon icon={faInstagram} size="2x" /></div>
      <div><FontAwesomeIcon icon={faYelp} size="2x" /></div>
    </div>
  )
}

export default SocialMedia;