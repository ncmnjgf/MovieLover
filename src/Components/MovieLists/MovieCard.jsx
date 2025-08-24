import React from 'react'
import "./MovieCard.css"

const MovieCard = () => {
  return (
    <a href='' className='movie_card'>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjDl_g6rTC5UPV2VNHiGV3IEFc0x_GDEFM_g&s"
   alt="movie poster" className='movie_poster'/>

   <div className="movie_details">
    <h3 className='movie_details_heading'>Movie Name</h3>
    <div className="align_center movie_date_rate">
        <p>10-20-2020</p>
        <p>8.0 ⭐</p>
    </div>
    <p className='movie_description'>
        Lorem ipsum dolor sit amet consectetur adipis
        icing elit. Iste, sed omnis. Quibusdam expedita provident quasi.
    </p>
   </div>
    </a>
  )
}

export default MovieCard