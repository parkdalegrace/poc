import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const BulletinPage = ({ data }) => {
  const bulletin = data.markdownRemark
  return (
    <Layout>
      <div>
        <h2>{bulletin.frontmatter.title}</h2>
        <h3>{bulletin.frontmatter.date}</h3>
        <div dangerouslySetInnerHTML={{ __html: bulletin.html }} />
      </div>
    </Layout>
  )
}
export default BulletinPage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
