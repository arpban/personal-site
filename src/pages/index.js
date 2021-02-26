import React from "react"
import { Link } from "gatsby"

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
          <p>Hey there 👋, </p>

          <p>
            My name is Arpit Bansal. I'm a frontend developer and UI designer.
            Currently, I run a project called{" "}
            <a href="https://stylesheets.dev" target="_blank">
              Stylesheets.dev
            </a>{" "}
            – which is a theme shop for some cool CMS platforms like Ghost.
          </p>
          <p>
            I also work with various startups as a freelance developer with a
            focus on React and Jamstack ecosystem. If you have a work
            opportunity that you'd like to discuss, then you can reach out to me
            through{" "}
            <a href="mailto:arpit@stylesheets.dev" target="_blank">
              Email
            </a>
            .
          </p>
          <p>
            This site serves as a place to document some of the things I learn
            and make. Feel free to check out the <Link to="/blog/">Blog</Link>.{" "}
          </p>
          <p>Thank you!</p>
        </div>
      </div>
    </div>

    <Footer />
  </Layout>
)

export default IndexPage
