import { styled } from 'styled-components'

const Section = styled.section`
   padding: 4rem 0;

   /* CLASS STYLING */
   .big-text {
      font-size: 20px;
      line-height: 32px;
   }
   p,
   .text {
      font-size: 16px;
      line-height: 32px;
   }
   .text-gray {
      color: var(--text-dark-gray);
   }
   .small-text {
      font-size: 14px;
      line-height: 24px;
      color: var(--text-light-gray);
   }

   .input {
      border-radius: var(--input-border-radius);
      width: 16.875rem;
      height: 3rem;
      font-size: 1rem;
      color: var(--text-dark-gray);
      border: 1px solid #f3d1bf;
   }

   /* STYLING FOR DARK SECTIONS */
   &.dark {
      background-color: #26262c;
      color: var(--text-light);
      h5 {
         color: var(--text-light-accent);
      }
   }
`

export default Section
