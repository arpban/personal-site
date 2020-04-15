import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

import "../styles/home.scss"

const IndexPage = ({ data }) => (
  <Layout viewClassName="home-page">
    <SEO title="Home" />

    <Header />

    <div className="site-main">
      <div className="home-page__bio">
        <div className="wrapper-1200">
          <p>A full-stack developer 👨‍💻. Currently working as a frontend developer at <a href="https://axelerant.com" target="_blank">Axelerant</a>. Founder of <a href="https://stylesheets.dev" target="_blank">Stylesheets.dev</a>. Previously created Umbrella Note and Inclist.
          </p>

          <p>This site serves as a place to document everything I learn and make. Check out my latest work <a href="/work">here</a>.</p>
        </div>
      </div>
    </div>

    <Footer />

  </Layout>
)

export default IndexPage
