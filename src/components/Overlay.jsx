import React from 'react'
import { styled } from 'styled-components'
const Overlay = ({ img, text, title }) => {
   const Div = styled.div`
      position: relative;
      margin-bottom: 2em;
      border-radius: 4px;
      img {
         opacity: 0.8;
      }
      .text-container {
         padding: 0 2em;
         position: absolute;
         bottom: 3em;
         text-transform: capitalize;
      }
      span {
         padding: 0.5rem 0.8rem;
         background-color: white;
         border-radius: 20px;
         color: var(--text-dark);
      }
      h3 {
         margin-top: 0.5em;
      }
      @media screen and (min-width: 670px) {
         flex: 1 0 30%;
         min-width: 250px;
         max-width: 45%;
      }
   `
   return (
      <Div>
         <img src={img} alt='some image' />
         <div className='text-container'>
            <span>{text}</span>
            <h3>{title}</h3>
         </div>
      </Div>
   )
}

export default Overlay
