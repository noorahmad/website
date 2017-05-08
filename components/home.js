import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import styled from 'styled-components'
import {Margin, Padding} from 'styled-components-spacing'

const Home = () =>
  <HomeContainer>
    <Padding all={6}>
      <Headline>
        <h1>NOOR AHMAD</h1>
        <h3>FRONT END ENGINEER.</h3>
      </Headline>
    </Padding>
  </HomeContainer>

const HomeContainer = styled.div`
  background-color: #52796F;
`

const Headline = styled.div`
  text-align:center;
`

export default Home
