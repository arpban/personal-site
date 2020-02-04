module.exports = {
  siteMetadata: {
    title: `Arpit Bansal`,
    description: `A full stack developer with keen interest in product design. Currently a frontend developer at Axelerant, and creator of Stylesheets.dev.`,
    author: `@arp_ban`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `arpit-bansal`,
        short_name: `arpit-bansal`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#333`,
        display: `minimal-ui`,
        icon: `src/images/site-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: `https://ghost.arpitbansal.dev`,
        contentApiKey: `09afec2831223e214259c9839a`
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/images/icons`
        }
      }
    },
    `gatsby-plugin-netlify`,
  ],
}
