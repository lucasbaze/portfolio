import React from 'react'

//Custom Components
import { Link } from 'gatsby'
import GetInTouch from '../components/GetInTouch'
import Gallery from '../components/Gallery'

import Layout from '../components/layout'
import PostHeaderImg from '../components/PostHeaderImg'

import header from '../assets/images/salty-hackers/header.png'

import salty1 from '../assets/images/salty-hackers/salty1.png'
import salty2 from '../assets/images/salty-hackers/salty2.png'
import salty3 from '../assets/images/salty-hackers/salty3.png'
import salty4 from '../assets/images/salty-hackers/salty4.png'

const DEFAULT_IMAGES = [
  {
    id: '5',
    source: salty1,
    thumbnail: salty1,
    caption: 'Salty Profiles',
    description: 'View all the salty comments from a single user',
  },
  {
    id: '3',
    source: salty2,
    thumbnail: salty2,
    caption: 'Top 100',
    description: 'Top 100 Saltiest users by comment with graph',
  },
  {
    id: '6',
    source: salty4,
    thumbnail: salty4,
    caption: 'Light / Dark Mode',
    description: 'Semantic UI light / dark mode with Context API',
  },
]

class SaltyHackers extends React.Component {
  render() {
    return (
      <Layout>
        <PostHeaderImg img={header} />
        <div id="post">
          <section id="one">
            <header className="major">
              <h1>
                Salty Hackers
                <br />
              </h1>
              <h2>
                A Data Science driven site that shows the saltiest hackers by
                comments
              </h2>
            </header>
            <p>The objective of this project</p>
            <ul className="actions">
              <li>
                <a
                  href="https://hn-trolls.now.sh"
                  target="_blank"
                  className="button"
                >
                  View Live Project{' '}
                  <span class="icon brands fa-external-link" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Saltiest-Hacker-News-Trolls"
                  target="_blank"
                  className="button"
                >
                  View On Github <span class="icon brands fa-github" />
                </a>
              </li>
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

          <section>
            <h2>Responsibility</h2>
            <ul>
              <li>Implement State Management</li>
              <li>Application Navigation</li>
              <li>Mobile Responsiveness</li>
              <li>User Profile Page</li>
            </ul>

            <h2>Highlights</h2>

            <ul>
              <li>Excellent Mobile Responsiveness</li>
              <li>Start to finish in 4 days</li>
            </ul>

            <h2>Front End Tech</h2>

            <ul>
              <li>React</li>
              <li>Context API</li>
              <li>React Router</li>
              <li>Semantic UI</li>
              <li>Styled Components</li>
              <li>Recharts</li>
              <li>WordCloud</li>
            </ul>
          </section>

          <GetInTouch />
        </div>
      </Layout>
    )
  }
}

export default SaltyHackers
