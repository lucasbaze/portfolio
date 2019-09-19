import React from 'react'

//Custom Components
import GetInTouch from '../components/GetInTouch'
import Layout from '../components/layout'
import PageThumb from '../components/PageThumb'

//Images
import guessWhoThumb from '../assets/images/guess-who/GuessWhoThumb.png'
import ryzeThumb from '../assets/images/ryze/ryzeThumb.png'
import atjsThumb from '../assets/images/atjs/atjsThumb.png'
import saltyThumb from '../assets/images/salty-hackers/saltyThumb.png'
import itThumb from '../assets/images/it-lifecycle/itThumb.png'

const guessWhoObj = {
  id: '1',
  thumbnail: guessWhoThumb,
  to: '/guess-who',
  caption: 'Guess Who Game',
  description: 'Twitter based mobile game for entertainment',
}

const ryzeObj = {
  id: '2',
  thumbnail: ryzeThumb,
  to: '/ryze',
  caption: 'Ryze',
  description: 'Personal Relationship Manager',
}

const atjsObj = {
  id: '3',
  thumbnail: atjsThumb,
  to: '/all-the-job-sites',
  caption: 'All The Job Sites',
  description: 'Job site aggregator',
}

const saltyObj = {
    id: '4',
    thumbnail: saltyThumb,
    to: '/salty-hackers',
    caption: 'Salty Hacker News',
    description: 'Analysis of saltiness of Hacker News Comments',
}

const itObj = {
    id: '5',
    thumbnail: itThumb,
    to: '/it-lifecycle',
    caption: 'IT Lifecycle Management',
    description: 'IT Portal to manage asset access and lifecycle',
}

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <div id="main">
          <section id="one">
            <header className="major">
              <h2>
                Human . Traveler . Creator
                <br />I enjoy building things and starting businesses.
              </h2>
            </header>
            <p>
              The best projects are ones that customers love. I enjoy working on
              multi-discipline problems with multidisciplinary individuals. I
              enjoy being outside and know that I am my best when I start my day
              there. I really enjoy psychology and how humans operate. I spend
              most days working on my peace of mind. I believe world peace is
              attainable, and{' '}
              <a href="https://www.youtube.com/watch?v=NbuUW9i-mHs">
                oddly we're slowly getting there
              </a>
              .
            </p>
            {/* <ul className="actions">
              <li>
                <Link to="/all-the-job-sites" className="button">
                  Learn More
                </Link>
              </li>
            </ul>
            */}
          </section>

          <section id="two">
            <h2>Recent Work</h2>

            <div className="row">
              <PageThumb obj={guessWhoObj} />
              <PageThumb obj={ryzeObj} />
            </div>

            <div className="row">
              <PageThumb obj={atjsObj} />
              <PageThumb obj={saltyObj} />
            </div>

            <div className="row">
              <PageThumb obj={itObj} />
            </div>

            {/* <ul className="actions">
              <li>
                <a href="#" className="button">
                  Full Portfolio
                </a>
              </li>
            </ul> */}
          </section>

          <section id="three">
            <h3>Influential Material</h3>
            <p>
              This is a short list of resources that have made an impact on my
              thinking and psychology as a person.
            </p>
            <div className="row">
              <div className="6u 12u$(xsmall)">
                <ul className="alt">
                  <li>
                    <a
                      href="https://fs.blog/2013/02/the-psychology-of-human-misjudgement/"
                      target="_blank"
                    >
                      The Psychology of Human Misjudgement
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.epsilontheory.com/too-clever-by-half/"
                      target="_blank"
                    >
                      Too Clever By Half
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=ZORzsubQA_M"
                      target="_blank"
                    >
                      Superblocks: How Barcelona is taking city streets back
                      from cars
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.amazon.com/Predictably-Irrational-Revised-Expanded-Decisions/dp/0061353248"
                      target="_blank"
                    >
                      Predictably Irrational
                    </a>
                  </li>
                </ul>
              </div>
              <div className="6u 12u$(xsmall)">
                <ul className="alt">
                  <li>
                    <a
                      href="http://latticeworkinvesting.com/2018/04/06/peter-kaufman-on-the-multidisciplinary-approach-to-thinking/"
                      target="_blank"
                    >
                      Multidisciplinary approach to thinking
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://quillette.com/2018/08/25/the-dangers-of-ignoring-cognitive-inequality/"
                      target="_blank"
                    >
                      The Dangers Of Ignoring Cognitive Inequality
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=f54jAzYawZ"
                      target="_blank"
                    >
                      Enlightened Beings Share Their Spiritual Awakening
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <GetInTouch />
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
