const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
const { graphql } = require('gatsby')

exports.createPages = async ({ graphql, actions:{createPage} }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const relativeFilePath = createFilePath({
            node,
            getNode,
            basePath: "src/content",
        })

        // Creates new query'able field with name of 'slug'
        createNodeField({
            node,
            name: "slug",
            value: `/blog${relativeFilePath}`,
        })
    }
}

