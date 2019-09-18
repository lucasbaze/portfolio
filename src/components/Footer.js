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
                class="icon brands fa-twitter"
              >
                <span class="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCUblI1Awow2KXSATQDBtklw"
                target="_blank"
                class="icon brands fa-youtube-play"
              >
                <span class="label">YouTube</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/lucas-bazemore-b3ba1264/"
                target="_blank"
                class="icon brands fa-linkedin"
              >
                <span class="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/lucasbaze"
                target="_blank"
                class="icon brands fa-github"
              >
                <span class="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@lucasbazemore"
                target="_blank"
                class="icon brands fa-medium"
              >
                <span class="label">Medium</span>
              </a>
            </li>
            <li>
              <a
                href="https://m.me/lucas.bazemore"
                target="_blank"
                class="icon brands fa-facebook"
              >
                <span class="label">Messenger</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; Gatsby Starter Strata</li>
            <li>
              Design: <a href="http://html5up.net">HTML5 UP</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
