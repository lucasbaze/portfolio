import React from 'react'

//Custom Components
import GetInTouch from '../components/GetInTouch'
import Gallery from '../components/Gallery'

import Layout from '../components/layout'
import PostHeaderImg from '../components/PostHeaderImg'

import header from '../assets/images/we-got-this/thumb.png'

import wgt1 from '../assets/images/we-got-this/scheduling_1.png'
import wgt2 from '../assets/images/we-got-this/scheduling_2.png'
import wgt3 from '../assets/images/we-got-this/customers.png'
import wgt4 from '../assets/images/we-got-this/customer_view.png'
import wgt5 from '../assets/images/we-got-this/team_techs.png'

const DEFAULT_IMAGES = [
  {
    id: '2',
    source: wgt2,
    thumbnail: wgt2,
    caption: 'Scheduling Job Details',
    description:
      'Allows user to define job details associated with job and customer',
  },
  {
    id: '1',
    source: wgt1,
    thumbnail: wgt1,
    caption: 'Scheduling Customer',
    description: 'Allows a user to schedule a job associated to a customer',
  },
  {
    id: '3',
    source: wgt3,
    thumbnail: wgt3,
    caption: 'All Customers',
    description: 'Allows the user to view all the customers',
  },

  {
    id: '4',
    source: wgt4,
    thumbnail: wgt4,
    caption: 'Customer Specific View',
    description: 'Allows for CRUD operations of the customer',
  },
  {
    id: '5',
    source: wgt5,
    thumbnail: wgt5,
    caption: 'Teams and Technicians',
    description: 'Allows for CRUD operations of teams and technicians',
  },
]

class WeGotThis extends React.Component {
  render() {
    return (
      <Layout>
        <PostHeaderImg img={header} />
        <div id="post">
          <section id="one">
            <header className="major">
              <h1>
                We Got This Cleaning
                <br />
              </h1>
              <h2>A customer database and scheduling application</h2>
            </header>
            <p>
              We Got This Cleaning is a residential cleaning company in Ohio
              that commissioned my team and I to build a customer database and
              scheduling application tailored for their specific operations.
            </p>
            <ul className="actions">
              <li>
                <a
                  href="https://luxapplication.com/"
                  target="_blank"
                  className="button"
                >
                  View Live Project{' '}
                  <span class="icon brands fa-external-link" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Lambda-School-Labs/we-got-this-fe"
                  target="_blank"
                  className="button"
                >
                  View On Github <span class="icon brands fa-github" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.figma.com/file/IYZo7sHGDjXcPbXu5uf3qN/Untitled"
                  target="_blank"
                  className="button"
                >
                  Figma Designs <span class="icon brands fa-external-link" />
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
              <li>Define Technical Architecture</li>
              <li>Manage Team of 5 Developers</li>
              <li>Translate UX Designs to Tasks</li>
              <li>Define PR Requirements</li>
              <li>Write Documentation</li>
              <li>Build Front End Application</li>
            </ul>

            <h2>Highlights</h2>

            <ul>
              <li>Personally Wrote 90% of Front End Code</li>
              <li>Google Calendar & Firebase Integrated</li>
              <li>Successfully Managed 5 Developers</li>
            </ul>

            <h2>Front End Tech</h2>

            <ul>
              <li>React</li>
              <li>Material UI</li>
              <li>Firebase Auth</li>
              <li>Firebase Database</li>
              <li>Firebase Storage</li>
              <li>Formik</li>
              <li>React Big Calendar</li>
              <li>Moment.js</li>
              <li>Lottie</li>
            </ul>

            <h2>Testing Tech</h2>

            <ul>
              <li>Jest</li>
              <li>React Testing Library</li>
              <li>Jest Axe</li>
              <li>Cypress</li>
            </ul>
          </section>

          <GetInTouch />
        </div>
      </Layout>
    )
  }
}

export default WeGotThis
