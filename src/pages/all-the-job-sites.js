import React from 'react'

//Custom Components
import { Link } from 'gatsby'
import GetInTouch from '../components/GetInTouch.js'

import Layout from '../components/Layout'
import PostHeaderImg from '../components/PostHeaderImg'

import atjsHeader from '../assets/images/fulls/02.jpg'

class ATJS extends React.Component {
  render() {
    return (
      <Layout>
        <PostHeaderImg img={atjsHeader} />
        <div id="post">
          <section id="one">
            <header className="major">
              <h2>
                All The Job Sites
                <br />
                Job Sites Aggregator
              </h2>
            </header>
            <p>
              Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc
              nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae
              lobortis tortor primis integer massa adipiscing id nisi accumsan
              pellentesque commodo blandit enim arcu non at amet id arcu magna.
              Accumsan orci faucibus id eu lorem semper nunc nisi lorem
              vulputate lorem neque cubilia.
            </p>
            <ul className="actions">
              <li>
                <Link to="/all-the-job-sites" className="button">
                  Learn More
                </Link>
              </li>
            </ul>
          </section>
          <GetInTouch />
        </div>
      </Layout>
    )
  }
}

export default ATJS
