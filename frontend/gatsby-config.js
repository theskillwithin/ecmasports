require("dotenv").config({
  path: ".env",
})

module.exports = {
  siteMetadata: {
    title: `ECMASports`,
    description: `ECMASports`,
    author: `theskillwithin`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `rgb(37, 80, 159)`,
        theme_color: `rgb(37, 80, 159)`,
        display: `minimal-ui`,
        icon: `src/images/Heg.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "ecmasports",
        acl: null,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
