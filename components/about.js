import React from 'react'
import {prefixLink } from 'gatsby-helpers'
import styled from 'styled-components'
import {Margin,Padding} from 'styled-components-spacing'


const About = () =>
<main className='About'>
  <Padding all={5}>
    <AboutContainer>
      <h1 className='AboutHeader'>About Me</h1>
        <div>
          <img className='Portrait'
            src={prefixLink('/img/me2.jpg')}
            alt='Photo of Noor'
          />
        </div>
      <NameDeclaration>I AM NOOR AHMAD</NameDeclaration>
        <p>I am a recent university graduate looking for a career in web development.</p>
        <p>Ever since I was young Ive had a passion for building things and now I am able to realize that passion through software development.</p>
        <p>Aside from these tech related subjects, my interests include soccer (Go Liverpool!) and Im a huge fan of tech house music (check out my soundcloud feed).</p>
    </AboutContainer>
  </Padding>
</main>

const AboutContainer = styled.div`
  text-align:center;
`
const NameDeclaration = styled.h2`
  font-family:Ano;
`

export default About
