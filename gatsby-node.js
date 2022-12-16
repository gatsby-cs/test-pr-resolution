/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
  createPage({
    path: "/using-dsg-2",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

createPage({
  path: "/using-dsg-3",
  component: require.resolve("./src/templates/using-dsg.js"),
  context: {},
  defer: true,
})

createPage({
  path: "/using-dsg4",
  component: require.resolve("./src/templates/using-dsg.js"),
  context: {},
  defer: true,
})
}

