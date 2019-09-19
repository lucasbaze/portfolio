import React from 'react'

//Custom Components
import { Link } from 'gatsby'
import GetInTouch from '../components/GetInTouch'
import Gallery from '../components/Gallery'

import Layout from '../components/layout'
import PostHeaderImg from '../components/PostHeaderImg'

import guessWho from '../assets/images/guess-who/GuessWhoHeader.png'

class GuessWho extends React.Component {
  render() {
    return (
      <Layout>
        <PostHeaderImg img={guessWho} />
        <div id="post">
          <section id="one">
            <header className="major">
              <h1>
                Guess Who
                <br />
              </h1>
              <h2>A twitter based mobile game for entertainment</h2>
            </header>
            <p>
              The basis of the project was to create a mobile first twitter
              game. The game is a high-score based guessing game, where the
              player guesses who was the author of a given tweet from 2 or 3
              choices. The player continues to play so long as they get answers
              right. When the get one wrong, they lose and their score is the
              number of correct answers they provided.
            </p>
            <ul className="actions">
              <li>
                <a
                  href="https://musing-heyrovsky-e80361.netlify.com/"
                  target="_blank"
                  className="button"
                >
                  View Live Project{' '}
                  <span class="icon brands fa-external-link" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/lucasbaze/marketing-page-lucas"
                  target="_blank"
                  className="button"
                >
                  View On Github <span class="icon brands fa-github" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.figma.com/file/d34mD8cxoaqJfwWJhRodei/Lambda-1-Guess-Who?node-id=6%3A19604"
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
            <h2>Responsibility</h2>
            <ul>
              <li>
                Build a mobile first, responsive landing page for the game using
                HTML and CSS
              </li>
              <li>Design the entire UI / UX of the application in 2 days</li>
            </ul>

            <h2>Highlights</h2>

            <ul>
              <li>Excellent Mobile Responsiveness</li>
              <li>Animations on Contact Us page and individual profiles</li>
              <li>Figma designs for entire front end / user flow</li>
            </ul>

            <h2>Tech</h2>

            <ul>
              <li>HTML</li>
              <li>SCSS</li>
            </ul>
          </section>

          <GetInTouch />
        </div>
      </Layout>
    )
  }
}

export default GuessWho
