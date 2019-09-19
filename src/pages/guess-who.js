import React from 'react'

//Custom Components
import { Link } from 'gatsby'
import GetInTouch from '../components/GetInTouch'
import Gallery from '../components/Gallery'

import Layout from '../components/layout'
import PostHeaderImg from '../components/PostHeaderImg'

import guessWho from '../assets/images/guess-who/GuessWhoHeader.png'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
  {
    id: '3',
    source: full03,
    thumbnail: thumb03,
    caption: 'Photo 3',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '4',
    source: full04,
    thumbnail: thumb04,
    caption: 'Photo 4',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '5',
    source: full05,
    thumbnail: thumb05,
    caption: 'Photo 5',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '6',
    source: full06,
    thumbnail: thumb06,
    caption: 'Photo 6',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
]

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
            <h2>
                A twitter based mobile game for entertainment
              </h2>
            </header>
            <p>
              The basis of the project was to create a mobile first twitter game. The game is a high-score based guessing game, where the player guesses who was the author of a given tweet from 2 or 3 choices. The player continues to play so long as they get answers right. When the get one wrong, they lose and their score is the number of correct answers they provided.
            </p>
            <ul className="actions">
            <li>
              <a href="https://musing-heyrovsky-e80361.netlify.com/" target="_blank" className="button">
                View Live Project{' '}<span class="icon brands fa-external-link" />
              </a>
            </li>
              <li>
                <a href="https://github.com/lucasbaze/marketing-page-lucas" target="_blank" className="button">
                  View On Github{' '}<span class="icon brands fa-github" />
                </a>
              </li>
              <li>
                <a href="https://www.figma.com/file/d34mD8cxoaqJfwWJhRodei/Lambda-1-Guess-Who?node-id=6%3A19604" target="_blank" className="button">
                  View Figma Designs{' '}<span class="icon brands fa-external-link" />
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

          <GetInTouch />
        </div>
      </Layout>
    )
  }
}

export default GuessWho
