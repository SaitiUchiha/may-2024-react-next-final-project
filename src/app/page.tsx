import MoviesList from "@/components/movie/MoviesList";
import {fetchMovies} from "@/services/api.services";
import {PaginationComponent} from "@/components/movie/MovieListPagination";
import React from "react";

interface PaginationProps {
    searchParams?: {
        page?: string;
        query?: string;
    };
}

const MoviesPage = async ({ searchParams }: PaginationProps) => {
    const currentPage = Number(searchParams.page) || 1;


    const allMovies = await fetchMovies(currentPage);

    return (
        <div className='moviesContainer'>
            <h1>Movies</h1>
            <MoviesList movies={allMovies.results}/>
            <PaginationComponent pageCount={allMovies.total_pages}/>
        </div>

    )
}

export default MoviesPage;