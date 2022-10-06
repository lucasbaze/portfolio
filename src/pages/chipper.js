import React from 'react'

//Custom Components
import GetInTouch from '../components/GetInTouch'
import Gallery from '../components/Gallery'

import Layout from '../components/layout'
import PostHeaderImg from '../components/PostHeaderImg'

import header from '../assets/images/chipper/home.png'

import chipper1 from '../assets/images/chipper/bottomCTA.png'
import chipper2 from '../assets/images/chipper/confirmation.png'
import chipper3 from '../assets/images/chipper/ctaLarge.png'
import chipper4 from '../assets/images/chipper/customModal.png'
import chipper5 from '../assets/images/chipper/Forms.png'
import chipper7 from '../assets/images/chipper/Loading.png'
import chipper8 from '../assets/images/chipper/userCollection.png'

const DEFAULT_IMAGES = [
  {
    id: '2',
    source: chipper2,
    thumbnail: chipper2,
    caption: 'Confirmation',
    description: 'Show the user a success message on completion',
  },
  {
    id: '7',
    source: chipper7,
    thumbnail: chipper7,
    caption: 'Custom Loading',
    description:
      'This page over 30 seconds to respond, so using Lottie and a custom loader',
  },
  {
    id: '4',
    source: chipper4,
    thumbnail: chipper4,
    caption: 'Custom Modal',
    description: 'A re-usable custom modal modeled off the Semantic UI modal',
  },
  {
    id: '8',
    source: chipper8,
    thumbnail: chipper8,
    caption: 'Onboarding Data Collection',
    description:
      'After user testing, added this step to help prime the mental pump',
  },
  {
    id: '5',
    source: chipper5,
    thumbnail: chipper5,
    caption: 'Forms',
    description: 'Create a multi-page form with Formik',
  },
  {
    id: '3',
    source: chipper3,
    thumbnail: chipper3,
    caption: 'Custom Modal and Large CTA',
    description: 'Show the user a Large Call To Action in a custom built modal',
  },
  {
    id: '1',
    source: chipper1,
    thumbnail: chipper1,
    caption: 'Bottom Call To Action',
    description: 'Final page that shows the users options and a Call To Action',
  },
]

class Chipper extends React.Component {
  render() {
    return (
      <Layout>
        <PostHeaderImg img={header} />
        <div id="post">
          <section id="one">
            <header className="major">
              <h1>
                Chipper
                <br />
              </h1>
              <h2>Student Loan Repayment Web Application</h2>
            </header>
            <p>
              Chipper is a startup tackling the over $1.7 Trillion student loan
              problem. Chipper hired me to build a first pass web application
              that allowed users to create an account, link their student loans,
              and calculate their elligible repayment options.
            </p>
            <ul className="actions">
              <li>
                <a
                  href="https://web.chipper.app"
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
            <h2>Responsibility</h2>
            <ul>
              <li>Define Technical Architecture</li>
              <li>Build Front End Application</li>
              <li>Work with UI / UX Designer</li>
              <li>Deliver in 2 weeks</li>
              <li>Document the Application</li>
            </ul>

            <h2>Highlights</h2>

            <ul>
              <li>Built Application and deployed in 10 days</li>
              <li>Conducted 3 UX tests with users to improve design</li>
            </ul>

            <h2>Front End Tech</h2>

            <ul>
              <li>React</li>
              <li>Styled Components</li>
              <li>Framer Motion</li>
              <li>Express</li>
              <li>Node</li>
              <li>Formik</li>
              <li>Lottie</li>
            </ul>

            <h2>Testing Tech</h2>

            <ul>
              <li>Jest</li>
              <li>React Testing Library</li>
            </ul>
          </section>

          <GetInTouch />
        </div>
      </Layout>
    )
  }
}

export default Chipper
