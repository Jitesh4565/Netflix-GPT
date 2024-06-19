import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constant"
import { addUpcomingMovies } from "../utils/movieSlice"
import { useEffect } from "react"



const useUpcomingMovies=()=>{
    
    const dispatch=useDispatch()     
   //const UpcomingMovies=useSelector((store)=>store.movies.UpcomingMovies);
    const getUpcomingMovies=async()=>{

        const data=await fetch('https://api.themoviedb.org/3/movie/upcoming',API_OPTIONS)

        const json=await data.json();

        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(()=>{
     getUpcomingMovies();
    },[])
}

export default useUpcomingMovies