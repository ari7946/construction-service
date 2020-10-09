import React from 'react';

import Layout from "../components/layout/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        The best way to reach me is via{" "}
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          @AriMercado
        </a>
        Twitter
      </p>
    </Layout>
  )
}

export default ContactPage;