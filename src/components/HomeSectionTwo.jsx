import React from 'react'
import StyledSection from './styled/Section'
import { styled } from 'styled-components'
import { Button } from './styled/Buttons'
import Overlay from './Overlay'
import Container from './styled/Container'
import sev1 from '../assets/sev1.png'
import sev2 from '../assets/sev2.png'
import sev3 from '../assets/sev3.png'
const HomePortfolio = () => {
   const Section = styled(StyledSection)`
      .header {
         display: flex;
         justify-content: space-between;
         align-items: center;
         flex-wrap: wrap;
      }
      .overlays {
         display: flex;
         flex-direction: column;
         gap: 2em;
      }
      @media screen and (min-width: 670px) {
         .overlays {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
         }
      }
   `
   return (
      <Section dark className='dark'>
         <Container>
            <h5>portfolio</h5>
            <div className='header'>
               <h2>Latest Work</h2>
               <Button secondary to='/about'>
                  Explore more
               </Button>
            </div>
            <div className='overlays'>
               <Overlay img={sev1} text='design' title='sofa' />
               <Overlay img={sev2} text='branding' title='Keyboard' />
               <Overlay img={sev3} text='illustrating' title='Work' />
            </div>
         </Container>
      </Section>
   )
}

export default HomePortfolio
