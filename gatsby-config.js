module.exports = {
  siteMetadata: {
    title: `Leandro Ubilla Gonzalez`,
    description: `Leandro is a front end web developer who specializes in building accessible and performant react websites.`,
    author: `Leandro Ubilla Gonzalez`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Leandro Ubilla Gonzalez - Portfolio`,
        short_name: `LUG Portfolio`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#333333`,
        display: `standalone`,
        icon: `src/images/icon.svg`,
        cache_busting_mode: 'none'
      },
    },
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
              axes: "wght@300;400;500;600;700",
            },
            {
              family: "Poppins",
              axes: "wght@400;500;600;700",
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
