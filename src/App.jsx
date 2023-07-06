import React, { useState, useEffect } from 'react'
import useFetchProjectData from './notionApi'

const App = () => {
   const { projects } = useFetchProjectData()

   return (
      <main>
         <h2>Welcome to Portfolio Project</h2>
      </main>
   )
}

export default App
