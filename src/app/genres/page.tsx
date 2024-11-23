import React from "react";
import {fetchGenres} from "@/services/api.services";
import {IGenre} from "@/models/type";
import "@/app/globals.css"


const GenresPage = async () => {

    return (
        <div className='genre-list'>
            {fetchGenres.genres.map((genre: IGenre) =>
                <h2 key={genre.id} className={'genreBadge'}>
                    {genre.name}
                </h2>)
            }
        </div>

    )
}

export default GenresPage;