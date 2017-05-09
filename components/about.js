import React from 'react'
import {prefixLink } from 'gatsby-helpers'
import styled from 'styled-components'
import {Margin,Padding} from 'styled-components-spacing'


const About = () =>
<main className='About'>
  <Padding all={5}>
    <AboutContainer>
      <h1>About Me</h1>
      <hr class='small'/>
        <div>
          <img className='Portrait'
            src={prefixLink('/img/me2.jpg')}
            alt='Photo of Noor'
          />
        </div>
      <NameDeclaration>I AM NOOR AHMAD</NameDeclaration>
        <p>I am a recent university graduate looking for a career in web development</p>
        <p>I have vast array of expertise and skills that I am hoping </p>
        <p>will grow in the near future. Feel free to contact me at any time.</p>
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
