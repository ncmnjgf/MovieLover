import React, { useEffect, useState } from 'react'
import _ from 'lodash' 
import './MovieLists.css'
import MovieCard from './MovieCard'
import FilterGroup from './FilterGroup';
const MovieLists = ({type,title,emoji}) => {

    const [movies,setmovies] = useState([]);
    const [filterMovie,setfilterMovie] = useState([]);
    const [minRating,setminRating] = useState(0);
    const [sort,setsort] = useState({
    by:"default",
    order:"asc"
    })
    useEffect(() => {
        fetchMovies();
    }, []);

    useEffect(() => {
        if(sort.by !== "default"){
            const sortedMovies = _.orderBy(filterMovie,[sort.by],[sort.order])
            setfilterMovie(sortedMovies)
        }
    },[sort])

    const fetchMovies = async () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${type}?api_key=`)
        const data = await response.json();
        setmovies(data.results)
        setfilterMovie(data.results)
       
    }
    const handleFilter = (rate) =>{
        if(rate === minRating){
            setminRating(0);
            setfilterMovie(movies)
        }
       else{
         setminRating(rate)
        const  filtered = movies.filter(movie => movie.vote_average >= rate);
        setfilterMovie(filtered);
       }
    }

    const handleSort = e =>{
        const {name,value} = e.target;
        setsort(prev =>({...prev,[name] : value})
        )
    }
    return (
        <section className='movie-list' id={type}>
            <header className='align_center movie_list_header'>
                <h2 className=' align_center movie_list_heading'>{title}{""}</h2>
                <div className='align_center  movie_list_fs'>

                    <FilterGroup 
                    minRating= {minRating} onRatingClick = {handleFilter} 
                    ratings={[8,7,6]}
                    />


                    <select name="by" id="" onChange={handleSort} value = {sort.by}className="movie_sorting">
                        <option value="default">SortBy</option>
                        <option value="release_date">Date</option>
                        <option value="vote_average">Rating</option>
                    </select>
                    <select name="order" id="" onChange = {handleSort} value = {sort.order}className="movie_sorting">
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </header>

            <div className="movie_cards">
               {
               filterMovie.map(movie =><MovieCard key={movie.id}  movie = {movie}/>)
               
               }
            </div>
        </section>
    )
}

export default MovieLists