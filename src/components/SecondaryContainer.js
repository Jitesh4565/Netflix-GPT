import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies);
 // console.log(movies);
  return (
    movies.nowPlayingMovies &&(
    <div className=' bg-black w-full hide-scrollbar'>
      <div className='-mt-32 pl-12 relative z-20 '>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.PopularMovies}/>
      <MovieList title={"Top Rated"} movies={movies.TopRatedMovies}/>
      <MovieList title={"Upcoming"} movies={movies.UpcomingMovies}/>
       </div>
    </div>
    )
  )
}

export default SecondaryContainer