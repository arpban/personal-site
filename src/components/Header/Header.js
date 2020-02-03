import React from 'react'
import { Link } from 'gatsby'

import "./Header.scss"

const Header = ({}) => (
  <header className="site-header">
    <div className="wrapper-1200">
      <Link className="site-header__logo" to="/">Arpit Bansal</Link>
    </div>
  </header>
)

export default Header