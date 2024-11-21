import React from "react";
import {fetchMovies} from "@/services/api.services";
import {IMovies} from "@/models/type";
import MoviesListCard from "@/components/movie/MoviesListCard";
import './styles/MoviesList.css'


const MoviesList = async () => {



    return (
        <main className="moviesList">
            {fetchMovies.results.map((movie: IMovies) =>
                    <MoviesListCard movie={movie} key={movie.id}/>)
            }
        </main>


    )
}

export default MoviesList;