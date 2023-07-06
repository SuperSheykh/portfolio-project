import { createContext, useState, useContext } from 'react'

const AppContext = createContext()

const AppContextProvider = ({ children }) => {
   const [someValue, setSomeValue] = useState('value')
   return (
      <AppContext.Provider value={{ someValue }}>
         {children}
      </AppContext.Provider>
   )
}
export default AppContextProvider

// Global Context Hook to use to get access to data anywhere in App.
export const useAppContext = () => useContext(AppContext)
