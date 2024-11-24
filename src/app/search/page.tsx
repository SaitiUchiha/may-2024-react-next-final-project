import {fetchSearchMovies} from "@/services/api.services";
import '@/app/globals.css'
import Link from "next/link";
import {IMovies} from "@/models/type";
import PosterPreview from "@/components/movie/PosterPreview";
import {PaginationComponent} from "@/components/movie/MovieListPagination";
import React from "react";


type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

const SearchResultPage = async (props: {
    searchParams: SearchParams
}) => {

    const searchParams = await props.searchParams;

    const movieQuery = searchParams.query;
//
    if (!movieQuery) {
        return <p className="searchFailed"></p>;
    }
    const searchResult = await fetchSearchMovies({name: movieQuery});

    return (
        <div className='searchResultDiv'>
            {searchResult.results.map((movie: IMovies) => (
                <div key={movie.id} className='searchResultCard'>
                    <Link href={`/movies/${movie.id}`}><p className="searchSucsess">{movie.title}</p></Link>
                    <Link href={`/movies/${movie.id}`}> <PosterPreview movie={movie}/></Link>
                </div>

            ))}
            <PaginationComponent pageCount={searchResult.total_pages}/>
        </div>
    )
};

export default SearchResultPage;
