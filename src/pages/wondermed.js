import React from 'react'

//Custom Components
import GetInTouch from '../components/GetInTouch'
import Gallery from '../components/Gallery'

import Layout from '../components/layout'
import PostHeaderImg from '../components/PostHeaderImg'

import wondermedHeader from '../assets/images/wondermed/wondermed-header.png'
import dashboard from '../assets/images/wondermed/dashboard-app.png'
import providerPortal from '../assets/images/wondermed/provider-portal.png'
import wondermedHome from '../assets/images/wondermed/wondermed-home.png'
import wonderSciences from '../assets/images/wondermed/wondersciences-homepage.png'

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: dashboard,
    thumbnail: dashboard,
    caption: 'Patient Dashboard',
    description:
      'React app patient dashboard for scheduling appointments and tracking prescriptions',
  },
  {
    id: '3',
    source: providerPortal,
    thumbnail: providerPortal,
    caption: 'Provider Portal',
    description:
      'Retool based provider dashboard for prescribing patients with our compounding pharmacy',
  },
  {
    id: '4',
    source: wondermedHome,
    thumbnail: wondermedHome,
    caption: 'Wondermed Home',
    description:
      'Next.js marketing site optimized for mobile and SEO, deployed through Github Actions via Nx monorepo.',
  },
  {
    id: '2',
    source: wonderSciences,
    thumbnail: wonderSciences,
    caption: 'Wonder Sciences',
    description:
      'Next.js Parent company marketing site deployed through Github Actions via Nx monorepo.',
  },
]

class Republic extends React.Component {
  render() {
    return (
      <Layout>
        <PostHeaderImg img={wondermedHeader} />
        <div id="post">
          <section id="one">
            <header className="major">
              <h1>
                Wondermed
                <br />
              </h1>
              <h2>
                Wondermed is an at-home Ketamine therapy company leveraging
                science and therapy to help heal people with anxiety and
                depression.
              </h2>
            </header>
            <p>
              I joined Wondermed to lead the engineering team as the Director of
              Engineering. I worked with the entire Wondermed team to design,
              architect, and build our B2B platform. I was responsible for
              translating sales, marketing, and business needs into product
              requirements and ultimately product that's helped to raise over
              $2M and drive over $100k in revenue in 4 months.
            </p>
            <ul className="actions">
              <li>
                <a
                  href="https://wondermed.com"
                  target="_blank"
                  className="button"
                >
                  View Live Project{' '}
                  <span class="icon brands fa-external-link" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/wondersciences"
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
                <li>Lead team of 3 engineers</li>
                <li>
                  Prioritze and architect full stack HIPPA compliant application
                </li>
                <li>
                  Coordinate daily with CEO, co-founder, and sales team to build
                  product
                </li>
                <li>
                  Write copious documentation to train and onboard engineers and
                  team
                </li>
                <li>
                  Coordinate tasks and projects across the entirety of the team.
                </li>
              </ul>
            </div>

            <h2>Highlights</h2>

            <ul>
              <li>Deployed new monorepo and multiple Next.js applications</li>
              <li>Launched 3 different applications within monorepo</li>
              <li>Hired new engineers and cust costs by $200k annually</li>
              <li>Helped to raise $2M for the company</li>
            </ul>

            <h2>Tech Stack:</h2>
            <div style={{ marginLeft: 20 }}>
              <h3>Front End</h3>
              <ul>
                <li>Nx</li>
                <li>Next.js</li>
                <li>Typescript</li>
                <li>Framer Motion</li>
                <li>Storybook</li>
                <li>Jest</li>
                <li>GH actions</li>
              </ul>
            </div>
            <div style={{ marginLeft: 20 }}>
              <h3>Back End</h3>
              <ul>
                <li>Express</li>
                <li>Typescript</li>
                <li>Prisma</li>
                <li>Sequelize</li>
                <li>Redis</li>
                <li>Retool ( Admin Backend )</li>
                <li>Authorize.net ( Payments )</li>
              </ul>
            </div>
            <div style={{ marginLeft: 20 }}>
              <h3>Dev Ops / Deployment</h3>
              <ul>
                <li>AWS</li>
                <li>Docker</li>
                <li>Abtible ( HIPAA Compliant IaaS )</li>
                <li>Vercel</li>
                <li>Datadog</li>
                <li>DevCycle ( Feature Flag Management )</li>
              </ul>
            </div>
            <div style={{ marginLeft: 20 }}>
              <h3>Third Paty Services</h3>
              <ul>
                <li>Hevo ( Data ETL )</li>
                <li>Google Big Query & Looker</li>
                <li>Google Analytics</li>
                <li>Linear ( Project Management )</li>
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
