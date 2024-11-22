export interface IMovies {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number [];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}


export interface IGenre {
    id: number;
    name: string;
}

export interface IMovieFetch {
    page: number;
    results: IMovies[];
    total_pages: number;
    total_results: number;
}

export interface IGenreFetch {
    genres: IGenre[];
}

export interface IMovie {
    adult?: boolean;
    backdrop_path?: string;
    belongs_to_collection?: IMovieBelongs_to_collection;
    budget?: number;
    genres?: IMovieGenres[];
    homepage?: string;
    id: number;
    imdb_id?: string;
    origin_country?: string[];
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    production_companies?: IMovieProduction_companies[];
    production_countries?: IMovieProduction_countries[];
    release_date?: string;
    revenue?: number;
    runtime?: number;
    spoken_languages?: IMovieSpoken_languages[];
    status?: string;
    tagline?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
}

export interface IMovieBelongs_to_collection {
    id: number;
    name: string;
    poster_path?: string;
    backdrop_path?: string;
}

export interface IMovieGenres {
    id: number;
    name: string;
}

export interface IMovieProduction_companies {
    id: number;
    logo_path?: string;
    name: string;
    origin_country?: string;
}

export interface IMovieProduction_countries {
    iso_3166_1?: string;
    name?: string;
}

export interface IMovieSpoken_languages {
    english_name?: string;
    iso_639_1?: string;
    name?: string;
}

export interface ISearch{
    id: number;
    name: string;
}

export interface ISearchResult {
    query?: ISearch;
    movie?: IMovie;
}