import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import MovieLists from './Components/MovieLists/MovieLists'
function App() {


  return (
    <div className='app'>
      <Navbar/>
    <MovieLists/>
    </div>

  )
}

export default App
