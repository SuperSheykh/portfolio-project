import { Link } from 'react-router-dom'
import { css, styled } from 'styled-components'

const Button = styled(Link)`
   display: inline-block;
   font-size: 0.875rem;
   padding: 1rem 3rem;
   margin-block: 1.5em;

   text-decoration: none;
   text-transform: uppercase;
   font-weight: bold;
   border: none;
   border-radius: var(--input-border-radius);
   cursor: pointer;
   transition: all 0.2s ease;

   ${({ secondary }) => {
      return secondary
         ? css`
              background-color: white;
              color: var(--text-dark);
              transition: all 0.2s ease;
              &:hover {
                 background-color: var(--text-dark);
                 color: white;
              }
           `
         : css`
              background-color: var(--text-light-accent);
              color: var(--my-fav-color);
              &:hover {
                 transform: scale(0.98);
                 text-decoration: underline;
                 color: #c3fac5;
              }
           `
   }}

   .dark & {
      ${({ secondary }) => {
         return secondary
            ? css`
                 background-color: transparent;
                 border: 1px solid #ffffffb2;
                 color: white;
                 transition: all 0.2s ease;
                 &:hover {
                    background-color: white;
                    color: var(--text-dark);
                 }
              `
            : css`
                 background-color: #b550f8;
                 color: white;
              `
      }}

      ${({ primary }) => {
         if (primary) {
            return css`
               background-color: var(--text-light-accent);
               color: var(--my-fav-color);
               &:hover {
                  transform: scale(0.98);
                  text-decoration: underline;
                  color: #c3fac5;
               }
            `
         }
      }}
   }
`
export default Button
