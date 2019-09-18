import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import avatar from '../assets/images/avatar.jpg'

//Custom Component
import Footer from './Footer'

class Header extends React.Component {

    componentDidMount(){
        window.onscroll = function(){

        let velocity = 0.1;
                let element = document.getElementById('header');
                console.log(element);
                let position = window.scrollY;
                console.log(position);
                let height = element.offsetHeight;
                console.log(height);
                let parralax = Math.round((-position) * velocity);
                console.log(parralax);
                element.style.backgroundPosition = `left ${parralax}px`;

        }
    }

  render() {
      const siteTitle = 'Lucas Bazemore'
      const siteDescription = 'Portfolio'

    return (
    <>
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
    </Helmet>
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
     </>
    )
  }
}

export default Header
