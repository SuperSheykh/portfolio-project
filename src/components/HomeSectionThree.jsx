import React from 'react'
import StyledSection from './styled/Section'
import { StyledBorderCard } from './styled/Cards'
import { styled } from 'styled-components'
import pic from '../assets/pic.png'
import { Button, LightPrimaryIcon } from './styled/Buttons'
import Container from './styled/Container'
import { FaAd } from 'react-icons/fa'
const HomeProf = () => {
   const Section = styled(StyledSection)`
      .text-part {
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         gap: 1.25rem;
      }
      @media screen and (min-width: 670px) {
         .flex {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 2em;
            & > * {
               width: 45%;
            }
         }
      }
   `
   const CardContainer = styled(StyledBorderCard)`
      article {
         display: flex;
         align-items: center;
         gap: 2em;
      }
   `

   const Icon = styled(LightPrimaryIcon)`
      font-size: 30px;
   `
   return (
      <Section className='grid'>
         <Container>
            <div className='flex'>
               <img src={pic} alt='some header pic' />
               <div className='text-part'>
                  <h5>gabriel pires</h5>
                  <h3>Professional web designer</h3>
                  <p className='text-big'>Provides a full service range</p>
                  <p>
                     Ability to put themselves in the merchant's shoes. It is
                     meant to partner on the long run, and work as an extension
                     of the merchant's team.
                  </p>
                  <Button secondary to='/about'>
                     about me
                  </Button>
               </div>
            </div>
            <div>
               <CardContainer>
                  <article>
                     <Icon>
                        <FaAd />
                     </Icon>
                     <div>
                        <h3>42%</h3>
                        <p className='text-big'>Years of experience</p>
                     </div>
                  </article>
                  <article>
                     <Icon>
                        <FaAd />
                     </Icon>
                     <div>
                        <h3>73+</h3>
                        <p className='text-big'>Projects done</p>
                     </div>
                  </article>
               </CardContainer>
            </div>
         </Container>
      </Section>
   )
}

export default HomeProf
