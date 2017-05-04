import React from 'react'
import { prefixLink } from 'gatsby-helpers'

const Home = () =>
  <main className='Home'>
    <div className='background-image'>
      <img
        src={prefixLink('/img/background.jpg')}
        alt='Background image'
      />
    </div>
    <div>
      <h1>NOOR AHMAD</h1>
      <h3>PART TIME ENGINEER. FULL TIME SAVAGE.</h3>
    </div>

  </main>

export default Home
