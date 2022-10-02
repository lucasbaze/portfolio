import React from 'react'

//Custom Components
import GetInTouch from '../components/GetInTouch'
import Gallery from '../components/Gallery'

import Layout from '../components/layout'
import PostHeaderImg from '../components/PostHeaderImg'

import fundifyHeader from '../assets/images/fundify/fundifyHeader.jpeg'
import marketplace from '../assets/images/fundify/marketplace.png'
import internationalization from '../assets/images/fundify/internationalization.png'
import campaignPage from '../assets/images/fundify/campaignPage.png'
import designs from '../assets/images/fundify/designs.png'

// const DEFAULT_IMAGES = [
//   {
//     id: '1',
//     source: marketplace,
//     thumbnail: marketplace,
//     caption: 'Marketplace',
//     description: 'The main page for viewing available startups',
//   },
//   {
//     id: '2',
//     source: campaignPage,
//     thumbnail: campaignPage,
//     caption: 'Campaign Page',
//     description: 'The main page Reg-CF page for a startup raising capital ',
//   },
//   {
//     id: '3',
//     source: internationalization,
//     thumbnail: internationalization,
//     caption: 'Outside US Investors',
//     description: 'Form field built to support users from outside the US',
//   },
//   {
//     id: '4',
//     source: designs,
//     thumbnail: designs,
//     caption: 'Figma design work',
//     description:
//       'During a sprint, I filled in for our designer to design and review a new feature which I then implemented',
//   },
// ]

class Republic extends React.Component {
  render() {
    return (
      <Layout>
        <PostHeaderImg img={fundifyHeader} />
        <div id="post">
          <section id="one">
            <header className="major">
              <h1>
                Republic
                <br />
              </h1>
              <h2>Fundify is an equity crowdfunding portal to allow .</h2>
            </header>
            <p>
              I joined Fundify as the third full stack engineer primarily
              focusing on the front-end. Coming onboard I immediately
              implemented Storybook in order to speed up component creation and
              increase product / engineering communcation. I then used Storybook
              and Jest to increase code-coverage by 600%. Currently I am
              primarily responsible for researching and implementing all
              front-end features.
            </p>
            <ul className="actions">
              <li>
                <a
                  href="https://fundify.com"
                  target="_blank"
                  className="button"
                >
                  View Live Project{' '}
                  <span class="icon brands fa-external-link" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/fundify"
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
            <div>
              <ul>
                <li>Execute on feature requests and stories</li>
                <li>Increase front-end test coverage</li>
                <li>Assist with mockups and design for features</li>
                <li>Review MRs</li>
              </ul>
            </div>

            <h2>Highlights</h2>

            <ul>
              <li>Increased front-end test coverage by 600%</li>
              <li>
                Designed and implemented ability to accept international
                investments
              </li>
              <li>
                Implemented Storybook.js to increase product / engr
                communication
              </li>
            </ul>

            <h2>Tech Stack:</h2>
            <div style={{ marginLeft: 20 }}>
              <h3>Front End</h3>
              <ul>
                <li>SSR React</li>
                <li>React Router</li>
                <li>Redux</li>
                <li>Storybook</li>
                <li>Jest</li>
                <li>Webpack</li>
              </ul>
            </div>
            <div style={{ marginLeft: 20 }}>
              <h3>Back End</h3>
              <ul>
                <li>Typescript</li>
                <li>Express</li>
                <li>Sequelize</li>
                <li>Kubernetes</li>
              </ul>
            </div>
            <div style={{ marginLeft: 20 }}>
              <h3>Dev Ops / Deployment</h3>
              <ul>
                <li>AWS</li>
                <li>Gitlab Runners</li>
                <li>Rollbar</li>
              </ul>
            </div>
            <div style={{ marginLeft: 20 }}>
              <h3>Third Paty Services</h3>
              <ul>
                <li>FundAmerica</li>
                <li>FullStory</li>
                <li>Jira</li>
                <li>Confluence</li>
                <li>Chromatic</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>Screenshots</h2>
            {/* <Gallery
              images={DEFAULT_IMAGES.map(
                ({ id, source, thumbnail, caption, description }) => ({
                  source,
                  thumbnail,
                  caption,
                  description,
                })
              )}
            /> */}
          </section>

          <GetInTouch />
        </div>
      </Layout>
    )
  }
}

export default Republic
