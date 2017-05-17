import React from 'react'
import {prefixLink } from 'gatsby-helpers'

const About = () =>
<main className='About'>
    <div className='AboutContainer'>
      <h1 className='AboutHeader'>About Me</h1>
        <div>
          <img className='Portrait'
            src='http://i.imgur.com/VDOt0Sf.jpg'
            alt='Photo of Noor'
          />
        </div>
      <h2 className='NameDeclaration'>I AM NOOR AHMAD</h2>
        <p>I am a recent university graduate looking for a career in web development.</p>
        <p>Ever since I was young Ive had a passion for building things and now I am able to realize that passion through software development.</p>
        <p>Aside from these tech related subjects, my interests include soccer (Go Liverpool!) and Im a huge fan of tech house music (check out my soundcloud feed).</p>
    </div>
</main>

export default About
