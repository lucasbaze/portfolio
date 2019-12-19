import React from 'react'

//Custom Components
import { Link } from 'gatsby'
import GetInTouch from '../components/GetInTouch'
import Gallery from '../components/Gallery'

import Layout from '../components/layout'
import PostHeaderImg from '../components/PostHeaderImg'

import header from '../assets/images/ryze/header.jpeg'

import ryze1 from '../assets/images/ryze/ryze1.png'
import ryze2 from '../assets/images/ryze/ryze2.png'
import ryze3 from '../assets/images/ryze/ryze3.png'
import ryze4 from '../assets/images/ryze/ryze4.png'

const DEFAULT_IMAGES = [
  {
    id: '3',
    source: ryze1,
    thumbnail: ryze1,
    caption: 'Organize Relationships',
    description: "The app mimic'd our mental models in terms of relationships",
  },
  {
    id: '4',
    source: ryze2,
    thumbnail: ryze2,
    caption: 'Sharing Articles',
    description:
      'We knew that building relationships requires exchanging value.',
  },
  {
    id: '5',
    source: ryze3,
    thumbnail: ryze3,
    caption: 'Following Up',
    description: 'The user could customize their "follow up" cadence',
  },
  {
    id: '6',
    source: ryze4,
    thumbnail: ryze4,
    caption: 'Relationship Context',
    description:
      'Knowing when / who to reach out to when gives the user confidence in their relationships as a whole',
  },
]

class Ryze extends React.Component {
  render() {
    return (
      <Layout>
        <PostHeaderImg img={header} />
        <div id="post">
          <section id="one">
            <header className="major">
              <h1>
                Ryze
                <br />
              </h1>
              <h2>A Personal Relationship Manager</h2>
            </header>
            <p>
              The motivation for the application was to create a mobile
              application that helped people build better relationships outside
              of a sales context. After 2 years, and no sales, we had to shut
              down the project. At this time, the application is no longer
              available.
            </p>
            <ul className="actions">
              <li>
                <a
                  href="https://medium.com/@lucasbazemore/when-is-your-startup-dead-7a6b92b3b1d9"
                  target="_blank"
                  className="button"
                >
                  Read Post Mortem <span class="icon brands fa-eye" />
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2>Responsibility</h2>
            <ul>
              <li>Everything Including:</li>
              <li>Front End Development</li>
              <li>Design UI / UX</li>
              <li>Raise Money</li>
              <li>Customer Discovery</li>
              <li>Customer Service</li>
            </ul>

            <h2>Highlights</h2>

            <ul>
              <li>
                Built mobile applicaiton with React Native, Apollo, and GraphQL
              </li>
              <li>
                Grew user base to over 3000 users with $0 marketing budget
              </li>
              <li>
                Designed over 2000 full sketches for entire mobile and desktop
                applicaiton
              </li>
              <li>Secured access to over $100,000 in funding</li>
              <li>Conducted over 500 customer interviews</li>
            </ul>

            <h2>Tech</h2>

            <ul>
              <li>React Native</li>
              <li>Apollo</li>
              <li>GraphQL</li>
              <li>Yoga</li>
              <li>AWS EC2's</li>
              <li>AWS Elastic Load Balancing</li>
            </ul>
          </section>

          <section>
            <h2>Screenshots</h2>
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
          </section>

          <GetInTouch />
        </div>
      </Layout>
    )
  }
}

export default Ryze
