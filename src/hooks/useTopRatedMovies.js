import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";




const useTopRatedMovies=()=>{

    const dispatch=useDispatch();
    //const TopRatedMovies=useSelector((store)=>store.movies.TopRatedMovies);
    const getTopRatedMovies=async()=>{

        const data=await fetch('https://api.themoviedb.org/3/movie/top_rated',API_OPTIONS)

        const json=await data.json();

       // console.log(json);

        dispatch(addTopRatedMovies(json.results))
    };

    useEffect(()=>{
      getTopRatedMovies();
    },[])
}

export default useTopRatedMovies;