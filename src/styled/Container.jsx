import { styled } from 'styled-components'

// This container is responsible for general layout.
const Container = styled.div`
   width: var(--view-width);
   max-width: var(--max-width);
   margin: 0 auto;

   @media screen and (min-width: 670px) {
      .flex {
         display: flex;
         justify-content: space-between;
         align-items: center;
         gap: 2em;
         & > * {
            width: 45%;
         }
      }
   }
`
export default Container
