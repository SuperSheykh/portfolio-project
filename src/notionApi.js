import { useEffect, useState } from 'react'
import { Client } from '@notionhq/client'

// const { Client } = require('@notionhq/client')

const notionClient = new Client({
   auth: import.meta.env.VITE_API_KEY,
})

const useFetchProjectData = () => {
   const [projects, setProjects] = useState([])

   const fetchProjectsData = async () => {
      try {
         const response = await notionClient.databases.query({
            database_id: import.meta.env.VITE_DATABASE_ID,
            filter: {},
         })
         console.log(response)
         setProjects(response)
      } catch (err) {
         console.log(err)
      }
   }

   useEffect(() => {
      fetchProjectsData()
   }, [])

   return { projects }
}

export default useFetchProjectData
