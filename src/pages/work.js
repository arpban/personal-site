import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header/Header"
import WorkCard from "../components/WorkCard/WorkCard"
import Footer from "../components/Footer/Footer"

import "../styles/work.scss"

const WorkPage = ({ data }) => (
  <Layout viewClassName="work-page">
    <SEO title="Work" />

    <Header />

    <div className="site-main">
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
              <a
                href="https://stylesheets.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
              <span className="separator">/</span>
              <a
                href="https://creativemarket.com/stylesheetsdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Creative Market
              </a>
            </WorkCard>

            <WorkCard
              images={data.containous}
              title="Containous"
              description="Worked with Containous to develop the company website in Ghost"
              role="Frontend Developer (Freelance)"
              duration="Oct 2019 - Present"
            >
              <a
                href="https://containo.us"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </WorkCard>

            <WorkCard
              images={data.axelerant}
              title="Axelerant"
              description="Worked full time as frontend developer at Axelerant"
              role="Frontend Developer"
              duration="Jan 2020 - Feb 2021"
            ></WorkCard>

            <WorkCard
              images={data.inclist}
              title="Inclist"
              description="A stock market research platform for investors."
              role="Founder, Full Stack Developer"
              duration="Feb 2018 - Sep 2018"
            >
              <a
                href="https://inclist.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </WorkCard>

            <WorkCard
              images={data.umbrellaNote}
              title="Umbrella Note"
              description="A free, open-source application for taking notes and keeping journals."
              role="Founder"
              duration="Jan 2017 - Feb 2018"
            >
              <a
                href="https://umbrellanote.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
              <span className="separator">/</span>
              <a
                href="https://github.com/arpban/UmbrellaNote"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </WorkCard>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </Layout>
)

export default WorkPage

export const query = graphql`
  query {
    stylesheetsDev: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "work/stylesheets-dev" }
      }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 350) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    inclist: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "work/inclist" }
      }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 350) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    umbrellaNote: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "work/umbrella-note" }
      }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 350) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    containous: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "work/containous" }
      }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 350) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    axelerant: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "work/axelerant" }
      }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 350) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
