import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import "./Navigation.scss"

/**
* Navigation component
*
* The Navigation component takes an array of your Ghost
* navigation property that is fetched from the settings.
* It differentiates between absolute (external) and relative link (internal).
*
*/
/*
const Navigation = ({ data }) => (
    <div className="site-nav">
        {data.map((navItem, i) => {
            if (navItem.url.match(/^\s?http(s?)/gi)) {
                return (
                   <div className="site-nav-item" key={i}>
                       <a className="site-nav-item__link" href={navItem.url} target="_blank" rel="noopener noreferrer">{navItem.label}</a>
                   </div>
                )
            } else {
                return (
                    <div className="site-nav-item" key={i}>
                        <Link className="site-nav-item__link" activeClassName="site-nav-item__link--active" to={navItem.url}>{navItem.label}</Link>
                    </div>
                )
            }
        })}
    </div>
)
*/

const Navigation = ({ }) => (
  <div className="site-nav">
    <div className="site-nav-item">
      <Link className="site-nav-item__link" activeClassName="site-nav-item__link--active" to="/">About</Link>
    </div>
    <div className="site-nav-item">
      <Link className="site-nav-item__link" activeClassName="site-nav-item__link--active" to="/work">Work</Link>
    </div>
    <div className="site-nav-item">
      <Link className="site-nav-item__link" activeClassName="site-nav-item__link--active" to="/notes">Notes</Link>
    </div>
    <div className="site-nav-item">
      <Link className="site-nav-item__link" activeClassName="site-nav-item__link--active" to="/blog">Blog</Link>
    </div>
    <div className="site-nav-item">
      <Link className="site-nav-item__link" activeClassName="site-nav-item__link--active" to="/contact">Contact</Link>
    </div>
  </div>
)

// Navigation.propTypes = {
//     data: PropTypes.arrayOf(
//         PropTypes.shape({
//             label: PropTypes.string.isRequired,
//             url: PropTypes.string.isRequired,
//         }).isRequired,
//     ).isRequired
// }

export default Navigation
