import React from 'react'
import { Hero } from '../components/'
import { Container, Section, LearnMoreButton } from '../styled'
import { styled } from 'styled-components'

import Services from '../components/Home/Services'
import Latest from '../components/Home/Latest'
import Intro from '../components/Home/Intro'

const Home = () => {
   return (
      <>
         <Hero />
         <Services />
         <Latest />
         <Intro />
      </>
   )
}

export default Home
