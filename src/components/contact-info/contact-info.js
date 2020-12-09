import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"

import contactInfoStyles from './contact-info.module.scss'

const ContactInfo = () => {
  return (
    <div className={contactInfoStyles.contactContainer}>
      <div className={contactInfoStyles.contact}>
        <div className={contactInfoStyles.contactIcon}>
          <FontAwesomeIcon icon={faPhone} size="2x" />
        </div>

        <div className={contactInfoStyles.contactCta}>
          <h3>CALL US</h3>
          <p>(562) 309-7784</p>
        </div>
      </div>

      <div className={contactInfoStyles.contact}>
        <div className={contactInfoStyles.contactIcon}>
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </div>

        <div className={contactInfoStyles.contactCta}>
          <h3>EMAIL US</h3>
          <p>ownbyjuniors@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo;