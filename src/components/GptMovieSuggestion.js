import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
const GptMovieSuggestion = () => {

  const movies=useSelector((store)=>store.movies);
  const hasGenreMovies=  movies.GenreMovies && movies.GenreMovies.length>0;
  return (
    hasGenreMovies &&(
    <div className='p-4 m-4 bg-black bg-opacity-80 pb-56 hide-scrollbar'> 
       <div>
       <MovieList title={"Happy Watching!"} movies={movies.GenreMovies}/>
       </div>
    </div>
    )
  )
}

 
export default GptMovieSuggestion;