import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ avatar }) => (
  <header
    style={{
      background: `rebeccapurple`,
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
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src={avatar} alt="huevolas" />
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  avatar: PropTypes.string,
}

Header.defaultProps = {
  avatar: ``,
}

export default Header
