import React from 'react'
import StyledSection from './styled/Section'
import { styled } from 'styled-components'
import { Button } from './styled/Buttons'
import Overlay from './Overlay'
import Container from './styled/Container'

const HomePortfolio = () => {
   const Section = styled(StyledSection)``
   return (
      <Section dark className='dark'>
         <Container>
            <h5>portfolio</h5>
            <div>
               <h2>Latest Work</h2>
               <Button secondary to='/about'>
                  Explore more
               </Button>
            </div>
            <div className='overlay'>
               <Overlay />
               <Overlay />
               <Overlay />
            </div>
         </Container>
      </Section>
   )
}

export default HomePortfolio
