import { createContext, useState, useContext } from 'react'

const AppContext = createContext()

const AppContextProvider = ({ children }) => {
   const [isNavOpen, setIsNavOpen] = useState(false)

   const toggleNavButton = () => setIsNavOpen(!isNavOpen)
   return (
      <AppContext.Provider value={{ isNavOpen, toggleNavButton }}>
         {children}
      </AppContext.Provider>
   )
}
export default AppContextProvider

// Global Context Hook to use to get access to data anywhere in App.
export const useAppContext = () => useContext(AppContext)
