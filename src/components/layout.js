import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="parallax">
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"
          />
        </Helmet>

        {/* <div className="mh4-m mh6-ns mh3 fixed top-0 left-0 right-0 bg-fafafa z-1"> */}
        <div className="mh4-m mh6-ns mh3">
          <Header siteTitle={data.site.siteMetadata.title} />
        </div>

        <div className="mh4-m mh6-ns mh3 mt4 mb6 lh-copy">
          {children}
        </div>

        <div className="ph4-m ph6-ns ph2 bg-near-white">
          <Footer/>
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
