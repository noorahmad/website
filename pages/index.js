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

const mains = [ <Home />, <About />, <Projects />, <Contact />, <Footer /> ]

const Index = () =>
 <div className='index-wrapper'>
   {mains.map((p, i) => <div key={i} className='index-main-wrapper'>{p}</div>)}
 </div>


export default Index
