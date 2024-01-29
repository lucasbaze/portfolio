import React, { useState, useEffect } from 'react'

import { useForm } from '../hooks/useForm'

const GetInTouch = () => {
  return (
    <section id="three">
      <h2>Get In Touch 📬</h2>
      <p>
        If you're looking to work on a project, or inquiring about previous work
        I've done, do not hesitate to reach out. I do my best to respond to all
        emails within 24 hours.
      </p>
      <div className="row">
        <div className="4u 12u$(small)">
          <ul className="labeled-icons">
            <li>
              <h3 className="icon fa-home">
                <span className="label">Address</span>
              </h3>
              Houston, TX
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
              <a href="#">lucasabazemore@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
