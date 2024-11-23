import React, {FC} from "react";
import {IProps} from "@/components/movie/MoviesListCard";
import GenreBadge from "@/components/movie/GenreBadge";
import '@/app/globals.css'


const MovieInfo:FC<IProps> = ({movie}) => {
    return (
      <div className="movieInfo">
          <h3>{movie.title}</h3>
          <GenreBadge key={movie.id} id={movie.genre_ids}/>
          <p className='movieOverview'>{movie.overview}</p>
      </div>

  )
}

export default MovieInfo;