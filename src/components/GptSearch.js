import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_IMG } from '../utils/constant'

const GptSearch = () => {
  return (
    <>
    <div className="absolute -z-10 ">
      <img
          className='object-contain'
          src={BG_IMG}
          alt="BgImg"
        />
      </div>  
        <div className='pt-[30%] md:p-0'>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
    </>
  )
}

export default GptSearch