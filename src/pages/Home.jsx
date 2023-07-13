import React from 'react'
import Hero from '../components/Hero'
import Container from '../components/styled/Container'
import { styled } from 'styled-components'

import Section from '../components/styled/Section'
import { LearnMoreButton } from '../components/styled/Buttons'
import Services from '../components/HomeServices'
import HomePortfolio from '../components/HomePortfolio'
import HomeProf from '../components/HomeProf'

const Home = () => {
   return (
      <>
         <Hero />
         <Services />
         <HomePortfolio />
         <HomeProf />
      </>
   )
}

export default Home
