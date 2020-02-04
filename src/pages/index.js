import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header/Header"
import WorkCard from "../components/WorkCard/WorkCard"
import Footer from "../components/Footer/Footer"

import "../styles/home.scss"

const IndexPage = ({ data }) => (
  <Layout viewClassName="home-page">
    <SEO title="Home" />
    
    <Header />

    <div className="home-page__bio">
      <div className="wrapper-1200">
        <p>Hey there 👋, I'm a full stack developer with a keen interest in product design. 
          This site serves as a place to document everything I learn and make.
        </p>
      </div>
    </div>

    <div className="work">
      <div className="wrapper-1200">
        <div className="work-cards">

          <WorkCard 
            images={data.stylesheetsDev} 
            title="Stylesheets.dev" 
            description="A theme shop, which designs and develops themes for the Ghost CMS" 
            role="Founder" 
            duration="Aug 2018 - Present"  
          >
            <a href="https://stylesheets.dev" target="_blank" rel="noopener noreferrer">Website</a>
            <span className="separator">/</span>
            <a href="https://creativemarket.com/stylesheetsdev" target="_blank" rel="noopener noreferrer">Creative Market</a>
          </WorkCard>

          
        
        </div>
      </div>
    </div>

    <Footer />

  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    testProject: allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "work/test-project"}}, sort: {fields: name}) {
      edges{
        node{
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    stylesheetsDev: allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "work/stylesheets-dev"}}, sort: {fields: name}) {
      edges{
        node{
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`