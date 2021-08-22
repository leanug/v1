module.exports = {
  siteMetadata: {
    title: `Leandro Ubilla Gonzalez`,
    description: `Leandro is a front end web developer who specializes in building accessible and performant websites.`,
    author: `Leandro Ubilla Gonzalez`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-plugin-offline',
      options: {
         workboxConfig: {
            globPatterns: ['**/src/images/icon.svg*']
         }
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google2: [
            {
              family: "Rubik",
              axes: "wght@400",
            },
            {
              family: "Poppins",
              axes: "wght@400",
            },
            {
              family: "VT323",
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.leandroubilla.com`,
      },
    },
  ],
};
