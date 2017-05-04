import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import ProjectItem from './projectitem'

const Projects = () =>
  <main className='Projects'>
    <a name='projects' />
    <h2>Projects</h2>

    <ProjectItem
      name='Whats Good Mobile Marketplace'
      imgSrc={prefixLink('/img/logo-web.png')}
      imgAlt='Whats Good logo'
      desc='Whats Good was a mobile marketplace app my group and I decided to make for our senior year software engineering class. It was built with android studio using JavaScript and integrated a database.'
    />

    <ProjectItem
      name='Fuel Tracking App'
      imgSrc={prefixLink('/img/gas.png')}
      imgAlt='Fuel Logo'
      desc='Fuel tracking app to track consumption and other things that are done at gas stations.'
    />

    <ProjectItem
      name='NachOS'
      imgSrc={prefixLink('#')}
      imgAlt='Some icon for nachos placeholder'
      desc='Built an operating system from a template for OS which I took last summer'
    />
  </main>

export default Projects
