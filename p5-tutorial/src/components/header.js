import React from 'react'
import { Link } from "gatsby"


const Header = () => {
  return (
    <ul className="flex justify-end">
      <li className="mr-auto"><Link className="py-6 block" to="/">Home</Link></li>
      <li><Link className="gioAnchor p-6 block" to="/code">Code</Link></li>
      <li><Link className="gioAnchor p-6 block" to="/blog">Music</Link></li>
      <li><Link className="gioAnchor p-6 block" to="/blog">Photos</Link></li>
      <li><Link className="gioAnchor py-6 pl-6 block" to="/about">About</Link></li>
    </ul>
  )
}

export default Header