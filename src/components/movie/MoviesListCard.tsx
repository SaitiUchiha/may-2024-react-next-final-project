import React, {FC} from "react";
import PosterPreview from "@/components/movie/PosterPreview";
import {IMovies} from "@/models/type";
import StarsRating from "@/components/movie/StarsRating";
import MovieInfo from "@/components/movie/MovieInfo";
import '@/app/globals.css'
import Link from "next/link";

export interface IProps {
    movie?: IMovies;
}

const MovieListCard: FC<IProps> = ({movie}) => {
    return (
            <Link className="movieListCard" href={`/${movie.id}`}>
                <PosterPreview movie={movie}/>
                <MovieInfo movie={movie}/>
                <div key={movie.id} className="moviesListCardRating">
                    <StarsRating/>
                </div>
            </Link>

    )
}

export default MovieListCard;