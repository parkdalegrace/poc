import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const BulletinPage = ({ data, pageContext }) => {
  const bulletin = data.markdownRemark
  const { previous, next } = pageContext
  return (
    <Layout>
      <article>
        <header>
        <h2 style={{textAlign: `center`}}>{bulletin.frontmatter.title}</h2>
        <p style={{textAlign: `center`}}>{bulletin.frontmatter.date}</p>
        </header>
        <div dangerouslySetInnerHTML={{ __html: bulletin.html }} />
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ←  Older {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                Newer {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}
export default BulletinPage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
