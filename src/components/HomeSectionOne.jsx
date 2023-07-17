import { styled } from 'styled-components'
import MySection from './styled/Section'
import Container from './styled/Container'
import { StyledBorderCard } from './styled/Cards'
import { LearnMoreButton, LightPrimaryIcon } from './styled/Buttons'
import React from 'react'
import { FaBuffer } from 'react-icons/fa'
import { BiDevices } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const HeroServices = () => {
   const Section = styled(MySection)`
      text-align: center;
   `
   const Card = styled(StyledBorderCard)`
      article > div {
         display: flex;
         align-items: center;
         gap: 2em;
      }

      p {
         margin-block: 2em;
      }

      p a {
         text-decoration: none;
      }

      p a:hover {
         text-decoration: underline;
      }
   `
   return (
      <Section>
         <Container>
            <h5>Services</h5>
            <h2>How can I help you with</h2>
            <Card>
               <article>
                  <div>
                     <LightPrimaryIcon>
                        <FaBuffer />
                     </LightPrimaryIcon>
                     <h4>Design</h4>
                  </div>
                  <p>
                     Agency is a business you hire to outsource your digital
                     marketing efforts, instead of handling in-house.
                  </p>
                  <LearnMoreButton to='/services' />
               </article>
               <article>
                  <div>
                     <LightPrimaryIcon>
                        <BiDevices />
                     </LightPrimaryIcon>
                     <h4>Developement</h4>
                  </div>
                  <p>
                     Hire to outsource your digital marketing efforts, instead
                     of handling in-house can provide your business.
                  </p>
                  <LearnMoreButton />
               </article>
            </Card>
            <p>
               Want more service?{' '}
               <Link to='/contact' style={{ color: '#391400' }}>
                  Contact now
               </Link>
            </p>
         </Container>
      </Section>
   )
}

export default HeroServices
