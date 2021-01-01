import React, { useState } from 'react';

import Layout from "../components/layout/layout"
import Head from "../components/head"
import address from '../images/address.jpg';

import contactStyles from './contact-page.module.scss';

const ContactPage = () => {
  const [userInput, setUserInput] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = event => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value })
  }

  return (
    <Layout>
      <section className={contactStyles.contactPageContainer}>
        <Head 
          title="Contact" 
          description="Contact us | (562) 309-7784 | ownbyjuniors@gmail.com | 12150 Bloomfield Ave. Unit C Santa Fe Springs, CA 90670"
        />

        <div className={contactStyles.mainContainer}>        
          <form>
            <legend>Send us an Email</legend>
            <fieldset>
              <div className={contactStyles.inputTop}>
                <div className={contactStyles.inputContainer}>
                  <label for="name">Name *</label><br />
                  <input 
                    type="text"
                    name="name"
                    value={userInput.name}
                    onChange={handleChange}
                    label='Name'
                    required
                  />
                </div>

                <div className={contactStyles.inputContainer}>
                  <label for="email">Email</label><br />
                  <input 
                    type="text"
                    name="email"
                    value={userInput.email}
                    onChange={handleChange}
                  />
                </div>

                <div className={contactStyles.inputContainer}>
                  <label for="phone">Phone</label><br />
                  <input 
                    type="text"
                    name="phone"
                    value={userInput.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={contactStyles.inputBottom}>
                <div className={contactStyles.inputContainer}>
                  <label for="subject">Subject *</label><br />
                  <input 
                    className={contactStyles.inputSubject} 
                    type="text"
                    name="subject"
                    value={userInput.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={contactStyles.inputContainer}>
                  <label for="message">Message *</label><br />
                  <textarea 
                    type="textarea"
                    name="message"
                    value={userInput.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <br />
              <button className={contactStyles.contactButton}>Send Email</button>
            </fieldset>  
          </form>

          <article className={contactStyles.location}>
            <h3>OFFICE LOCATION</h3>
            <address>
              12150 Bloomfield Ave. Unit C
              Santa Fe Springs, CA 90670
            </address>
            <img src={address} alt="office address: 12150 Bloomfield Ave. Unit C Santa Fe Springs, CA 90670"/>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage;