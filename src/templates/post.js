import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { ArrowLeftCircle } from "react-feather"

import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

import "../styles/post.scss"

class Post extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // Set up gallery if present in the article
    var images = document.querySelectorAll('.kg-gallery-image img');
    images.forEach(function (image) {
      var container = image.closest('.kg-gallery-image');
      var width = image.attributes.width.value;
      var height = image.attributes.height.value;
      var ratio = width / height;
      container.style.flex = ratio + ' 1 0%';
    });
  }

  render() {
    const post = this.props.data.ghostPost
    return (
      <Layout viewClassName="post-template">

        <div className="back-button">
          <Link to="/blog">
            <ArrowLeftCircle />
          </Link>
        </div>

        <article className="post">
          <header className="post__header">
            {post.feature_image ?
              <figure className="post__feature-image">
                <img src={post.feature_image} alt={post.title} />
              </figure> : null
            }
            <h1 className="post__title">{post.title}</h1>
            <time>{post.published_at_pretty}</time>
          </header>

          <div className="post__body" dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </article>

      </Layout>
    )
  }
}

/*
const Post = ({ data, location }) => {
  const post = data.ghostPost

  return (
    <Layout viewClassName="post-template">

      <div className="back-button">
        <Link to="/blog">
          <ArrowLeftCircle />
        </Link>
      </div>

      <article className="post">
        <header className="post__header">
          { post.feature_image ?
            <figure className="post__feature-image">
              <img src={ post.feature_image } alt={ post.title } />
            </figure> : null
          }
          <h1 className="post__title">{post.title}</h1>
          <time>{post.published_at_pretty}</time>
        </header>

        <div className="post__body" dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </article>

    </Layout>
  )
}
*/

Post.propTypes = {
  data: PropTypes.shape({
    ghostPost: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
  query($slug: String!) {
      ghostPost(slug: { eq: $slug }) {
          ...GhostPostFields
      }
  }
`
