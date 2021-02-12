import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/global.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            avatar
          }
        }
      }
    `}
    render={data => (
      <>
      <div className="flexThisBox">
        <Header avatar={data.site.siteMetadata.avatar} />
        <div id="content">{children}</div>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </div>

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
