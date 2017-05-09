import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import ProjectItem from './projectItem'
import styled from 'styled-components'
import {Margin,Padding} from 'styled-components-spacing'

const Projects = () =>
<ProjectsWrapper>
<Padding all={5}>
  <main>
    <ProjectDeclaration>Projects</ProjectDeclaration>
    <hr/>

    <ProjectItem
      name='Whats Good Mobile Marketplace'
      imgSrc={prefixLink('/img/wg.svg')}
      imgAlt='Whats Good logo'
      desc='Whats Good was a mobile marketplace app my group and I decided to make for our senior year software engineering class. It was built with android studio using JavaScript and integrated a database.'
    />

    <ProjectItem
      name='Fuel Tracking App'
      imgSrc={prefixLink('/img/fuel.svg')}
      imgAlt='Fuel Logo'
      desc='Fuel tracking app to track consumption and other things that are done at gas stations.'
    />

    <ProjectItem
      name='NachOS'
      imgSrc={prefixLink('/img/os.svg')}
      imgAlt='Some icon for nachos placeholder'
      desc='Built an operating system from a template for OS which I took last summer'
    />
  </main>
</Padding>
</ProjectsWrapper>

const ProjectsWrapper = styled.div`
  background-color:#065A82;
`

const ProjectDeclaration = styled.h1`
  text-align:center;
  padding-top:40px;
`

export default Projects
