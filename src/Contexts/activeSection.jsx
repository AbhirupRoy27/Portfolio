/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'

const ActiveSectionContext = createContext()

export default function ActiveSection({ children }) {
  const [activeSection, setActiveSection] = useState('home')
  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

export const useSection = () => {
  return useContext(ActiveSectionContext)
}
