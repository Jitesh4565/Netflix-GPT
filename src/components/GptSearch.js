import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_IMG } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
       <div className="absolute -z-10 hide-scrollbar">
        <img
          src={BG_IMG}
          alt="BgImg"
        />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch