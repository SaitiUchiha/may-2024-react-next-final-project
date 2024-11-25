import React from "react";
import {fetchMoviesByGenre} from "@/services/api.services";
import MoviesList from "@/components/movie/MoviesList";
import {PaginationComponent} from "@/components/movie/MovieListPagination";

interface Props {
    params: {
        id: string;
    };
    searchParams?: {
        genre?: string;
        page?: string;
    };
}


const GenrePage = async ({params: { id }, searchParams: { genre, page}}: Props) => {

    const currentPage = Number(page) || 1;
    const movies = await fetchMoviesByGenre( currentPage, id);
    console.log(genre)

    return (

        <div className="movie-list-by-genre">
            <h1 className="text-4xl font-bold px-10 mb-5">Results for {genre}</h1>
            <MoviesList movies={movies.results}/>
            <PaginationComponent pageCount={movies.total_pages}/>
        </div>




    )
}

export default GenrePage;