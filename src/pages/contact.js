import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

const ContactPage = () => (
  <Layout viewClassName="contact-page">
    <SEO title="Contact" />

    <Header />

    <div className="site-main">
      <div className="wrapper-1200">
        Email: arpit.bansal2010@gmail.com
      </div>
    </div>

    <Footer />
  </Layout>
)

export default ContactPage
