import React from 'react'
import { styled } from 'styled-components'
import heroPic from '../assets/heroPic.png'
import { Button } from './styled/Buttons'
import StyledSection from './styled/Section'
import Container from './styled/Container'

const Section = styled(StyledSection)`
   .flex {
      flex-direction: row-reverse;
   }

   h4 {
      color: var(--text-dark-accent);
   }

   @media screen and (min-width: 670px) {
      .hero-img {
         max-width: 45%;
      }
   }
`

const Hero = () => {
   return (
      <Section className='dark'>
         <Container className='flex'>
            <img src={heroPic} alt='Site title image' className='hero-img' />
            <div>
               <h4 className='person-name'>Gabriel Pires</h4>
               <h1 className='person-name'>the simple, clean design</h1>
               <p>
                  Agency provides a full service range including technical
                  skills, design, business understanding.
               </p>
               <Button primary to='/services'>
                  See my work
               </Button>
            </div>
         </Container>
      </Section>
   )
}

export default Hero
