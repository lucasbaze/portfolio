import React from 'react'

//Custom Components
import { Link } from 'gatsby'
import GetInTouch from '../components/GetInTouch'
import Gallery from '../components/Gallery'

import Layout from '../components/layout'
import PostHeaderImg from '../components/PostHeaderImg'

import header from '../assets/images/snackify/snackifyHeader.png'

import snackify1 from '../assets/images/snackify/snackify1.png'
import snackify2 from '../assets/images/snackify/snackify2.png'
import snackify3 from '../assets/images/snackify/snackify3.png'
import snackify4 from '../assets/images/snackify/snackify4.png'

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: snackify3,
    thumbnail: snackify3,
    caption: 'Stripe Payments',
    description: 'Allows a user to put in payments',
  },
  {
    id: '1',
    source: snackify1,
    thumbnail: snackify1,
    caption: 'View All Snacks',
    description:
      "Returns a paginated response of all snacks scraped from Sam's Club",
  },
  {
    id: '2',
    source: snackify2,
    thumbnail: snackify2,
    caption: 'View Company Selected Snacks',
    description: 'Users can view snacks selected by the company',
  },

  {
    id: '4',
    source: snackify4,
    thumbnail: snackify4,
    caption: 'Database Design',
    description: 'Simple Draw.io of the database design',
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
                Snackify
                <br />
              </h1>
              <h2>An employee driven snack subscription service</h2>
            </header>
            <p>
              Snackify is a B2B snack subscription service. Snackify companies
              to provide snacks to their employees while also enabling their
              employees to choose their own snacks increasing morale and fun!
            </p>
            <ul className="actions">
              <li>
                <a
                  href="https://snackify-landing.netlify.com/"
                  target="_blank"
                  className="button"
                >
                  View Live Project{' '}
                  <span class="icon brands fa-external-link" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/bw-oct-snackify/server"
                  target="_blank"
                  className="button"
                >
                  View On Github <span class="icon brands fa-github" />
                </a>
              </li>
              <li>
                <a
                  href="https://lucasbaze.github.io/slate/#introduction"
                  target="_blank"
                  className="button"
                >
                  Documentation <span class="icon brands fa-book" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.figma.com/file/j2RPu1A7IGasJaB1B4fCV5/All?node-id=0%3A1"
                  target="_blank"
                  className="button"
                >
                  Figma Designs <span class="icon brands fa-external-link" />
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2>Responsibility</h2>
            <ul>
              <li>Design base UI / UX</li>
              <li>Design Database Design</li>
              <li>Document Endpoints</li>
              <li>Build All Endpoints</li>
              <li>Deploy Server</li>
            </ul>

            <h2>Highlights</h2>

            <ul>
              <li>Start to finish in 4 days</li>
              <li>Stripe Implemented</li>
              <li>Scraped Sam's Club website for snacks</li>
              <li>Excellent Documentation with Slate</li>
              <li>Built Snack Management Front End</li>
            </ul>

            <h2>Back End Tech</h2>

            <ul>
              <li>Node</li>
              <li>Express</li>
              <li>Express-Sessions</li>
              <li>PostgreSQL</li>
              <li>Heroku</li>
              <li>Stripe</li>
              <li>Knex</li>
              <li>Bcrypt</li>
            </ul>

            <h2>Testing Tech</h2>

            <ul>
              <li>Jest</li>
              <li>SuperTest</li>
              <li>Cross-Env</li>
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

export default SaltyHackers
