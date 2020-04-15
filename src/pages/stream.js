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
          notesPdf={node.frontmatter.notesPdf}
        />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { eq: "stream" } } }
    ) {
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
            notesPdf
          }
        }
      }
    }
  }
`
