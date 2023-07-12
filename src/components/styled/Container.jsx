import { styled } from 'styled-components'

// This container is responsible for general
const Container = styled.div`
   width: var(--view-width);
   max-width: var(--max-width);
   margin: 0 auto;
`
export default Container

const LayoutContainer = styled(Container)`
   display: flex;
   flex-direction: column;
   gap: 2rem;

   @media screen and (min-width: 670px) {
   }
`
