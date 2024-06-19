import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const usePopularMovies=()=>{

    const dispatch=useDispatch();
    //const PopularMovies=useSelector((store)=>store.movies.PopularMovies);
    const getPopularMovies=async()=>{

        const data=await fetch('https://api.themoviedb.org/3/movie/popular',API_OPTIONS)

        const json=await data.json();

      //  console.log(json);

        dispatch(addPopularMovies(json.results));
    };

    useEffect(()=>{
    getPopularMovies();
    },[])
}

export default usePopularMovies;