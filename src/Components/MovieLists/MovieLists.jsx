import React, { useEffect } from 'react'
import './MovieLists.css'
import MovieCard from './MovieCard'
const MovieLists = () => {
    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        const response = await fetch()
      const data = await response.json();
      console.log(data)
    }
    
    return (
        <section className='movie-list'>
            <header className='align_center movie_list_header'>
                <h2 className=' align_center movie_list_heading'>Popular🔥</h2>
                <div className='align_center  movie_list_fs'>
                    <ul className="align_center movie_filter">
                        <li className="movie_filter_item active">8+ Star</li>
                        <li className="movie_filter_item">7+ Star</li>
                        <li className="movie_filter_item">6+ Star</li>
                    </ul>
                    <select name="" id="" className="movie_sorting">
                        <option value="">SortBy</option>
                        <option value="">Date</option>
                        <option value="">Rating</option>
                    </select>
                    <select name="" id="" className="movie_sorting">
                        <option value="">Ascending</option>
                        <option value="">Descending</option>
                    </select>
                </div>
            </header>

            <div className="movie_cards">
                <MovieCard />
            </div>
        </section>
    )
}

export default MovieLists