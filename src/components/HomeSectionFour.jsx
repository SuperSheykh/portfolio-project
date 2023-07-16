import React from 'react'
import StyledSection from './styled/Section'
import { styled } from 'styled-components'
import Container from './styled/Container'
import pic from '../assets/pic4.png'
import { LightPrimaryIcon } from './styled/Buttons'
import { TiTick } from 'react-icons/ti'

const HomeSectionFour = () => {
   const Section = styled(StyledSection)`
      .flex {
         @media screen and (min-width: 670px) {
            flex-direction: row-reverse;
            align-items: center;
         }
      }

      ul {
         li {
            display: flex;
            align-items: center;
            margin: 1em 0;
            p {
               margin-left: 1em;
            }
         }
      }
   `
   const Icon = styled(LightPrimaryIcon)`
      font-size: 1em;
   `
   return (
      <Section className='dark'>
         <Container className='flex'>
            <img src={pic} alt='section picture' />
            <div className='text'>
               <h5>features</h5>
               <h3>Give your site a new look</h3>
               <p className='text-big'>
                  Servive range including technical skills, design, business,
                  understanding.
               </p>
               <ul>
                  <li>
                     <Icon>
                        <TiTick />
                     </Icon>
                     <p>Business understanding</p>
                  </li>
                  <li>
                     <Icon>
                        <TiTick />
                     </Icon>
                     <p>Partners on the long run</p>
                  </li>
                  <li>
                     <Icon>
                        <TiTick />
                     </Icon>
                     <p>Range including technical skills</p>
                  </li>
               </ul>
            </div>
         </Container>
      </Section>
   )
}

export default HomeSectionFour
