import React from "react";
import {
    IMovie,
    IMovieGenres,
    IMovieProduction_companies,
    IMovieProduction_countries,
    IMovieSpoken_languages
} from "@/models/type";
import '@/app/globals.css'
import {getMovieById} from "@/services/api.services";
import Link from "next/link";
import StarsRating from "@/components/movie/StarsRating";


type Params = {
    params?: { id: string };
}

const MovieDetailPage = async ({params}: Params) => {
    const movie: IMovie = await getMovieById(params.id);
    return (
        <div className="movieDetailPage">
            <StarsRating/>
            <h1>{movie.title}</h1>
            <div className="movie-detail-div-flex">
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt=""/>
                    <div className='genreBadgeList'>{movie.genres.map((e: IMovieGenres) =>
                        <span key={e.id} className='genreBadge'>{e?.name}</span>)}</div>
                    <span><b>Tagline:</b><br/>{movie.tagline}</span>
                </div>

                <div className='movie-general-info-near-image'>
                    <h3 className='originalTitle'>{movie.original_title}</h3>
                    <p><b>Summary:</b><br/>{movie.overview}<br/>
                        <b>Status:</b> {movie.status}<br/>
                        <b>Release Date:</b> {movie.release_date}<br/>
                        <b>Runtime:</b> {movie.runtime}<br/>
                        <b>IMDB:</b> {movie.imdb_id}<br/>
                        <b>Origin Country:</b> {movie.origin_country}<br/>
                        <b>Original Language:</b> {movie.original_language}<br/>
                        <b>Popularity:</b> {movie.popularity}<br/>
                        <b>Budget:</b> {movie.budget}<br/>
                        <b>Vote Aver age:</b>{movie.vote_average}<br/>
                        <b>Vote Coun t:</b>{movie.vote_count}<br/>
                        <b>Revenue:</b> {movie.revenue}
                    </p>
                    <div className='movie-detail-list-flex'>
                        <div>
                            <h3>Production Companies:</h3>
                            <div>
                                {movie.production_companies.map((e?: IMovieProduction_companies) => <ul key={e.id}
                                                                                                        className='production-Company'>
                                    <li><b>Company:</b> {e?.name}</li>
                                    <li><b>Origin Country:</b> {e.origin_country}</li>
                                </ul>)}
                            </div>
                        </div>
                        <div>
                            <h3>Production Countries</h3>
                            <div>{movie.production_countries.map((e: IMovieProduction_countries) =>
                                <ul key={e?.name} className='production-Countries'>
                                    <li><b>Country:</b> {e?.name}</li>
                                    <li><b>ISO:</b> {e.iso_3166_1}</li>
                                </ul>)}</div>

                            <div>
                                <span><b>Spoken Langueges:</b></span>
                                {movie.spoken_languages.map((e: IMovieSpoken_languages) =>
                                    <ul key={e?.name} className='spoken-Language'>
                                        <li><b>Name:</b> {e?.name}</li>
                                        <li><b>English Name:</b> {e?.english_name}</li>
                                        <li><b>ISO:</b> {e.iso_639_1}</li>
                                    </ul>)}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <p className='movieDetailsGalleryTitle'>{movie.belongs_to_collection?.name}</p>
            <Link href={movie.homepage} className='movie-detail-Homepage-link'><span>Homepage</span></Link>
            <div className='movieDetailsGallery'>
                <img src={`https://image.tmdb.org/t/p/w500${movie.belongs_to_collection?.poster_path}`}
                     alt={movie.belongs_to_collection?.name}/>
                <img src={`https://image.tmdb.org/t/p/w500${movie.belongs_to_collection?.backdrop_path}`}
                     alt={movie.belongs_to_collection?.name}/>
            </div>


        </div>

    )
}


export default MovieDetailPage;

