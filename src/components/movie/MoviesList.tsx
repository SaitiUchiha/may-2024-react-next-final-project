import React from "react";
import {options} from "@/services/api.services";
import {IMovie, IMovieFetch} from "@/models/type";
import MoviesListCard from "@/components/movie/MoviesListCard";


const MoviesList = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, options)
    const {results}: IMovieFetch = await data.json()


    return (
        <div>
            {/*{Array.isArray(results) && results.length === 0 && (<p>No movies found.</p>)}*/}
            {/*<div>{*/}
            {results.map((movie: IMovie) => <div key={movie.id}>
                <MoviesListCard movie={movie}/>
            </div>)
            }
        </div>


    )
}

export default MoviesList;