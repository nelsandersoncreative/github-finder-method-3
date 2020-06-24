import React, { Fragment } from 'react'

const About = () => {
  return (
      <Fragment>
        <h1 className="about heading">About this app</h1>
        <p className="aboutText">App to search GitHub users</p>
        <p className="aboutVersion">Version: 1.0.0</p>
      </Fragment>
  )
}

export default About;