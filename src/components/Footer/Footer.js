import React from 'react'
import { Link } from 'gatsby'

import "./Footer.scss"
import Twitter from '../../images/icons/twitter.svg'
import Dribbble from '../../images/icons/dribbble.svg'
import Linkedin from '../../images/icons/linkedin.svg'
import Github from '../../images/icons/github.svg'
import Gmail from '../../images/icons/gmail.svg'
import Gumroad from '../../images/icons/gumroad.svg'

const Footer = () => (
  <footer className="site-footer">
    <div className="wrapper-1200">
      <div className="bottom">
        
        <div className="site-footer__copyright">
          &copy; 2020 Arpit Bansal
        </div>

        <div className="site-footer__social-links">
          <a href="https://twitter.com/arp_ban" className="site-footer__social-link" target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
          <a href="https://dribbble.com/arpitbansal" className="site-footer__social-link" target="_blank" rel="noopener noreferrer">
            <Dribbble />
          </a>
          <a href="https://www.linkedin.com/in/arpban/" className="site-footer__social-link" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
          <a href="https://github.com/arpban" className="site-footer__social-link" target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
          {/* 
          <a href="mailto:arpit.bansal2010@gmail.com" className="site-footer__social-link" target="_blank" rel="noopener noreferrer">
            <Gmail />
          </a> 
          */}
          {/* 
          <a href="https://gumroad.com/stylesheetsdev" className="site-footer__social-link" target="_blank" rel="noopener noreferrer">
            <Gumroad />
          </a> 
          */}
        </div>
      </div>
    </div>
  </footer>
)

export default Footer