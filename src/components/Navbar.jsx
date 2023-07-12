import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import logo from '../assets/logo.png'
import { useAppContext } from '../context'
import { FaBars } from 'react-icons/fa'

const Wrapper = styled.section`
   background-color: var(--darkBackground);
   display: flex;
   align-items: center;
   justify-content: center;
   padding-block: 1rem;
   .nav-center {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: var(--view-width);
      max-width: var(--max-width);
   }
   .nav-icon,
   .nav-btn {
      background-color: transparent;
      padding: 10px;
      text-decoration: none;
      color: white;
      border: 1px solid #e1e7fc;
      border-radius: 6px;
      cursor: pointer;
      transition: vav(--transition);
   }
   .nav-icon:hover {
      transform: scale(0.9);
   }
   .nav-links,
   .nav-btn {
      display: none;
      transition: all 200ms ease;
   }

   .activeContact {
      border-color: var(--text-dark-accent);
   }

   @media screen and (min-width: 670px) {
      .nav-icon {
         display: none;
      }
      .nav-links,
      .nav-btn {
         display: block;
      }
      .nav-links {
         display: flex;
         justify-content: space-around;
         padding-block: 10px;
         width: 50%;
         max-width: 450px;
         .active {
            border-bottom-color: var(--text-dark-accent);
         }
      }
      .nav-link {
         text-decoration: none;
         color: white;
         padding: 8px;
         border-bottom: 2px solid transparent;
      }
      .nav-link:hover {
         border-bottom: 2px solid white;
      }
   }
`

const ModalWrapper = styled.div`
   display: flex;
   position: fixed;
   top: 80px;
   bottom: 0;
   right: 0;
   height: calc(100vh-80px);
   z-index: 10;
   transition: transform 0.2s ease-in-out;

   .close-area {
      width: 30vw;
      background-color: transparent;
   }
   .list {
      background-color: #f0f5f9f9;
      display: flex;
      flex-direction: column;
      row-gap: 0.2em;
      width: 70vw;
      padding-top: 1em;
      border-radius: 0.15rem;
   }
   .nav-link {
      display: block;
      font-family: inherit;
      text-align: center;
      text-transform: capitalize;
      padding-block: 1.2em;
      color: gray;
      text-decoration: none;
      transition: all 400ms ease;
   }
   .nav-link:hover {
      background-color: #c5c5c5;
      color: #464646;
      margin-left: 15px;
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
   }
   .active {
      background-color: var(--text-dark-gray);
      text-decoration: underline;
      color: white;
      margin-left: 15px;
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
   }

   @media screen and (min-width: 670px) {
      display: none;
   }
`

const NavListModal = () => {
   const { isNavOpen, toggleNavButton } = useAppContext()

   return (
      <ModalWrapper className={isNavOpen ? '' : 'hide-nav'}>
         <div className='close-area' onClick={toggleNavButton}></div>
         <div className='list'>
            <NavLink
               to='/about'
               className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
               }
               onClick={toggleNavButton}
            >
               About
            </NavLink>
            <NavLink
               to='/services'
               className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
               }
               onClick={toggleNavButton}
            >
               Services
            </NavLink>
            <NavLink
               to='/prices'
               className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
               }
               onClick={toggleNavButton}
            >
               Pricing
            </NavLink>
            <NavLink
               to='/blog'
               className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
               }
               onClick={toggleNavButton}
            >
               Blog
            </NavLink>
            <NavLink
               to='/contact'
               className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
               }
               onClick={toggleNavButton}
            >
               Contact
            </NavLink>
         </div>
      </ModalWrapper>
   )
}

const Navbar = () => {
   const { isNavOpen, toggleNavButton } = useAppContext()

   return (
      <Wrapper>
         <nav className='nav-center'>
            <NavLink to='/'>
               <img src={logo} alt='logo' />
            </NavLink>

            <div className='nav-links'>
               <NavLink
                  to='/about'
                  className={({ isActive }) =>
                     isActive ? 'nav-link active' : 'nav-link'
                  }
               >
                  About
               </NavLink>
               <NavLink
                  to='/services'
                  className={({ isActive }) =>
                     isActive ? 'nav-link active' : 'nav-link'
                  }
               >
                  Services
               </NavLink>
               <NavLink
                  to='/prices'
                  className={({ isActive }) =>
                     isActive ? 'nav-link active' : 'nav-link'
                  }
               >
                  Pricing
               </NavLink>
               <NavLink
                  to='/blog'
                  className={({ isActive }) =>
                     isActive ? 'nav-link active' : 'nav-link'
                  }
               >
                  Blog
               </NavLink>
            </div>
            <NavLink
               to='/contact'
               className={({ isActive }) =>
                  isActive ? 'nav-btn activeContact' : 'nav-btn'
               }
            >
               Contact
            </NavLink>
            <NavLink className='nav-icon' onClick={toggleNavButton}>
               <FaBars className='bars' />
            </NavLink>
            <NavListModal />
         </nav>
      </Wrapper>
   )
}

export default Navbar
