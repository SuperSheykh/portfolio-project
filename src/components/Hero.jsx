import React from 'react'
import { styled } from 'styled-components'
import heroPic from '../assets/heroPic.png'
import { Button, MyLinkButton } from './styled/Buttons'
import { Link } from 'react-router-dom'

const HeroWrapper = styled.section`
   background-color: var(--darkBackground);
   color: white;
   padding: 2em 0;
   .hero-center {
      width: var(--view-width);
      max-width: var(--max-width);
      margin: 0 auto;
   }
   .hero-img {
      width: 100%;
   }
   h4.person-name {
      color: var(--text-dark-accent);
   }
   .btn {
      border: transparent;
      margin: 0.85em 0;
   }

   @media screen and (min-width: 670px) {
      .hero-center {
         display: flex;
         flex-direction: row-reverse;
         align-items: center;
         justify-content: center;
         gap: 5%;
      }
      .hero-img {
         max-width: 45%;
      }
   }
`

const Hero = () => {
   return (
      <HeroWrapper>
         <div className='hero-center'>
            <img src={heroPic} alt='Site title image' className='hero-img' />
            <div>
               <h4 className='person-name'>Gabriel Pires</h4>
               <h2 className='person-name'>the simple, clean design</h2>
               <p>
                  Agency provides a full service range including technical
                  skills, design, business understanding.
               </p>
               <MyLinkButton to='/services'>See my work</MyLinkButton>
            </div>
         </div>
      </HeroWrapper>
   )
}

export default Hero
