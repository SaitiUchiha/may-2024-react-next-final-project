import React, {FC} from "react";
import {IProps} from "@/components/movie/MoviesListCard";
import "./styles/PosterPreview.css";


const  PosterPreview:FC<IProps> = async ({movie}) => {
    return (
      <div>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="poster" key={movie.id} className="PosterPreview"/>
      </div>
  )
}

export default PosterPreview;