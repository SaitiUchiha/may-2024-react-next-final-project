import {IGenreFetch, IMovieFetch} from "@/models/type";

export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGM1ZjVmOGMwZTkzMWE5ZTYyNTdmMDUxMTk2NDI3NyIsIm5iZiI6MTczMTY5NTUyNi40NDQ4NjQsInN1YiI6IjY3MzYzODI3ZTA1ODIzYmQ5YzdjNTY3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V173sryojpOG9yX4qB4rs6P7skD5Wm1DqlvsFbz7KZM'
    },
    next: {revalidate: 60}
};

export const fetchGenres: IGenreFetch = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    .then(res => res.json())

export const fetchMovies: IMovieFetch = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, options)
    .then(res => res.json())

export async function fetchSearchMovies({name}: { name: string | string[] | undefined }) {
    const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${name}`, options
    );
    const searchMovie = await response.json();
    return searchMovie;
}
