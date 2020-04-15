/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark` && node.frontmatter.templateKey) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `)
  
  const bulletins = result.data.allMarkdownRemark.edges.filter( edge => {
    return edge.node.frontmatter.templateKey === 'bulletin'
  })

  bulletins.forEach((post, index) => {
    let previous = index === bulletins.length - 1 ? null : bulletins[index + 1].node
    let next = index === 0 ? null : bulletins[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: path.resolve(`src/templates/bulletin-template.js`),
      context: {
        id: post.node.id,
        slug: post.node.fields.slug,
        next,
        previous
      },
    })
  })
  
  const streams = result.data.allMarkdownRemark.edges.filter( edge => {
    return edge.node.frontmatter.templateKey === 'stream'
  })
  streams.forEach((post) => {
    createPage({
      path: post.node.fields.slug,
      component: path.resolve(`src/templates/stream-template.js`),
      context: {
        id: post.node.id,
        slug: post.node.fields.slug,
      },
    })
  })
}
