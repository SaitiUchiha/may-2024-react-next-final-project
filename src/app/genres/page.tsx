import React from "react";
import "@/app/globals.css"
import {fetchGenres} from "@/services/api.services";
import {IGenre} from "@/models/type";
import Link from "next/link";


const GenresPage = async () => {


    return (
        <div className='genresContainer'>
            <h1>Genres</h1>
            <div className='genre-list'>
                {fetchGenres.genres.map((genre: IGenre) =>
                    <Link href={`/genres/${genre.id}?genre=${genre.name}`} key={genre.id}><h2 className={'genreBadge'}>
                        {genre.name}
                    </h2></Link>)
                }
            </div>
        </div>


    )
}

export default GenresPage;