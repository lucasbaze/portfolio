import React, { useState, useEffect } from 'react'

import { useForm } from '../hooks/useForm'

const GetInTouch = () => {
  const [message, setMessage] = useState(null)
  const [sent, setSent] = useState(false)

  const submitHandler = formValues => {
    window.emailjs
      .send(
        'gmail',
        'template_56gPNUs8',
        formValues,
        'user_jJegj7E1mESXwgSDvckmr'
      )
      .then(res => {
        setSent(true)
        setMessage(
          'Your message was successfully sent! I will get back to you ASAP!'
        )
      })
      .catch(err => {
        setSent(true)
        setMessage('Oh no! Your message did not send. Please try again.')
      })
  }

  const [formValues, handleChange, handleSubmit] = useForm('', submitHandler)

  return (
    <section id="three">
      <h2>Get In Touch 📬</h2>
      <p>
        If you're looking to work on a project, or inquiring about previous work
        I've done, do not hesitate to reach out. I do my best to respond to all
        emails within 24 hours.
      </p>
      <div className="row">
        <div className="8u 12u$(small)">
          <form onSubmit={handleSubmit}>
            <div className="row uniform 50%">
              <div className="6u 12u$(xsmall)">
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  placeholder="Name"
                  value={formValues.from_name}
                  onChange={handleChange}
                />
              </div>
              <div className="6u 12u$(xsmall)">
                <input
                  type="email"
                  name="reply_to"
                  id="email"
                  placeholder="Email"
                  value={formValues.reply_to}
                  onChange={handleChange}
                />
              </div>
              <div className="12u">
                <textarea
                  name="message_html"
                  id="message"
                  placeholder="Message"
                  rows="4"
                  value={formValues.message_html}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            {sent && <p>{message}</p>}
            <ul className="actions" style={{ marginTop: 20 }}>
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </form>
        </div>
        <div className="4u 12u$(small)">
          <ul className="labeled-icons">
            <li>
              <h3 className="icon fa-home">
                <span className="label">Address</span>
              </h3>
              Denver, CO
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
