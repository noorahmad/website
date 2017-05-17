import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import ProjectItem from './projectItem'

const Projects = () =>
<div className='ProjectsContainer'>
  <main>
    <h1 className='ProjectTitle'>Projects</h1>

    <ProjectItem
      name='Whats Good Mobile Marketplace'
      imgSrc='http://i.imgur.com/OZSJC9g.png'
      imgAlt='Whats Good logo'
      desc='Developed a mobile marketplace app with my group for a software engineering course. We also entered the app in our universitys mobile app challenge. Although we didnt win in the end, we definitely made a good run. The app served as a mobile marketplace for the university community to buy/sell/trade goods. I was mostly responsible for developing the front and I was given the opportunity to traverse the entire development life cycle from sketching, to wireframes, to mocks, and in the end the final buildout. It was built using Java, SQLite, JDBC, and Android Studio.'
    />

    <ProjectItem
      name='Fuel Tracking App'
      imgSrc='http://i.imgur.com/aAurR1w.png'
      imgAlt='Fuel Logo'
      desc='A personal project that I decided to pursue was a fuel tracking app. I wanted to familiarize myself with Swift and Xcode so I chose to build an app that was used to track and store fuel consumption, as well as calculate different data such as spending on fuel, distance travelled, and miles per gallon, among other things.'
    />

    <ProjectItem
      name='NachOS'
      imgSrc='http://i.imgur.com/xcatoL4.png'
      imgAlt='Some icon for nachos placeholder'
      desc='One of the final projects I worked on in university was the NachOS operating system. My group built a working operating system under the NachOS framework in Java, which implemented synchronization constructs, a priority scheduler, user threads using syscall interface to provide access to file system and I/O, a network interface with a chat server/client program.'
    />
  </main>
</div>

export default Projects
