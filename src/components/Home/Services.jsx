import { styled } from 'styled-components'
import {
   Section,
   Container,
   BorderCard,
   LearnMoreButton,
   Icon,
} from '../../styled'
import { FaBuffer } from 'react-icons/fa'
import { BiDevices } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Services = () => {
   return (
      <Wrapper>
         <Container>
            <h5>Services</h5>
            <h2>How can I help you with</h2>
            <Card>
               <article>
                  <div>
                     <Icon>
                        <FaBuffer />
                     </Icon>
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
                     <Icon>
                        <BiDevices />
                     </Icon>
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
      </Wrapper>
   )
}

export default Services

const Wrapper = styled(Section)`
   text-align: center;
`
const Card = styled(BorderCard)`
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
