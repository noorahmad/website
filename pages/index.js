import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import Home from '../components/home'
import About from '../components/about'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Footer from '../components/Footer'
import { injectGlobal } from 'styled-components'

const mains = [ <Home />, <About />, <Projects />, <Contact />, <Footer /> ]

const Index = () =>
  <div>
    {mains.map((p, i) => <div key={i} className='index-main-wrapper'>{p}</div>)}
  </div>

injectGlobal`
    body {
      margin: 0;
      padding: 0;
      font-family: Futura;
      background-color:#1B3B6F;
      color:#FFFFFF;
    }
`

export default Index
