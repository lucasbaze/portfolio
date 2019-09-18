import React from 'react'

const GetInTouch = () => {
  return (
    <section id="three">
      <h2>Get In Touch</h2>
      <p>
        If you're looking to work on a project, or inquiring about previous work I've done, do not hesitate to reach out. I do my best to respond to all emails within 24 hours.
      </p>
      <div className="row">
        <div className="8u 12u$(small)">
          <form method="post" action="#">
            <div className="row uniform 50%">
              <div className="6u 12u$(xsmall)">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div className="6u 12u$(xsmall)">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="12u">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows="4"
                ></textarea>
              </div>
            </div>
          </form>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" />
            </li>
          </ul>
        </div>
        <div className="4u 12u$(small)">
          <ul className="labeled-icons">
            <li>
              <h3 className="icon fa-home">
                <span className="label">Address</span>
              </h3>
              College Station, TX
              <br />
              United States
            </li>
            <li>
              <h3 className="icon fa-mobile">
                <span className="label">Phone</span>
              </h3>
              (713) 264-1320
            </li>
            <li>
              <h3 className="icon fa-envelope-o">
                <span className="label">Email</span>
              </h3>
              <a href="#">lucas@bazemore.me</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
