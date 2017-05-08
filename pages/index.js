import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import Home from '../components/home'
import About from '../components/about'
import Projects from '../components/projects'
import Contact from '../components/contact'
import { injectGlobal } from 'styled-components'

const mains = [ <Home />, <About />, <Projects />, <Contact /> ]

const Index = () =>
  <div>
    {mains.map((p, i) => <div key={i} className='index-main-wrapper'>{p}</div>)}
  </div>

injectGlobal`
    body {
      margin: 0;
      padding: 0;
      font-family: Futura;
      background-color:#2F3E46
      color:#CAD2C5;
    }
`

export default Index
