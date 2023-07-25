import React from 'react'
import { Section, BorderCard, Container } from '../../styled'
import { styled } from 'styled-components'
import pic from '../../assets/pic.png'
import { Button, Icon } from '../../styled'
import { FaNetworkWired, FaHouzz } from 'react-icons/fa'

const Intro = () => {
   const CardContainer = styled(BorderCard)`
      article {
         display: flex;
         align-items: center;
         gap: 2em;
      }
   `

   return (
      <Section>
         <Container>
            <div className='flex'>
               <img src={pic} alt='some header pic' />
               <div>
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
                        <FaNetworkWired />
                     </Icon>
                     <div>
                        <h3>42%</h3>
                        <p className='text-big'>Years of experience</p>
                     </div>
                  </article>
                  <article>
                     <Icon>
                        <FaHouzz />
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

export default Intro
