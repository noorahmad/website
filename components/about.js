import React from 'react'
import {prefixLink } from 'gatsby-helpers'
import styled from 'styled-components'
import {Margin,Padding} from 'styled-components-spacing'


const About = () =>
<main className='About'>
  <Padding all={6}>
    <AboutContainer>
      <h1>About Me</h1>
      <hr class='small'/>
        <div>
          <img className='Portrait'
            src={prefixLink('/img/me.jpg')}
            alt='Photo of Noor'
          />
        </div>
      <NameDeclaration>I AM NOOR AHMAD, RECENT UNIVERSITY GRADUATE</NameDeclaration>
        <p>I am on my journey to becoming a full stack software developer who</p>
        <p>likes the beauty in simplicity. Im A big fan of soccer and my favorite team </p>
        <p>is Liverpool, love techno music and I am a huge snob about it.</p>
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
