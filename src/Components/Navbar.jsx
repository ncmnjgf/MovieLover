import React from 'react'
import "./Navbar.css"
import DarkMode from './DarkMode/DarkMode'
const Navbar = () => {
  return (
  <nav className='navbar'>
    <h1>MovieLover</h1>
    <div className="navbar_links">
      <DarkMode/>
        <a href='#popular'>Popular🔥</a>
        <a href='#top_rated'>TopRated⭐</a>
        <a href='#upcoming'>Upcoming🥳</a>
    </div>
  </nav>
  )
}

export default Navbar;