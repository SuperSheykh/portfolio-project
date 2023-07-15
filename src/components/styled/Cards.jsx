import { styled } from 'styled-components'

export const StyledBorderCard = styled.div`
   border: 1px solid #f3d1bf;
   border-radius: 5px;
   display: flex;
   flex-direction: column;
   margin-bottom: 2em;
   text-align: left;

   article {
      border-bottom: 1px solid #f3d1bf;
      padding: 2em;
   }
   article:last-of-type {
      border: none;
   }

   @media screen and (min-width: 670px) {
      flex-direction: row;
      flex-wrap: wrap;

      article {
         width: 50%;
         border-bottom: none;
         border-right: 1px solid #f3d1bf;
      }
   }
`
