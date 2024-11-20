import React, {FC} from "react";
import PosterPreview from "@/components/movie/PosterPreview";
import {IMovie} from "@/models/type";

export interface IProps {
    movie: IMovie;
}

const MovieListCard: FC<IProps> = ({movie}) => {
    return (
        <div className="MovieListCard">
            <PosterPreview movie={movie}/>
        </div>

    )
}

export default MovieListCard;