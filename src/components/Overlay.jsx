import React from 'react'
import { styled } from 'styled-components'
const Overlay = ({ img, text, title }) => {
   const Div = styled.div`
      padding: 1rem;
      .img-container {
         padding: 3rem;
         max-width: 100%;
         height: 27rem;
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         justify-content: flex-end;
         border: 1px dashed green;
      }
      span {
         padding: 0.25rem 0.5rem;
         background-color: white;
         border-radius: 20px;
         color: var(--text-dark);
      }
      h3 {
         margin-top: 0.5em;
      }
   `
   return (
      <Div>
         <div className='img-container'>
            <span>Design</span>
            <h3>SOFA</h3>
         </div>
      </Div>
   )
}

export default Overlay
