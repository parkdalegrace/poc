import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const StreamPage = ({ data }) => {
  const stream = data.markdownRemark
  let audioLink = ""
  if (stream.frontmatter.audioUrl) {
    audioLink = `<a href="{stream.frontmatter.audioUrl}>audio</a>`
  }
  let videoLink = ""
  if (stream.frontmatter.videoUrl) {
    videoLink = `<a href="{stream.frontmatter.videoUrl}>video</a>`
  }
  let notesLink = ""
  //if (stream.frontmatter.notesPdf) {
  //  notesLink = <Link To={`stream.frontmatter.notesPdf`}>Notes Pdf</Link>
 // }

  return (
    <Layout>
      <div>
        <h2>{stream.frontmatter.title}</h2>
        <h3>{stream.frontmatter.date}</h3>
        {audioLink}
        {videoLink}
        {notesLink}
        <div dangerouslySetInnerHTML={{ __html: stream.html }} />
      </div>
    </Layout>
  )
}

export default StreamPage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        audioUrl
        videoUrl
        attachments {
          publicURL
          name
        }
        tags
      }
    }
  }
`
