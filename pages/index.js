import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import Home from '../components/home'
import About from '../components/about'
import Skills from '../components/skills'
import Portfolio from '../components/portfolio'
import Contact from '../components/contact'

export default class Index extends React.Component {
  render() {
      return (
        <div>
          <Home />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </div>
      );
  }
}
