import React from "react";
import {fetchMovies} from "@/services/api.services";
import {IMovies} from "@/models/type";
import MoviesListCard from "@/components/movie/MoviesListCard";
import '@/app/globals.css'
import {PaginationComponent} from "@/components/movie/MovieListPagination";

interface MoviesProps{
    movies: IMovies[]
}

const MoviesList = async ({movies}:MoviesProps) => {


    return (
        <main className="moviesList">
            {movies.map((movie: IMovies) =>
                    <MoviesListCard movie={movie} key={movie.id}/>)
            }
        </main>


    )
}

export default MoviesList;