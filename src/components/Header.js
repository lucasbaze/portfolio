import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

import { Link } from 'gatsby'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <Link to="/" className="image avatar">
            <img src={avatar} alt="" />
          </Link>
          <h1>
            <strong>I am Lucas</strong>, a full-stack web <br />
            developer now currently at <br />
            <a href="https://lambdaschool.com">Lambda School</a>.
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
