/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const { lazy } = require("react")

require("dotenv").config({
  path: `.env`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Junior's Construction Inc",
    description:
      "Junior's Inc is a construction company based in Los Angeles that specializes in commercial and residential projects",
    author: "Junior's Construction Inc",
  },
  plugins: [
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-transition-link",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        // https://stackoverflow.com/questions/57833884/include-sass-in-gatsby-globally
        // This allows us to use sass variables, mixins. ect without explicitly importing it at the component level
        data: `@import "${__dirname}/src/styles/styles";`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              tracedSVG: true,
            },
          },
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              showCaptions: false,
              loading: true,
            },
          },
        ],
      },
    },
  ],
}
