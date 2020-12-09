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
  console.log('userInput', userInput)
  return (
    <Layout>
      <div className={contactStyles.contactPageContainer}>
        <Head title="Contact" />
        <h2>Send us an Email</h2>

        <div className={contactStyles.mainContainer} >
          <form>
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
            <button className={contactStyles.contactButton}>Send Message</button>
          </form>

          <div className={contactStyles.contactInfo}>
            <h3>OFFICE LOCATION</h3>
            <address>
              12150 Bloomfield Ave. Unit C
              Santa Fe Springs, CA 90670
            </address>
            {/* <ul>
              <li>
                <p><span>Phone: </span>(562) 309-7784</p>
              </li>
              <li>
                <p><span>Fax: </span>(562) 462-1777</p>
              </li>
              <li>
                <p><span>Email: </span>juniors2016inc@gmail.com</p>
              </li>
            </ul> */}
            <img src={address} alt=""/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage;