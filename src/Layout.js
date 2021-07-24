import React from 'react'
import { Navbar } from './components'

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
  return (
        <>
            <Navbar />
            {children}
        </>
  )
}
