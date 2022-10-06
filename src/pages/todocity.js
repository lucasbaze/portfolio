import React from 'react'

//Custom Components
import GetInTouch from '../components/GetInTouch'
import Gallery from '../components/Gallery'

import Layout from '../components/layout'
import PostHeaderImg from '../components/PostHeaderImg'

import todocityHeader from '../assets/images/todocity/todocity-header.png'
import draggableMenus from '../assets/images/todocity/draggable-menus.png'
import darkTheme from '../assets/images/todocity/dark-theme.png'
import onboarding from '../assets/images/todocity/onboarding.png'
import pricing from '../assets/images/todocity/pricing.png'

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: pricing,
    thumbnail: pricing,
    caption: 'Pricing',
    description: 'Pricing page with 3D objects and payments to Stripe',
  },
  {
    id: '3',
    source: draggableMenus,
    thumbnail: draggableMenus,
    caption: 'Draggable Menus',
    description:
      'Menus that are draggable in position to assist with user personalization',
  },
  {
    id: '2',
    source: onboarding,
    thumbnail: onboarding,
    caption: 'Intro onboarding state',
    description: 'Guided onboarding that gets users up to speed quickly',
  },
  {
    id: '4',
    source: darkTheme,
    thumbnail: darkTheme,
    caption: 'Dark Theme',
    description: 'The world shifts to a dark theme with stars in the night sky',
  },
]

class TodoCity extends React.Component {
  render() {
    return (
      <Layout>
        <PostHeaderImg img={todocityHeader} />
        <div id="post">
          <section id="one">
            <header className="major">
              <h1>
                TodoCity
                <br />
              </h1>
              <h2>TodoCity is a gamified todo app.</h2>
            </header>
            <p>
              I started working on TodoCity as a way to create an additional
              revenue stream and expand my knowledge of working with Three.js. I
              also built it as a way to solve my own problem of keeping track of
              todos, as I haven't been able to stick to any 1 system consistenly
              because they're all so boring. This fixes that for me.
            </p>
            <ul className="actions">
              <li>
                <a
                  href="https://todocity.app"
                  target="_blank"
                  className="button"
                >
                  View Live Project{' '}
                  <span class="icon brands fa-external-link" />
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
            <h2>Responsibilities</h2>
            <div>
              <ul>
                <li>Everything</li>
              </ul>
            </div>

            <h2>Highlights</h2>

            <ul>
              <li>Core demo built in 3 weeks</li>
              <li>Monorepo setup for easy deployments</li>
            </ul>

            <h2>Tech Stack:</h2>
            <div style={{ marginLeft: 20 }}>
              <h3>Front End</h3>
              <ul>
                <li>Next.js</li>
                <li>React Three Fiber</li>
              </ul>
            </div>
            <div style={{ marginLeft: 20 }}>
              <h3>Back End</h3>
              <ul>
                <li>Firebase Firestore</li>
                <li>Firebase Functions</li>
                <li>Firebase Storage</li>
                <li>Nodemailer</li>
              </ul>
            </div>
            <div style={{ marginLeft: 20 }}>
              <h3>Dev Ops / Deployment</h3>
              <ul>
                <li>Vercel</li>
              </ul>
            </div>
            <div style={{ marginLeft: 20 }}>
              <h3>Third Paty Services</h3>
              <ul>
                <li>Stripe</li>
                <li>Notion</li>
                <li>Google Analytics</li>
                <li>Sentry</li>
              </ul>
            </div>
          </section>

          <GetInTouch />
        </div>
      </Layout>
    )
  }
}

export default TodoCity
