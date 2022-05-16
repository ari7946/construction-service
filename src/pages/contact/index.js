import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/layout/layout"
import Head from "../../components/head"
// import address from '../../images/address.jpg';

import contactStyles from "./contact-page.module.scss"

export const fluidImage = graphql`
  fragment fluidFeaturedProject on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

const ContactPage = () => {
  const addressImg = useStaticQuery(graphql`
    query {
      address: file(relativePath: { eq: "images/address.jpg" }) {
        ...fluidImage
      }
    }
  `)

  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = event => {
    const { name, value } = event.target
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
            <legend>EMAIL US</legend>
            <fieldset>
              <div className={contactStyles.inputTop}>
                <div className={contactStyles.inputContainer}>
                  <label htmlFor="name">Name *</label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    value={userInput.name}
                    onChange={handleChange}
                    label="Name"
                    required
                  />
                </div>

                <div className={contactStyles.inputContainer}>
                  <label htmlFor="email">Email</label>
                  <br />
                  <input
                    type="text"
                    name="email"
                    value={userInput.email}
                    onChange={handleChange}
                  />
                </div>

                <div className={contactStyles.inputContainer}>
                  <label htmlFor="phone">Phone</label>
                  <br />
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
                  <label htmlFor="subject">Subject *</label>
                  <br />
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
                  <label htmlFor="message">Message *</label>
                  <br />
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
              <button className={contactStyles.contactButton}>
                Send Email
              </button>
            </fieldset>
          </form>

          <article className={contactStyles.location}>
            <h3>OFFICE LOCATION</h3>
            <address>
              12150 Bloomfield Ave. Unit C <br /> Santa Fe Springs, CA 90670
            </address>
            {/* <img src={address} alt="office address: 12150 Bloomfield Ave. Unit C Santa Fe Springs, CA 90670"/> */}
            {/* <Img 
              fluid={addressImg.address.childImageSharp.fluid} 
              className={contactStyles.locationImg}
              alt='Location'
            /> */}
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1655.3960397064675!2d-118.06357160750977!3d33.92075048054697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2d326fe300001%3A0x287e202e7e4cf3c1!2s12150%20Bloomfield%20Ave%20Suite%20C%2C%20Santa%20Fe%20Springs%2C%20CA%2090670!5e0!3m2!1sen!2sus!4v1638664865312!5m2!1sen!2sus"
                width="350"
                height="400"
                frameBorder="0"
                style={{
                  borderRight: "2px solid #20639b",
                  borderBottom: "2px solid #20639b",
                }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              />
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
