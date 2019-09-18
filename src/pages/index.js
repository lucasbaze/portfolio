import React from 'react'

//Componenets
import { Link } from 'gatsby'

//Custom Components
import GetInTouch from '../components/GetInTouch'
import Layout from '../components/layout'
import Gallery from '../components/Gallery'
import PageThumb from '../components/PageThumb'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

//Guess Who
import guessWho from '../assets/images/fulls/GuessWho.png';
import guessWhoThumb from '../assets/images/thumbs/GuessWhoThumb.png';

//Ryze
import ryze from '../assets/images/fulls/ryze.png';
import ryzeThumb from '../assets/images/thumbs/ryze.png';

const guessWhoObj = {
    id: '1',
    source: guessWho,
    thumbnail: guessWhoThumb,
    to: '/guess-who',
    caption: 'Guess Who Game',
    description: 'Twitter based mobile game for entertainment',
}

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: guessWho,
    thumbnail: guessWhoThumb,
    to: '/guess-who',
    caption: 'Guess Who Game',
    description: 'Twitter based mobile game for entertainment',
  },
  {
    id: '2',
    source: ryze,
    thumbnail: ryzeThumb,
    to: '/ryze',
    caption: 'Ryze (Personal Relationship Manager)',
    description: 'A Personal Relationship Manager to build better relationships',
  },
  {
    id: '3',
    source: full03,
    thumbnail: thumb03,
    caption: 'Photo 3',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '4',
    source: full04,
    thumbnail: thumb04,
    caption: 'Photo 4',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '5',
    source: full05,
    thumbnail: thumb05,
    caption: 'Photo 5',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '6',
    source: full06,
    thumbnail: thumb06,
    caption: 'Photo 6',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
]

class HomeIndex extends React.Component {
  render() {


    return (
      <Layout>


        <div id="main">
          <section id="one">
            <header className="major">
              <h2>
                Human - Traveler - Creator
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
            <PageThumb obj={guessWhoObj}/>
            <PageThumb obj={DEFAULT_IMAGES[1]}/>
            </div>

            <Gallery
              images={DEFAULT_IMAGES.map(
                ({ id, source, thumbnail, caption, description }) => ({
                  source,
                  thumbnail,
                  caption,
                  description,
                })
              )}
            />



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
                          This is a short list of resources that have made an impact on my thinking and psychology as a person.
                      </p>
                      <div className="row">
                          <div className="6u 12u$(xsmall)">
                              <ul className="alt">
                                  <li>
                                      <a href="https://fs.blog/2013/02/the-psychology-of-human-misjudgement/" target="_blank" >The Psychology of Human Misjudgement</a>
                                  </li>
                                  <li>
                                      <a href="http://www.epsilontheory.com/too-clever-by-half/" target="_blank" >Too Clever By Half</a>
                                  </li>
                                  <li>
                                      <a href="https://www.youtube.com/watch?v=ZORzsubQA_M" target="_blank" >Superblocks: How Barcelona is taking city streets back from cars</a>
                                  </li>
                                  <li>
                                      <a href="https://www.amazon.com/Predictably-Irrational-Revised-Expanded-Decisions/dp/0061353248" target="_blank" >Predictably Irrational</a>
                                  </li>
                              </ul>
                          </div>
                          <div className="6u 12u$(xsmall)">
                              <ul className="alt">
                                  <li>
                                      <a href="http://latticeworkinvesting.com/2018/04/06/peter-kaufman-on-the-multidisciplinary-approach-to-thinking/" target="_blank" >Multidisciplinary approach to thinking</a>
                                  </li>
                                  <li>
                                      <a href="https://quillette.com/2018/08/25/the-dangers-of-ignoring-cognitive-inequality/" target="_blank" >The Dangers Of Ignoring Cognitive Inequality</a>
                                  </li>
                                  <li>
                                      <a href="https://www.youtube.com/watch?v=f54jAzYawZ" target="_blank" >Enlightened Beings Share Their Spiritual Awakening</a>
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
