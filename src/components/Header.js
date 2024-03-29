import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import avatar from '../assets/images/avatar.jpg'

//Custom Component
import Footer from './Footer'

class Header extends React.Component {
  componentDidMount() {
    window.onscroll = function() {
      let velocity = 0.02

      let element = document.getElementById('header')
      let position = window.scrollY
      let height = element.offsetHeight
      let parralax = Math.round(-position * velocity)
      element.style.backgroundPosition = `left ${parralax}px`
    }
  }

  render() {
    const siteTitle = 'Lucas Bazemore'
    const siteDescription = 'Portfolio'

    return (
      <>
        <Helmet>
          <title>{siteTitle}</title>
          <meta property="og:title" content={siteTitle} />
          <meta name="description" content={siteDescription} />
          <meta property="og:description" content={siteDescription} />
          <meta
            property="og:image"
            content="https://raw.githubusercontent.com/lucasbaze/portfolio/master/src/assets/images/ogImage.jpg"
          />
          <meta property="og:url" content="//bazemore.me" />
          <script
            type="text/javascript"
            src="https://cdn.emailjs.com/sdk/2.3.2/email.min.js"
          ></script>
          <script
            async
            src="//cdn.embedly.com/widgets/platform.js"
            charset="UTF-8"
          ></script>
        </Helmet>
        <header id="header">
          <div className="inner">
            <Link to="/" className="image avatar">
              <img src={avatar} alt="" />
            </Link>
            <h1>
              <strong>
                I am Lucas 🤟. <br />
                Meticulous prioritization. <br />
                Relentless execution. <br />
                Currently at{' '}
                <a href="https://wondermed.com" target="_blank">
                  {' '}
                  Wondermed{' '}
                </a>
              </strong>
              .
            </h1>
          </div>
          <Footer />
        </header>
      </>
    )
  }
}

export default Header
