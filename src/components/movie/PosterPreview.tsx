import React, {FC} from "react";
import {IProps} from "@/components/movie/MoviesListCard";


const  PosterPreview:FC<IProps> = async ({movie}) => {
    return (
      <div className="PosterPreview">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="poster" key={movie.id}/>
      </div>
  )
}

export default PosterPreview;