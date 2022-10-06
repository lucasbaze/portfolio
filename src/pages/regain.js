import React from 'react'

//Custom Components
import { Link } from 'gatsby'
import GetInTouch from '../components/GetInTouch'
import Gallery from '../components/Gallery'

import Layout from '../components/layout'
import PostHeaderImg from '../components/PostHeaderImg'

import header from '../assets/images/regain/Regain.png'

import regain1 from '../assets/images/regain/AllCandidates.png'
import regain2 from '../assets/images/regain/CreateNewProfile.png'
import regain3 from '../assets/images/regain/SearchPrisons.png'
import regain4 from '../assets/images/regain/AccountSettings.png'

const DEFAULT_IMAGES = [
  {
    id: '6',
    source: regain4,
    thumbnail: regain4,
    caption: 'Account Settings',
    description: 'Edit and update prison account settings',
  },
  {
    id: '5',
    source: regain3,
    thumbnail: regain3,
    caption: 'Filter Prisons',
    description: 'Filter prisons by state',
  },
  {
    id: '3',
    source: regain1,
    thumbnail: regain1,
    caption: 'All Candidates',
    description: 'Search through candidates to find the skills you need',
  },
  {
    id: '4',
    source: regain2,
    thumbnail: regain2,
    caption: 'New Profile',
    description: 'See an awesome preview of what your candidate looks like',
  },
]

class Regain extends React.Component {
  render() {
    return (
      <Layout>
        <PostHeaderImg img={header} />
        <div id="post">
          <section id="one">
            <header className="major">
              <h1>
                Regain
                <br />
              </h1>
              <h2>Connecting employers with prisoners</h2>
            </header>
            <p>
              This project was inspired by the need to help inmates find work
              while they are still in prison despite their incarceration. Most
              inmates have tangible skills that go to waste while they are
              incarcerated. Regain's mission is to help those inmates regain
              their passion and use their skills by connecting employers with
              prisons and their candidates.
            </p>
            <ul className="actions">
              <li>
                <a
                  href="https://regain.now.sh"
                  target="_blank"
                  className="button"
                >
                  View Project <span class="icon brands fa-external-link" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/prisoner-skills-app/frontend"
                  target="_blank"
                  className="button"
                >
                  View On Github <span class="icon brands fa-github" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.figma.com/file/NlRcCJQ0HqY4ZmORi3jEJE/All?node-id=0%3A1"
                  target="_blank"
                  className="button"
                >
                  View Figma Designs{' '}
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
            <h2>Responsibility</h2>
            <ul>
              <li>UI / UX Design</li>
              <li>Lead Front End Team</li>
              <li>Build 90% components</li>
              <li>Wire all API calls and ensure functionality</li>
              <li>Implement some testing</li>
            </ul>

            <h2>Highlights</h2>

            <ul>
              <li>Desinged in 1 day</li>
              <li>Built in 4 days</li>
              <li>Utilized Semantic UI for almost all components</li>
              <li>
                Generalized Context API HOC created for passing data to Formik
                forms (no redux nonsense)
              </li>
            </ul>

            <h2>Tech</h2>

            <ul>
              <li>React</li>
              <li>Semantic UI React</li>
              <li>Styled Components</li>
              <li>React Router</li>
              <li>Context API</li>
              <li>Jest</li>
              <li>Formik</li>
              <li>Yup</li>
            </ul>
          </section>

          <GetInTouch />
        </div>
      </Layout>
    )
  }
}

export default Regain
