module.exports = {
  siteMetadata: {
    author: `Leandro Ubilla Gonzalez`,
    description: `Leandro is a front end web developer who specializes in building accessible and performant websites.`,
    siteUrl: "https://www.leandroubilla.com",
    title: `Leandro Ubilla Gonzalez`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    `gatsby-plugin-smoothscroll`,
    "gatsby-plugin-react-helmet",
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
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Rubik', 'Poppins', 'VT323']
        }
      }
    }
  ],
};
