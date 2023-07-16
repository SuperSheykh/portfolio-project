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
   .text-light-gray {
      color: #ffffff62;
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

   ul {
      list-style: none;
   }

   /* STYLING FOR DARK SECTIONS */
   &.dark {
      background-color: var(--darkBackground);
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

   .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.25rem;
   }
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

export default Section
