import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
  <nav className='navbar'>
    <h1>MovieLover</h1>
    <div className="navbar_links">
        <a href=''>Popular🔥</a>
        <a href=''>TopRated⭐</a>
        <a href=''>Upcoming🥳</a>
    </div>
  </nav>
  )
}

export default Navbar;