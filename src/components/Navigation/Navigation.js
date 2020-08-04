import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import "./Navigation.scss"

const Navigation = () => (
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

export default Navigation
