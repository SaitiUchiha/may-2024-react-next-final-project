import React, {FC} from "react";
import PosterPreview from "@/components/movie/PosterPreview";
import {IMovies} from "@/models/type";
import StarsRating from "@/components/movie/StarsRating";
import MovieInfo from "@/components/movie/MovieInfo";
import './styles/MovieListCard.css'

export interface IProps {
    movie?: IMovies;
}

const MovieListCard: FC<IProps> = ({movie}) => {
    return (
        <div className="movieListCard">
            <PosterPreview movie={movie}/>
            <MovieInfo movie={movie}/>
            <div key={movie.id} className="moviesListCardRating">
                <StarsRating/>
            </div>
        </div>

    )
}

export default MovieListCard;