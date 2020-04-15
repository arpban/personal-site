import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

import '../styles/blog.scss'

class NotesPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout viewClassName="blog-page">
        <SEO title="Notes" />

        <Header />

        <div className="site-main">
          <div className="blog-wrapper wrapper-1200">
            <div className="blog-aside">
              {/* <h1 className="blog-header">
              Blog
            </h1> */}
            </div>

            <div className="blog-main">
              <div className="blog-feed">
                {
                  this.props.data.allGhostPost.edges.map(({ node }, index) => (
                    <div className="blog-post" key={index}>
                      <Link className="blog-post-wrapper" to={`/blog/${node.slug}`}>
                        <h2>{node.title}</h2>
                        <p>
                          {node.excerpt}
                          <time>{node.published_at}</time>
                        </p>
                      </Link>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>

        <Footer />

      </Layout>
    )
  }
}

export default NotesPage

export const query = graphql`
  query {
    allGhostPost(sort: {order: DESC, fields: updated_at}, filter: {primary_tag: {slug: {eq: "notes"}}}) {
      edges {
        node {
          feature_image
          title
          url
          slug
          excerpt
          published_at(formatString: "MMM YYYY")
        }
      }
    }
  }
`
