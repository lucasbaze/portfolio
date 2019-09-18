import React from 'react'

//Custom Components
import { Link } from 'gatsby'
import GetInTouch from '../components/GetInTouch.js'

import Layout from '../components/layout'
import PostHeaderImg from '../components/PostHeaderImg'

import guessWho from '../assets/images/fulls/GuessWho.png'

class GuessWho extends React.Component {
  render() {
    return (
      <Layout>
        <PostHeaderImg img={guessWho} />
        <div id="post">
          <section id="one">
            <header className="major">
              <h2>
                Guess Who
                <br />
                A twitter based mobile game for entertainment
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

export default GuessWho