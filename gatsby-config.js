const path = require(`path`);

module.exports = {
  // pathPrefix: `/fege`,
  siteMetadata: {
    title: "Festa Estranha com Gente Esquisita",
    siteUrl: `https://festaestranha.com`,
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
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyDzx-fbEtEdJNWccWSCxghmmvXe1N5n-fE",
          authDomain: "fegefcm.firebaseapp.com",
          databaseURL: "https://fegefcm.firebaseio.com",
          projectId: "fegefcm",
          storageBucket: "fegefcm.appspot.com",
          messagingSenderId: "122787219484",
          appId:
            "1:122787219484:web:510f09c844905ffbd537d9",
          measurementId: "G-DEP53PWGQV",
        },
      },
    },
  ],
};
