import React from 'react'
import Header from './header'
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="text-white h-screen px-8">
      <div className="m-auto block max-w-4xl">
        <Header />
        {children}
      </div>
    </div>
  )
}

export default Layout 