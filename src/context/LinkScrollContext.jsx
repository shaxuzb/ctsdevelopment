import React, { Children, createContext, useRef } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../pages/PagesMain/Footer/Footer'

export const LinkContext = createContext(null)
const LinkScrollContext = () => {
    const ref = useRef()
    console.log(ref);
  return (
    <LinkContext.Provider value={{ref: ref}}>
        
    </LinkContext.Provider>
  )
}

export default LinkScrollContext