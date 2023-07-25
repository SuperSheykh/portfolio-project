import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const LearnMoreButton = ({ to }) => {
   const Oval = styled.span`
      border: none;
      width: 3rem;
      height: 3rem;
      display: grid;
      place-content: center;
      background-color: white;
      color: #ef6d58;
      border-radius: 50%;
      box-shadow: var();
      font-size: 3rem;
      font-weight: 200;
      text-decoration: none;

      &:hover {
         text-decoration: none;
      }
   `
   const FlexLink = styled(Link)`
      display: flex;
      align-items: center;
      gap: 1.5em;
      cursor: pointer;
      text-decoration: none;
      color: var(--text-dark);
      text-transform: capitalize;

      &:hover {
         .text {
            text-decoration: underline;
         }
      }
   `

   return (
      <FlexLink to={to}>
         <Oval>+</Oval>
         <span className='text'>learn more</span>
      </FlexLink>
   )
}
export default LearnMoreButton
