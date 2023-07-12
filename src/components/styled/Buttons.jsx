import { Link } from 'react-router-dom'
import { css, styled } from 'styled-components'

export const Button = styled(Link)`
   display: inline-block;
   font-size: 0.875rem;
   padding: 1rem 3rem;
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

   .dark & {
      ${({ secondary }) => {
         return secondary
            ? css`
                 background-color: transparent;
                 border: 1px solid #ffffffb2;
                 color: white;
              `
            : css`
                 background-color: #b550f8;
                 color: white;
              `
      }}
   }
`

export const LearnMoreButton = ({ to }) => {
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

export const LightPrimaryIcon = styled.span`
   padding: 1em;
   background-color: #ef6d58;
   border-radius: 50%;
   color: white;
   display: grid;
   place-content: center;
`
