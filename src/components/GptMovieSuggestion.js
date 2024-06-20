import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const GptMovieSuggestion = () => {
  const movies = useSelector((store) => store.movies);

  // Check if GenreMovies has results
  const hasGenreMovies = movies.genreMovies && movies.genreMovies.length > 0;

  return (
    hasGenreMovies && (
      <div className='p-4 m-4 bg-black bg-opacity-70 pb-56'>
        <div>
          <MovieList title={"Happy Watching!"} movies={movies.genreMovies} />
        </div>
      </div>
    )
  );
}

export default GptMovieSuggestion;
