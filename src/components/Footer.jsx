import React from 'react'
import { Link } from 'react-router-dom'
import { Section, Container, Icon } from '../styled'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { styled } from 'styled-components'
const Footer = () => {
   const Wrapper = styled(Section)`
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
         margin-top: 2em;
         width: 100%;
         text-align: center;
      }
      a {
         text-decoration: none;
         color: #cacaca;
      }

      .terms {
         display: flex;
         justify-content: space-between;
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
               text-align: left;
               width: 400px;
               margin-right: auto;
            }
         }
      }
   `
   return (
      <Wrapper className='dark'>
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
                  <Icon>
                     <FaFacebook />
                  </Icon>
               </a>
               <a href='www.twitter.com' target='_blank'>
                  <Icon>
                     <FaTwitter />
                  </Icon>
               </a>
               <a href='www.instagram.com' target='_blank'>
                  <Icon>
                     <FaInstagram />
                  </Icon>
               </a>
            </div>
         </Container>
         <Container className='flex copyright'>
            <p className='text'>Copyright 2023 Laqqiq. All rights reserved</p>
            <div className='terms'>
               <Link>Terms of Use</Link>
               <Link>Privacy policy</Link>
            </div>
         </Container>
      </Wrapper>
   )
}

export default Footer
