import React from 'react'
import { Link } from 'react-router-dom'
import StyledSection from './styled/Section'
import Container from './styled/Container'
import { LightPrimaryIcon } from './styled/Buttons'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { styled } from 'styled-components'
const Footer = () => {
   const Section = styled(StyledSection)`
      .footer-top {
         text-align: center;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         gap: 2em;
      }
      .icons {
         display: flex;
         justify-content: center;
         a {
            margin: 0 0.5em;
         }
      }
      .text {
         width: 100%;
         text-align: center;
      }
      a {
         text-decoration: none;
         color: #cacaca;
      }

      @media screen and (min-width: 670px) {
         .flex {
            align-items: baseline;
            padding-bottom: 2rem;
            border-bottom: 1px solid white;

            .icons {
               border: none;
               gap: 1em;
            }
         }
         .footer-top {
            text-align: left;
         }
         .copyright {
            padding-top: 2em;
            border: none;
            .text {
               width: 400px;
               margin-right: auto;
            }
         }
      }
   `
   return (
      <Section className='dark'>
         <Container className='flex footer-top'>
            <h4>Personal</h4>
            <div>
               <h5>Menu</h5>

               <p>
                  <Link to='/about'>About</Link>
               </p>
               <p>
                  <Link to='/services'>Services</Link>
               </p>
               <p>
                  <Link to='/blog'>Blog</Link>
               </p>
               <p>
                  {' '}
                  <Link to='/contact'>Contact</Link>
               </p>
            </div>
            <div>
               <h5>service</h5>
               <p>
                  <Link>Design</Link>
               </p>
               <p>
                  <Link>Development</Link>
               </p>
               <p>
                  <Link>Marketing</Link>
               </p>
               <p>
                  <Link>See more</Link>
               </p>
            </div>
            <div className='flex icons'>
               <a href='www.facebook.com' target='_blank'>
                  <LightPrimaryIcon>
                     <FaFacebook />
                  </LightPrimaryIcon>
               </a>
               <a href='www.twitter.com' target='_blank'>
                  <LightPrimaryIcon>
                     <FaTwitter />
                  </LightPrimaryIcon>
               </a>
               <a href='www.instagram.com' target='_blank'>
                  <LightPrimaryIcon>
                     <FaInstagram />
                  </LightPrimaryIcon>
               </a>
            </div>
         </Container>
         <Container className='flex copyright'>
            <p className='text'>Copyright 2023 Laqqiq. All rights reserved</p>
            <Link>Terms of Use</Link>
            <Link>Privacy policy</Link>
         </Container>
      </Section>
   )
}

export default Footer
