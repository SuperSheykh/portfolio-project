import { styled } from 'styled-components'

const Section = styled.section`
   padding: 4rem 0;

   /* CLASS STYLING */
   h5 {
      font-weight: 400;
      letter-spacing: 0.2em;
      text-transform: uppercase;
   }
   .text-big {
      font-size: 20px;
      line-height: 32px;
      color: var(--text-dark);
   }
   p,
   .text {
      font-size: 16px;
      line-height: 32px;
   }
   p {
      color: var(--text-dark-gray);
   }
   .text-gray {
      color: var(--text-dark-gray);
   }
   .small-text {
      font-size: 14px;
      line-height: 24px;
      color: var(--text-light-gray);
   }

   img {
      width: 100%;
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
      p {
         color: var(--text-light);
      }
   }
   &.grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
   }
`

export default Section
