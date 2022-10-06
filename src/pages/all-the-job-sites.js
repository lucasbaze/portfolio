import React from 'react'

//Custom Components
import { Link } from 'gatsby'
import GetInTouch from '../components/GetInTouch'
import Gallery from '../components/Gallery'

import Layout from '../components/layout'
import PostHeaderImg from '../components/PostHeaderImg'

import atjs from '../assets/images/atjs/atjs.png'

import atjs1 from '../assets/images/atjs/atjs1.png'
import atjs2 from '../assets/images/atjs/atjs2.png'
import atjs3 from '../assets/images/atjs/atjs3.png'

const DEFAULT_IMAGES = [
  {
    id: '5',
    source: atjs3,
    thumbnail: atjs3,
    caption: 'Searching Everything',
    description: '1 search will modify all links and search all sites',
  },
  {
    id: '3',
    source: atjs1,
    thumbnail: atjs1,
    caption: 'View In Browser',
    description: 'Built iFrame to keep users in 1 place',
  },
  {
    id: '4',
    source: atjs2,
    thumbnail: atjs2,
    caption: 'Avoiding CORS issues',
    description: 'Avoided CORS issues by just sending user to site',
  },
]

class ATJS extends React.Component {
  render() {
    return (
      <Layout>
        <PostHeaderImg img={atjs} />
        <div id="post">
          <section id="one">
            <header className="major">
              <h1>
                All The Job Sites
                <br />
              </h1>
              <h2>
                A job sites aggregator for making job searching and recruiting
                easier
              </h2>
            </header>
            <p>
              Job searching sucks. All The Job Sites aggregates search so that
              users can find every site and recruiters can be "on every board"
              even if they're not. Learning from past mistakes the objective is
              to get revenue in the door ASAP.
            </p>
            <ul className="actions">
              <li>
                <a
                  href="https://allthejobsites.com"
                  target="_blank"
                  className="button"
                >
                  View Live Project{' '}
                  <span class="icon brands fa-external-link" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/lucasbaze/all-the-job-sites"
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
              <li>Front End Development</li>
              <li>Design UI / UX</li>
              <li>Marketing</li>
            </ul>

            <h2>Highlights</h2>

            <ul>
              <li>Excellent Mobile Responsiveness</li>
              <li>
                Authentication and Databse through Firebase (No Server Needed)
              </li>
              <li>Design to Live in less than 2 weeks</li>
            </ul>

            <h2>Tech</h2>

            <ul>
              <li>React</li>
              <li>Context API</li>
              <li>Firebase</li>
              <li>React Router</li>
              <li>Semantic UI</li>
              <li>Styled Components</li>
            </ul>
          </section>

          <GetInTouch />
        </div>
      </Layout>
    )
  }
}

export default ATJS
