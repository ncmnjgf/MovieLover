import React from 'react'
import './MovieLists.css'
const MovieLists = () => {
    return (
        <section className='movie-list'>
            <header className='movie_list_header'>
                <h2 className='movie_list_heading'>Popular🔥</h2>
                <div className='movie_list_fs'>
                    <ul class="movie_filter">
                        <li class="movie_filter_item">8+ Star</li>
                        <li class="movie_filter_item">7+ Star</li>
                        <li class="movie_filter_item">6+ Star</li>
                    </ul>
                    <select name="" id="" class="movie_sorting">
                        <option value="">SortBy</option>
                        <option value="">Date</option>
                        <option value="">Rating</option>
                    </select>
                    <select name="" id="" class="movie_sorting">
                        <option value="">Ascending</option>
                        <option value="">Descending</option>
                    </select>
                </div>
            </header>
        </section>
    )
}

export default MovieLists