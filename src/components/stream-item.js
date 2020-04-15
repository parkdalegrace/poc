import React from "react"
import { Link } from "gatsby"

const StreamItem = props => (
  <div key={props.id}>
    <h4>
      {props.date} - {props.title}
    </h4>
    <ul>
      <li>
        <a href={props.audioUrl}>audio</a>
      </li>
      <li>
        <a href={props.videoUrl}>video</a>
      </li>
        {props.notesUrl && (
      <li> <Link to={props.notesUrl}>Notes Pdf</Link> </li>
        )}
    </ul>
  </div>
)

export default StreamItem
