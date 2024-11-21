import React, {FC} from "react";
import {IProps} from "@/components/movie/MoviesListCard";
import GenreBadge from "@/components/movie/GenreBadge";


const MovieInfo:FC<IProps> = ({movie}) => {
    return (
      <div className="movieInfo">
          <h1>{movie.title}</h1>
          <GenreBadge key={movie.id} id={movie.genre_ids}/>
          <p>{movie.overview}</p>
      </div>

  )
}

export default MovieInfo;