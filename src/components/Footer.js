import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/bazemorelucas"
                target="_blank"
                className="icon brands fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            {/* <li>
              <a
                href="https://www.youtube.com/channel/UCUblI1Awow2KXSATQDBtklw"
                target="_blank"
                className="icon brands fa-youtube-play"
              >
                <span className="label">YouTube</span>
              </a>
            </li> */}
            <li>
              <a
                href="https://www.linkedin.com/in/lucas-bazemore-b3ba1264/"
                target="_blank"
                className="icon brands fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/lucasbaze"
                target="_blank"
                className="icon brands fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@lucasbazemore"
                target="_blank"
                className="icon brands fa-medium"
              >
                <span className="label">Medium</span>
              </a>
            </li>
            <li>
              <a
                href="https://m.me/lucas.bazemore"
                target="_blank"
                className="icon brands fa-facebook"
              >
                <span className="label">Messenger</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
