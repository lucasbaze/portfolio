import React from 'react'

//Custom Components
import GetInTouch from '../components/GetInTouch'
import Gallery from '../components/Gallery'

import Layout from '../components/layout'
import PostHeaderImg from '../components/PostHeaderImg'

import republicHeader from '../assets/images/republic/republicHeader.png'
import documentation from '../assets/images/republic/documentation.png'
import crypto from '../assets/images/republic/republicCrypto.png'
import capital from '../assets/images/republic/republicCapital.png'
import events from '../assets/images/republic/events.png'

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: events,
    thumbnail: events,
    caption: 'Events Page',
    description: 'Next.js page living in Ruby on Rails architecture',
  },
  {
    id: '3',
    source: crypto,
    thumbnail: crypto,
    caption: 'RepublicCrypto.com',
    description: 'Fully built republic crypto site with animations',
  },
  {
    id: '4',
    source: capital,
    thumbnail: capital,
    caption: 'Republic Capital',
    description: 'Iinternal investor portal',
  },
  {
    id: '2',
    source: documentation,
    thumbnail: documentation,
    caption: 'Onboarding Documentation',
    description: 'Internal documentation on how to work with the code',
  },
]

class Republic extends React.Component {
  render() {
    return (
      <Layout>
        <PostHeaderImg img={republicHeader} />
        <div id="post">
          <section id="one">
            <header className="major">
              <h1>
                Republic
                <br />
              </h1>
              <h2>
                Republic is an equity crowdfunding portal, vc firm, and crypto
                services advisor.
              </h2>
            </header>
            <p>
              I joined Republic in order to lead our front-end team. I
              immediately joined an international team of 10 engineers from
              Russia, India, and the US and assumed project lead
              responsibilities. This included scoping tickets, designing
              technical architecture, reviewing PRs and writing code.
            </p>
            <ul className="actions">
              <li>
                <a
                  href="https://republic.com"
                  target="_blank"
                  className="button"
                >
                  View Live Project{' '}
                  <span class="icon brands fa-external-link" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/republic.co"
                  target="_blank"
                  className="button"
                >
                  View LinkedIn <span class="icon brands fa-linkedin" />
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
                <li>Lead team of 10 engineers</li>
                <li>Prioritze and Architect new monorepo client application</li>
                <li>Deploy new Hybrid Ruby on Rails Next.js application</li>
                <li>
                  Write copious documentation to assit training 80+ intl.
                  engineers
                </li>
                <li>
                  Trained junior devs to work in enterprise scale client repo
                </li>
                <li>Design guardrails for scalability</li>
              </ul>
            </div>

            <h2>Highlights</h2>

            <ul>
              <li>Deployed brand new Nx, Next.js architecture to 1M+ users </li>
              <li>Launched 3 applications within client monorepo</li>
              <li>
                Fully built{' '}
                <a href="https://republiccrypto.com" target="_blank">
                  republiccrypto.com
                </a>
              </li>
            </ul>

            <h2>Tech Stack:</h2>
            <div style={{ marginLeft: 20 }}>
              <h3>Front End</h3>
              <ul>
                <li>Nx</li>
                <li>Next.js</li>
                <li>Apollo Client</li>
                <li>Typescript</li>
                <li>Three.js</li>
                <li>Chakra UI</li>
                <li>Framer Motion</li>
                <li>Storybook</li>
                <li>Chromatic</li>
                <li>Jest</li>
                <li>GH actions</li>
              </ul>
            </div>
            <div style={{ marginLeft: 20 }}>
              <h3>Back End</h3>
              <ul>
                <li>Ruby on Rails</li>
                <li>Sidekiq</li>
                <li>Redis</li>
              </ul>
            </div>
            <div style={{ marginLeft: 20 }}>
              <h3>Dev Ops / Deployment</h3>
              <ul>
                <li>AWS</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Rollbar</li>
              </ul>
            </div>
            <div style={{ marginLeft: 20 }}>
              <h3>Third Paty Services</h3>
              <ul>
                <li>FundAmerica</li>
                <li>FullStory</li>
                <li>Linear</li>
                <li>Notion</li>
              </ul>
            </div>
          </section>

          <GetInTouch />
        </div>
      </Layout>
    )
  }
}

export default Republic
