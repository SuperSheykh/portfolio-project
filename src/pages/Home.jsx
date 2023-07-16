import React from 'react'
import Hero from '../components/HomeHero'
import Container from '../components/styled/Container'
import { styled } from 'styled-components'

import Section from '../components/styled/Section'
import { LearnMoreButton } from '../components/styled/Buttons'
import Services from '../components/HomeSectionOne'
import HomePortfolio from '../components/HomeSectionTwo'
import HomeProf from '../components/HomeSectionThree'
import HomeSectionFour from '../components/HomeSectionFour'

const Home = () => {
   return (
      <>
         <Hero />
         <Services />
         <HomePortfolio />
         <HomeProf />
         <HomeSectionFour />
      </>
   )
}

export default Home
