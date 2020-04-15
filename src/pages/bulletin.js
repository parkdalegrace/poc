import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="bulletin" />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <article key={node.fields.slug}>
           <header>
              <h3>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {node.frontmatter.title} - {node.frontmatter.date}
                </Link>
              </h3>
            </header>
        </article>
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {templateKey: {eq: "bulletin"}}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`