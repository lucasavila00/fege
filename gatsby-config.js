module.exports = {
  // pathPrefix: `/fege`,
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-158633600-1",
      },
    },
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
  ],
};
