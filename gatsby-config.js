const path = require(`path`);

module.exports = {
  // pathPrefix: `/fege`,
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "pt-br",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-158633600-1",
      },
    },
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
