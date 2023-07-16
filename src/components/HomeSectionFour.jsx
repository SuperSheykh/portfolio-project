import React from 'react'
import StyledSection from './styled/Section'
import { styled } from 'styled-components'
import Container from './styled/Container'
import pic from '../assets/pic4.png'
import { Button, LightPrimaryIcon } from './styled/Buttons'
import { TiTick } from 'react-icons/ti'
import pic5 from '../assets/pic5.png'
import { StyledBorderCard } from './styled/Cards'
import { FaStar } from 'react-icons/fa'

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
   const SectionTwo = styled(StyledSection)`
      background-color: #f9e5da;
   `
   const SectionThree = styled(StyledSection)`
      .stars {
         color: #f6d021;
      }
   `
   return (
      <>
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
         <SectionTwo>
            <Container className='flex'>
               <div>
                  <h5>GET STARTED</h5>
                  <h4>I help companies</h4>
                  <h4>move faster</h4>
                  <Button to='/contact'>contact me</Button>
               </div>
               <p>
                  Put themselves in the merchant's shoes. It is meant to partner
                  on the long run.
               </p>
               <img src={pic5} alt='some image' />
            </Container>
         </SectionTwo>
         <SectionThree>
            <Container>
               <h5>testimonials</h5>
               <h3>What my clients saying</h3>
               <StyledBorderCard>
                  <article>
                     <div className='stars'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                     </div>
                     <p>
                        Outsource your digital marketing efforts, instead of
                        handling in-house. They can provide your business with a
                        variety.
                     </p>
                     <div>
                        <img src='' alt='' />
                        <div>
                           <h4></h4>
                           <p></p>
                        </div>
                     </div>
                  </article>
               </StyledBorderCard>
            </Container>
         </SectionThree>
      </>
   )
}

export default HomeSectionFour
