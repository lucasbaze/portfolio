import React from 'react'

//Custom Components
import GetInTouch from '../components/GetInTouch'
import Gallery from '../components/Gallery'

import Layout from '../components/layout'
import PostHeaderImg from '../components/PostHeaderImg'

import demoflowHeader from '../assets/images/demoflow/demoflowHeader.png'
import homeDemos from '../assets/images/demoflow/homeDemos.png'
import integrations from '../assets/images/demoflow/integrations.png'
import demoEditing from '../assets/images/demoflow/demoEditing.png'
import livePresentation from '../assets/images/demoflow/livePresentation.png'
import inviteTeammates from '../assets/images/demoflow/inviteTeammates.png'
import createBrowsers from '../assets/images/demoflow/creatingBrowsers.png'

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: homeDemos,
    thumbnail: homeDemos,
    caption: 'View All Demos',
    description: 'Anyone in the organization can see any demo',
  },
  {
    id: '2',
    source: integrations,
    thumbnail: integrations,
    caption: 'Over 12 Integrations',
    description: 'Integrate into your sales workflow',
  },
  {
    id: '3',
    source: demoEditing,
    thumbnail: demoEditing,
    caption: 'Editing a Demo',
    description: 'Create & Collaborate on demos from your asset library',
  },
  {
    id: '4',
    source: livePresentation,
    thumbnail: livePresentation,
    caption: 'Live Demo Presentation',
    description: 'Using Electron we create isolated windows for screen sharing',
  },
  {
    id: '5',
    source: inviteTeammates,
    thumbnail: inviteTeammates,
    caption: 'Invite Collaborators',
    description:
      "We use Apollo's subscription handling to enable live demo editing",
  },
  {
    id: '6',
    source: createBrowsers,
    thumbnail: createBrowsers,
    caption: 'Create Isolated Browser Sessions',
    description:
      'Through Electron we can isolate sessions and maintain multiple logged in windows',
  },
]

class ATJS extends React.Component {
  render() {
    return (
      <Layout>
        <PostHeaderImg img={demoflowHeader} />
        <div id="post">
          <section id="one">
            <header className="major">
              <h1>
                Demoflow
                <br />
              </h1>
              <h2>
                Demoflow is a desktop (Electron based) enterprise, collaborative
                demo platform that enables sales teams to seamlessly demo their
                products live.
              </h2>
            </header>
            <p>
              I joined Demoflow as the first employee and the first technical
              hire. Over the course of the first year (2020), I desgined, built,
              deployed, and trained users on every single major feature in
              Demoflow. Additionally I helped secure $4.0M in investment,
              increased 6 month retention by 30%, and trained our other (
              currently 5 ) new engineers. I also taught myself Ruby on Rails
              and implement several full stack features, including a small clone
              of Google Drive within our product. I now focus on QA testing,
              project scoping, bug squashing, and helping our engineering team
              succeed.
            </p>
            <ul className="actions">
              <li>
                <a
                  href="https://demoflow.io"
                  target="_blank"
                  className="button"
                >
                  View Live Project{' '}
                  <span class="icon brands fa-external-link" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/demoflow"
                  target="_blank"
                  className="button"
                >
                  View LinkedIn <span class="icon brands fa-linkedin" />
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2>Responsibilities</h2>
            <div style={{ marginLeft: 20 }}>
              <h3>Senior Product Engineer</h3>
              <ul>
                <li>Make front end architectural decisions</li>
                <li>Architecture, build, and deploy feautures </li>
                <li>Train new engineers </li>
                <li>Improve QA process</li>
                <li>Review PRs </li>
              </ul>
            </div>
            <div style={{ marginLeft: 20 }}>
              <h3>Product Engineer</h3>
              <ul>
                <li>Design UI / UX of new features</li>
                <li>Architect, build and deploy features</li>
                <li>Monitor and measure user engagement</li>
                <li>Onboard new customers</li>
                <li>Gather customer feedback to improve product</li>
                <li>Plan and maintain backlog</li>
              </ul>
            </div>

            <h2>Highlights</h2>

            <ul>
              <li>
                Completely converted our desktop application to a web first
                architecture (similar to Slack)
              </li>
              <li>
                Designed and built over 46 full stack features in 9 months. ( >1
                new feature / week )
              </li>
              <li>Increased 6 month customer retention by 30%</li>
              <li>
                Designed, pitched, and got accepted into Zoom Apps early beta
                program
              </li>
            </ul>

            <h2>Tech I've worked with extensively:</h2>
            <div style={{ marginLeft: 20 }}>
              <h3>Front End</h3>
              <ul>
                <a href="https://www.electronjs.org/">
                  <li>Electron.js</li>
                </a>
                <li>React</li>
                <li>React Router</li>
                <li>Grapqhl</li>
                <li>Auth0</li>
                <li>Apollo Graphql</li>
                <li>Jest</li>
                <li>Webpack</li>
              </ul>
            </div>
            <div style={{ marginLeft: 20 }}>
              <h3>Back End</h3>
              <ul>
                <li>Ruby on Rails</li>
                <li>Redis</li>
                <li>Sidekiq</li>
                <li>Docker</li>
                <li>Rspec</li>
              </ul>
            </div>
            <div style={{ marginLeft: 20 }}>
              <h3>Dev Ops / Deployment</h3>
              <ul>
                <li>AWS</li>
                <li>AWS Lambda</li>
                <li>Github Actions</li>
                <li>Datadog</li>
                <li>Sentry</li>
              </ul>
            </div>
            <div style={{ marginLeft: 20 }}>
              <h3>Third Paty Services</h3>
              <ul>
                <li>LogRocket</li>
                <li>Mixpanel</li>
                <li>Intercom</li>
                <li>Appcues</li>
                <a href="https://getstream.io/">
                  <li>Stream Chat</li>
                </a>
              </ul>
            </div>
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

export default ATJS
