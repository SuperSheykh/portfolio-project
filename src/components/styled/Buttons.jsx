import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const Button = styled.a`
   display: inline-block;
   font-size: 0.875rem;
   padding: 1.5em 3em;
   margin-block: 1.5em;
   background-color: var(--text-light-accent);
   text-decoration: none;
   text-transform: uppercase;
   color: white;
   color: var(--my-fav-color);
   font-weight: bold;
   border: none;
   border-radius: var(--input-border-radius);
   cursor: pointer;
   transition: all 0.2s ease;

   &:hover {
      transform: scale(0.98);
      text-decoration: underline;
      color: #c3fac5;
   }
`
export const LightButton = styled(Button)`
   background-color: #b550f8;
   color: white;
`
export const MyLinkButton = styled(Link)`
   display: inline-block;
   font-size: 0.875rem;
   padding: 1.5em 3em;
   margin-block: 1.5em;
   background-color: var(--text-light-accent);
   text-decoration: none;
   text-transform: uppercase;
   color: white;
   color: var(--my-fav-color);
   font-weight: bold;
   border: none;
   border-radius: var(--input-border-radius);
   cursor: pointer;
   transition: all 0.2s ease;

   &:hover {
      transform: scale(0.98);
      text-decoration: underline;
      color: #c3fac5;
   }
`

export const Icon = ({ children }) => {
   return <Link>{children}</Link>
}

export const LearnMoreButton = () => {
   const Oval = styled.a`
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

      &:hover {
         text-decoration: none;
      }
   `

   const FlexDiv = styled.div`
      display: flex;
      align-items: center;
      cursor: pointer;
      .text {
         color: var(--text-dark);
         text-decoration: none;
         text-transform: capitalize;
      }
      .text:hover {
         text-decoration: underline;
      }
   `

   return (
      <FlexDiv>
         <Oval>+</Oval>
         <Link to='/' className='text'>
            learn more
         </Link>
      </FlexDiv>
   )
}
