import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"

import contactInfoStyles from './contact-info.module.scss'

const ContactInfo = () => {
  return (
    <section className={contactInfoStyles.contactContainer}>
      <article className={contactInfoStyles.contact}>
        <div className={contactInfoStyles.contactIcon}>
          <FontAwesomeIcon icon={faPhone} size="2x" />
        </div>

        <div className={contactInfoStyles.contactCta}>
          <h3>CALL US</h3>
          <p>(562) 309-7784</p>
        </div>
      </article>

      <article className={contactInfoStyles.contact}>
        <div className={contactInfoStyles.contactIcon}>
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </div>

        <div className={contactInfoStyles.contactCta}>
          <h3>EMAIL US</h3>
          <p>ownbyjuniors@gmail.com</p>
        </div>
      </article>
    </section>
  )
}

export default ContactInfo;