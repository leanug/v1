module.exports = {
  siteMetadata: {
    author: "Leandro Ubilla Gonzalez",
    description: `Leandro is a front end web developer who specializes in building accessible and performant websites.`,
    siteUrl: "https://www.leandroubilla.com",
    title: "Leandro Ubilla Gonzalez",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-smoothscroll",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `rubik`,
          `poppins`,
          `VT323`,
        ],
        display: 'swap'
      }
    }
  ],
};
