import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import styled from 'styled-components'
import {Margin, Padding} from 'styled-components-spacing'

const Home = () =>

  <div className='homeContainer'>
    <Padding all={6}>
      <Headline>
        <NameHome>NOOR AHMAD</NameHome>
        <Desc>FRONT END ENGINEER</Desc>
      </Headline>
    </Padding>
  </div>

//const HomeContainer = styled.div`
//  display: block;
//  background-color: #DE0D92;
//`

const Headline = styled.div`
  text-align:center;
`
const NameHome = styled.h1`
  font-size:100px;
  padding-bottom:100px;
`

const Desc = styled.h1`
  font-size:40px;
`

export default Home
