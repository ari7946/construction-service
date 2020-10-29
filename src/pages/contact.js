import React from 'react';

import Layout from "../components/layout/layout"
import Head from "../components/head"
import ContactInfo from '../components/contact-info/contact-info'

import contactStyles from './contact.module.scss'

const ContactPage = () => {
  return (
    <Layout>
      <div className={contactStyles.contactPageContainer}>
        <Head title="Contact" />
        <h1>Contact</h1>
        <ContactInfo />
      </div>
    </Layout>
  )
}

export default ContactPage;