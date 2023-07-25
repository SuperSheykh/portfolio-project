import React, { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
   Home,
   About,
   Services,
   Contact,
   Error,
   Layout,
   Blog,
   Pricing,
} from './pages'

const App = () => {
   const router = createBrowserRouter([
      {
         path: '/',
         element: <Layout />,
         errorElement: <Error />,
         children: [
            {
               path: '',
               element: <Home />,
            },
            {
               path: '/about',
               element: <About />,
            },

            {
               path: '/services',
               element: <Services />,
            },
            {
               path: '/prices',
               element: <Pricing />,
            },

            {
               path: '/blog',
               element: <Blog />,
            },
            {
               path: '/contact',
               element: <Contact />,
            },
         ],
      },
   ])

   return (
      <main>
         <RouterProvider router={router} />
      </main>
   )
}

export default App
