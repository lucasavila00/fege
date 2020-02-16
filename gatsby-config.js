module.exports = {
  pathPrefix: `/fege`,
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
  },
  plugins: [
    `gatsby-plugin-fabric-ui`,
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
  ],
};
