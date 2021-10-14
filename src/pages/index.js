import React from 'react'

//Custom Components
import GetInTouch from '../components/GetInTouch'
import Layout from '../components/layout'
import PageThumb from '../components/PageThumb'
import Model from '../components/3DModels'

//Images
import guessWhoThumb from '../assets/images/guess-who/GuessWhoThumb.png'
import demoflowThumb from '../assets/images/demoflow/demoflowThumb.png'
import fundifyThumb from '../assets/images/fundify/fundifyThumb.png'
import ryzeThumb from '../assets/images/ryze/ryzeThumb.png'
import atjsThumb from '../assets/images/atjs/atjsThumb.png'
import saltyThumb from '../assets/images/salty-hackers/saltyThumb.png'
import itThumb from '../assets/images/it-lifecycle/itThumb.png'
import regainThumb from '../assets/images/regain/RegainThumb.png'
import snackifyThumb from '../assets/images/snackify/snackifyThumb.png'
import weGotThisThumb from '../assets/images/we-got-this/thumb.png'
import chipperThumb from '../assets/images/chipper/thumb.png'
import spaceBeezThumb from '../assets/images/spacebeez/thumb.png'

const guessWhoObj = {
  id: '1',
  thumbnail: guessWhoThumb,
  to: '/guess-who',
  caption: 'Guess Who Game',
  description: 'Twitter based mobile game for entertainment',
}

const demoflowObj = {
  id: '12',
  thumbnail: demoflowThumb,
  to: '/demoflow',
  caption: 'Demoflow',
  description: 'Enterprise Sales & Demo Enablement',
}

const fundifyObj = {
	id: '13',
	thumbnail: fundifyThumb,
	to: '/fundify',
	caption: 'Fundify (Current)',
	description: 'Equity Crowdfunding Platform'
}

const ryzeObj = {
  id: '2',
  thumbnail: ryzeThumb,
  to: '/ryze',
  caption: 'Ryze (Dead)',
  description: 'Personal Relationship Manager',
}

const atjsObj = {
  id: '3',
  thumbnail: atjsThumb,
  to: '/all-the-job-sites',
  caption: 'All The Job Sites',
  description: 'Job site aggregator',
}

const saltyObj = {
  id: '4',
  thumbnail: saltyThumb,
  to: '/salty-hackers',
  caption: 'Salty Hacker News',
  description: 'Analysis of saltiness of Hacker News Comments',
}

const itObj = {
  id: '5',
  thumbnail: itThumb,
  to: '/it-lifecycle',
  caption: 'IT Lifecycle Management',
  description: 'IT Portal to manage asset access and lifecycle',
}

const regainObj = {
  id: '6',
  thumbnail: regainThumb,
  to: '/regain',
  caption: 'Regain',
  description: 'Connecting employers with prisoners',
}

const snackifyObj = {
  id: '7',
  thumbnail: snackifyThumb,
  to: '/snackify',
  caption: 'Snackify',
  description: 'Providing Employees control of their snacks!',
}

const weGotThisObj = {
  id: '8',
  thumbnail: weGotThisThumb,
  to: '/we-got-this',
  caption: 'We Got This Cleaning',
  description: 'Customer Database and Scheduling Application',
}

const chipperObj = {
  id: '9',
  thumbnail: chipperThumb,
  to: '/chipper',
  caption: 'Chipper',
  description: 'Help People Crush Student Loans',
}

const spaceBeezObj = {
  id: '10',
  thumbnail: spaceBeezThumb,
  to: '/spacebeez',
  caption: 'Space Beez (Lambda MUD)',
  description: 'A Multi-User Dungeon Game',
}

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <div id="main">
          <section id="one">
            <header className="major">
              <h2>
                Creator 💻 . Traveler 🌎 . Wonderer 💭.
                <br />I design and build intuitive, user first software.
              </h2>
            </header>
            <p>
              The best projects are ones that customers love. I enjoy being
              outside and know that I am my best when I start my day there. I
              really enjoy psychology and how humans operate. Long on VR / AR,
              creator tools, eCommerce, blockchain, personalized healthcare,
              eSports, alternative medicine, work force / remote work
              enhancements, and blending atoms and bits.
            </p>
            {/* <ul className="actions">
              <li>
                <Link to="/all-the-job-sites" className="button">
                  Learn More
                </Link>
              </li>
            </ul>
            */}
          </section>

          <section id="two">
            <h2>Startups 🏃</h2>
            <div className="row">
              <PageThumb obj={fundifyObj} />
              <PageThumb obj={demoflowObj} />
              <PageThumb obj={ryzeObj} />
            </div>
          </section>

          <section id="four">
            <h2>Contract Work 📃</h2>
            <div className="row">
              <PageThumb obj={chipperObj} />
              <PageThumb obj={itObj} />
            </div>
          </section>

          <section id="three">
            <h2>Lambda Projects 🎓</h2>
            <div
              className="row"
              style={{ display: 'flex', flexFlow: 'row wrap' }}
            >
              <PageThumb obj={spaceBeezObj} />
              <PageThumb obj={weGotThisObj} />
              <PageThumb obj={atjsObj} />
              <PageThumb obj={snackifyObj} />
              <PageThumb obj={regainObj} />
              <PageThumb obj={saltyObj} />
              <PageThumb obj={guessWhoObj} />
            </div>
          </section>

          {/* <ul className="actions">
              <li>
                <a href="#" className="button">
                  Full Portfolio
                </a>
              </li>
            </ul> */}

          <section id="medium articles">
            <h2>Content I've created 🛠</h2>
            <p>
              Thi is a short list of articles, videos, and other items I've made
              that I'm proud of
            </p>
            <h3>3D Models</h3>
            <div className="row">
              <Model
                modelSrc="https://sketchfab.com/models/b523c6cd202048fba49f4364d93678c9/embed"
                modelLink="https://sketchfab.com/3d-models/cartoon-dr-seuss-inspired-lazy-tree-b523c6cd202048fba49f4364d93678c9?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
                description="Cartoon, Dr. Seuss Inspired Lazy Tree"
              />
              <Model
                modelSrc="https://sketchfab.com/models/89bab7f26bc7418d96beb3ac0059f607/embed"
                modelLink="https://sketchfab.com/3d-models/low-poly-decorated-christmas-tree-with-presents-89bab7f26bc7418d96beb3ac0059f607?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
                description="Low Poly Decorated Christmas Tree with Presents"
              />
            </div>
            <h3>Articles I've written</h3>
            <div className="row">
              <article className="6u 12u$(xsmall) work-item">
                <blockquote class="embedly-card" data-card-controls="0">
                  <h4>
                    <a href="https://medium.com/@lucasbazemore/why-altspacevr-will-fail-virtual-reality-user-experience-teardown-e850d610703f">
                      Why AltspaceVR Will FAIL
                    </a>
                  </h4>
                  <p>
                    AltspaceVR is a social VR that fails to satisfy the basic
                    user experience expectations.
                  </p>
                </blockquote>
              </article>
              <article className="6u 12u$(xsmall) work-item">
                <blockquote class="embedly-card" data-card-controls="0">
                  <h4>
                    <a href="https://medium.com/@lucasbazemore/fundamental-design-questions-for-virtual-reality-experiences-826d57fba7c1">
                      Fundamental Design Questions for Virtual Reality
                      Experiences
                    </a>
                  </h4>
                  <p>
                    If you've experienced Virtual Reality, then you know that VR
                    is a very different domain than any other medium that we've
                    created before.
                  </p>
                </blockquote>
              </article>
            </div>
            <article className="6u 12u$(xsmall) work-item">
              <blockquote class="embedly-card" data-card-controls="0">
                <h4>
                  <a href="https://medium.com/@lucasbazemore/when-is-your-startup-dead-7a6b92b3b1d9">
                    When is your startup dead?
                  </a>
                </h4>
                <p>
                  The summer of last year is when I had to finally accept that
                  my startup that I had worked on for the past 2 years was
                  finally dead. $0.00 in revenue after 2 years, no significant
                  user base, and no...
                </p>
              </blockquote>
            </article>
          </section>

          <section id="five">
            <h2>Influential Material 🔮</h2>
            <p>
              This is a short list of resources that have made an impact on my
              thinking and psychology as a person.
            </p>
            <div className="row">
              <div className="6u 12u$(xsmall)">
                <ul className="alt">
                  <li>
                    <a
                      href="https://www.amazon.com/gp/product/1592535879/ref=crt_ewc_title_huc_1?ie=UTF8&psc=1&smid=ATVPDKIKX0DER"
                      target="_blank"
                    >
                      Universal Principles of Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://fs.blog/2013/02/the-psychology-of-human-misjudgement/"
                      target="_blank"
                    >
                      The Psychology of Human Misjudgement
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.epsilontheory.com/too-clever-by-half/"
                      target="_blank"
                    >
                      Too Clever By Half
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=ZORzsubQA_M"
                      target="_blank"
                    >
                      Superblocks: How Barcelona is taking city streets back
                      from cars
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.amazon.com/Predictably-Irrational-Revised-Expanded-Decisions/dp/0061353248"
                      target="_blank"
                    >
                      Predictably Irrational
                    </a>
                  </li>
                </ul>
              </div>
              <div className="6u 12u$(xsmall)">
                <ul className="alt">
                  <li>
                    <a
                      href="http://latticeworkinvesting.com/2018/04/06/peter-kaufman-on-the-multidisciplinary-approach-to-thinking/"
                      target="_blank"
                    >
                      Multidisciplinary approach to thinking
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://quillette.com/2018/08/25/the-dangers-of-ignoring-cognitive-inequality/"
                      target="_blank"
                    >
                      The Dangers Of Ignoring Cognitive Inequality
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=f54jAzYawZ"
                      target="_blank"
                    >
                      Enlightened Beings Share Their Spiritual Awakening
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.fpspi.org/"
                      target="_blank"
                    >
                      Future Problem Solvers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <GetInTouch />
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
