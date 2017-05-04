import React from 'react'
import {prefixLink } from 'gatsby-helpers'

const About = () =>
  <main className='About'>
    <section>
      <h1>About Me</h1>
        <div>
          <img
            src={prefixLink('/img/me.jpg')}
            alt='Photo of Noor'
          />
        </div>
      <p>I am on my journey to becoming a full stack software developer who</p>
      <p>likes the beauty in simplicity. A big fan of soccer and my favorite team </p>
      <p>is Liverpool, love techno music and I am a huge snob about it.</p>
    </section>
  </main>

export default About
