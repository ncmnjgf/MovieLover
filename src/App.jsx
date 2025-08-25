import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import MovieLists from './Components/MovieLists/MovieLists'
function App() {


  return (
    <div className='app'>
      <Navbar/>
    <MovieLists type="popular" title = "Popular🔥"/>
    <MovieLists type="top_rated" title = "Top Rated⭐"/>
    <MovieLists type="upcoming" title = "Upcoming🥳"/>
    </div>

  )
}

export default App
