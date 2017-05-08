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
      font-family: Comic Sans MS;
      background:
radial-gradient(black 15%, transparent 16%) 0 0,
radial-gradient(black 15%, transparent 16%) 8px 8px,
radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;
background-color:#282828;
background-size:16px 16px;
      color:white;
    }
`

export default Index
