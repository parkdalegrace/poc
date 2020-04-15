import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import StreamItem from "../components/stream-item"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <StreamItem
          id = {node.id}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          audioUrl={node.frontmatter.audioUrl}
          videoUrl={node.frontmatter.videoUrl}
          notesUrl={node.frontmatter.attachments ? node.frontmatter.attachments[0].publicURL: null}
        />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {templateKey: {eq: "stream"}}}) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            audioUrl
            videoUrl
            attachments {
              relativePath
              publicURL
              name
            }
          }
        }
      }
    }
  }
`
