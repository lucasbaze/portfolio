import React from 'react'

//Custom Components
import { Link } from 'gatsby'
import GetInTouch from '../components/GetInTouch'
import Gallery from '../components/Gallery'

import Layout from '../components/layout'
import PostHeaderImg from '../components/PostHeaderImg'

import header from '../assets/images/it-lifecycle/header.png'

class ItLifecycle extends React.Component {
  render() {
    return (
      <Layout>
        <PostHeaderImg img={header} />
        <div id="post">
          <section id="one">
            <header className="major">
              <h1>
                IT Lifecycle Management Tool
                <br />
              </h1>
              <h2>An internal tool for access / asset management</h2>
            </header>
            <p>
              The HR team was using spreadsheets and emails to make sure that
              all employees were getting the right access, when they onboarded,
              transfered or were terminated. This has led to a serious security
              hole for the company and a terrible employee experience. This
              portal is designed to ensure that the company can manage their
              assets and access of their employees.
            </p>
          </section>

          <section>
            <h2>Responibility</h2>
            <ul>
              <li>Understand needs of management and end user</li>
              <li>Design user interface and user flow</li>
              <li>Build applicaiton using PHP and MS Access</li>
            </ul>

            <h2>Highlights</h2>

            <ul>
              <li>First Contract Project delivered on time and under budget</li>
              <li>
                Authentication and Databse through Firebase (No Server Needed)
              </li>
              <li>Design to Live in less than 2 weeks</li>
            </ul>

            <h2>Tech</h2>
            <ul>
              <li>Vanilla PHP</li>
            </ul>
          </section>

          <GetInTouch />
        </div>
      </Layout>
    )
  }
}

export default ItLifecycle
