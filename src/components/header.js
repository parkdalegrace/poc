import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#2d7cbb`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginRight: `1.5rem`
          }}
        >
          {siteTitle}
        </Link>
        <div style={{float:`right`}}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginRight: `1.5rem`
          }}
        >Home</Link>
        <Link
          to="/bulletin"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginRight: `1.5rem`
          }}
        >Bulletin</Link>
        <Link
          to="/stream"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >Stream</Link>
        </div>
      </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
