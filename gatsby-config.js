module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
    pathPrefix: `/fege`,
  },
  plugins: [
    `gatsby-plugin-fabric-ui`,
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
  ],
};
