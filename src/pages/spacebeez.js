import React from 'react'

//Custom Components
import { Link } from 'gatsby'
import GetInTouch from '../components/GetInTouch'
import Gallery from '../components/Gallery'

import Layout from '../components/layout'
import PostHeaderImg from '../components/PostHeaderImg'

import header from '../assets/images/spacebeez/game.png'

import spacebeez1 from '../assets/images/spacebeez/home.png'
import spacebeez2 from '../assets/images/spacebeez/game.png'
import spacebeez3 from '../assets/images/spacebeez/leaderboard.png'
import spacebeez4 from '../assets/images/spacebeez/mapgenerator.png'

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: spacebeez1,
    thumbnail: spacebeez1,
    caption: 'Home Page',
    description: 'Get started with the mission!',
  },
  {
    id: '2',
    source: spacebeez2,
    thumbnail: spacebeez2,
    caption: 'Move, Teleport, Attack, and Chat',
    description: 'Allow the player to engage in Bee-themed MUD functions',
  },
  {
    id: '3',
    source: spacebeez3,
    thumbnail: spacebeez3,
    caption: 'Leaderboard',
    description: 'View the top 10 current players',
  },

  {
    id: '4',
    source: spacebeez4,
    thumbnail: spacebeez4,
    caption: 'Map Generator Snapshot',
    description: 'A preview of the 1000+ rooms before they are created',
  },
]

class SpaceBeez extends React.Component {
  render() {
    return (
      <Layout>
        <PostHeaderImg img={header} />
        <div id="post">
          <section id="one">
            <header className="major">
              <h1>
                Space Beez
                <br />
              </h1>
              <h2>A Multi-User Dungeon Game</h2>
            </header>
            <p>
              Space Beez is a MUD style game with the theme of an integallatic
              bear battling beez to get honey. My 3 person team was exceeded
              every objective of the project.
            </p>
            <ul className="actions">
              <li>
                <a
                  href="https://spacebeez.netlify.com"
                  target="_blank"
                  className="button"
                >
                  View Live Project{' '}
                  <span class="icon brands fa-external-link" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/muddier"
                  target="_blank"
                  className="button"
                >
                  View On Github <span class="icon brands fa-github" />
                </a>
              </li>
              <li>
                <a
                  href="https://documenter.getpostman.com/view/7670132/SWTG6FoU?version=latest#5caa5c45-02de-4a86-983c-4acbaa2adcd7n"
                  target="_blank"
                  className="button"
                >
                  API Documentation <span class="icon brands fa-book" />
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2>Minimum Project Requirements</h2>
            <ul>
              <li>Build a server containing over 100 rooms</li>
              <li>Build front to visualize map.</li>
              <li>Allow players to move around map</li>
            </ul>

            <h2>Highlights</h2>

            <ul>
              <li>Start to finish in 4 days</li>
              <li>Chat Functionality Implemented (Pusher.js)</li>
              <li>Learned Django and deployed REST server in 2 days</li>
              <li>Used Random Walker Algorithm to generate over 1000 rooms</li>
              <li>Procedurally generated room names and descriptions</li>
              <li>Custom animations and svg's for all images</li>
            </ul>

            <h2>Back End Tech</h2>

            <ul>
              <li>Django</li>
              <li>Django Rest Framework</li>
              <li>Django Rest Auth</li>
              <li>Pusher</li>
              <li>Gunicorn</li>
              <li>Heroku</li>
            </ul>

            <h2>Front End Tech</h2>

            <ul>
              <li>React</li>
              <li>React Router</li>
              <li>React Bootstrap</li>
              <li>Pusher.js</li>
              <li>Axios</li>
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

export default SpaceBeez
