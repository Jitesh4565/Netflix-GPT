import React, { useRef } from 'react';
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import { API_KEY } from '../utils/constant';
import genresData from '../utils/genre.json';
import { addGenreMovies } from '../utils/movieSlice';
const GptSearchBar = () => {
  
  const langKey=useSelector(store=>store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const fetchMoviesByGenre = async (genreIds) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreIds}&language=en-US&sort_by=popularity.desc`);
      const data = await response.json();
      console.log(data.results);
      dispatch(addGenreMovies(data.results));
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleGptSearchClick = () => {
    const inputGenres = searchText.current.value.split(',').map(g => g.trim().toLowerCase());
    const genreIds = inputGenres.map(inputGenre => {
      const genre = genresData.genres.find(g => g.name.toLowerCase() === inputGenre);
      return genre ? genre.id : null;
    })
    .filter(id => id !== null)
    .join(',');

    if (genreIds) {
      fetchMoviesByGenre(genreIds);
    } else {
      alert('Genres not found');
    }
  };

  return (
    <div className='pt-[8%] flex justify-center'>
   <form className='bg-black w-1/2 grid grid-cols-12'onSubmit={(e)=>e.preventDefault()}>
    <input 
    ref={searchText}
    type='text' 
    className='p-4 m-4 col-span-9'
    placeholder={lang[langKey].gptSearchPlaceholder} 
    />
    <button className=' col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg' 
    onClick={handleGptSearchClick}>
     {lang[langKey].search}
    </button>
   </form>
    </div>
  )
}

export default GptSearchBar