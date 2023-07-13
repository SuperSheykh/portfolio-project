import { styled } from 'styled-components'
import MySection from './styled/Section'
import Container from './styled/Container'
import { LearnMoreButton, LightPrimaryIcon } from './styled/Buttons'
import React from 'react'
import { FaBuffer } from 'react-icons/fa'
import { BiDevices } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const HeroServices = () => {
   const Section = styled(MySection)`
      text-align: center;

      h2 {
         margin-block: 1em;
      }
      .services {
         border: 1px solid #f3d1bf;
         border-radius: 5px;
         display: flex;
         flex-direction: column;
         margin-bottom: 2em;
      }
      .services article {
         border-bottom: 1px solid #f3d1bf;
         padding: 2em;
      }
      .services article:last-of-type {
         border: none;
      }
      article > div {
         display: flex;
         align-items: center;
         gap: 2em;
      }

      article p {
         color: var(--text-dark-gray);
         margin-block: 2em;
         text-align: left;
      }

      p {
         color: var(--text-dark-gray);
      }

      p a {
         text-decoration: none;
      }

      p a:hover {
         text-decoration: underline;
      }

      @media screen and (min-width: 670px) {
         .services {
            flex-direction: row;
            flex-wrap: wrap;
         }
         .services article {
            width: 50%;
            border-bottom: none;
            border-right: 1px solid #f3d1bf;
         }
      }
   `
   return (
      <Section>
         <Container>
            <h5>Services</h5>
            <h2>How can I help you with</h2>
            <div className='services'>
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
            </div>
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
