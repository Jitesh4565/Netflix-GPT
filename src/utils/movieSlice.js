import { createSlice } from "@reduxjs/toolkit";

 
 const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{

            state.nowPlayingMovies=action.payload;
        },

        addPopularMovies:(state,action)=>{

              state.PopularMovies=action.payload;
        },

        addTopRatedMovies:(state,action)=>{

            state.TopRatedMovies=action.payload;
        },

        addUpcomingMovies:(state,action)=>{
           
            state.UpcomingMovies=action.payload;
        },

        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        }, 
        
        addGenreMovies:(state,action)=>{
            state.genreMovies=action.payload;
        }
    },
 });

 export const{ addTrailerVideo,addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addGenreMovies}=moviesSlice.actions;

 export default moviesSlice.reducer;