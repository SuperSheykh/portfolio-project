import React from 'react'
import Hero from '../components/Hero'
import Container from '../components/styled/Container'
import { styled } from 'styled-components'

import Section from '../components/styled/MySection'
import { LearnMoreButton } from '../components/styled/Buttons'
import Services from '../components/HomeServices'

const Home = () => {
   return (
      <>
         <Hero />
         <Services />
      </>
   )
}

export default Home
