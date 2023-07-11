import { styled } from 'styled-components'
import MySection from './styled/MySection'
import Container from './styled/Container'
import { LearnMoreButton } from './styled/Buttons'
import React from 'react'
import designIcon from '../assets/Oval1.svg'

const HeroServices = () => {
   const Section = styled(MySection)`
      text-align: center;
      h5 {
         font-weight: 400;
         letter-spacing: 0.1em;
         text-transform: uppercase;
      }
      h2 {
         margin-block: 1em;
      }
      .services {
         padding: 2em;
         border: 1px solid red;
         border-radius: 5px;
         display: grid;
         grid-template-columns: 1fr;
         gap: 2em;
      }
      article {
      }
      article > div {
         display: flex;
         align-items: center;
         gap: 2em;
      }
      p {
         color: var(--text-dark-gray);
         margin-block: 2em;
         text-align: left;
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
                     <img src={designIcon} alt='design icon' />
                     <h4>Design</h4>
                  </div>
                  <p>
                     Agency is a business you hire to outsource your digital
                     marketing efforts, instead of handling in-house.
                  </p>
                  <LearnMoreButton />
               </article>
               <hr />
               <article>
                  <div>
                     <img src={designIcon} alt='design icon' />
                     <h4>Design</h4>
                  </div>
                  <p>
                     Agency is a business you hire to outsource your digital
                     marketing efforts, instead of handling in-house.
                  </p>
                  <LearnMoreButton />
               </article>
            </div>
         </Container>
      </Section>
   )
}

export default HeroServices
