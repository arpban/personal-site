/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      blogPosts: allGhostPost(
        sort: { order: ASC, fields: published_at }
        filter: { primary_tag: { slug: { eq: "blog" } } }
      ) {
        edges {
          node {
            slug
          }
        }
      }
      notes: allGhostPost(
        sort: { order: ASC, fields: published_at }
        filter: { primary_tag: { slug: { eq: "notes" } } }
      ) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Extract query results
  const blogPosts = result.data.blogPosts.edges
  const notes = result.data.notes.edges

  // Load templates
  const postTemplate = path.resolve(`./src/templates/post.js`)

  // Create post pages
  blogPosts.forEach(({ node }) => {
    // This part here defines, that our posts will use
    // a `/:slug/` permalink.
    node.url = `/blog/${node.slug}/`

    createPage({
      path: node.url,
      component: postTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })

  notes.forEach(({ node }) => {
    node.url = `/notes/${node.slug}/`

    createPage({
      path: node.url,
      component: postTemplate,
      context: {
        slug: node.slug,
      },
    })
  })
}
