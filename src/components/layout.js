import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/global.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          avatar
        }
      }
    }
  `)

  return (
    <>
    <main>
    <Header avatar={data.site.siteMetadata.avatar} />
      <div
        style={{
          margin:`3rem auto`,
          maxWidth: 650,
          padding: `0 1rem`,
        }}
      >
        <main>{children}</main>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </div>

    </main>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
