const path = require('path') /* full path required path.resolve en createpage */

/* Create pages dynamically */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMdx {
        categories: distinct(field: frontmatter___category)
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)
  
  result.data.allMdx.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/${slug}`,
      component: path.resolve(`src/templates/project-template.js`),
      context: { slug },
    })
  })
}
