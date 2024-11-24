import {fetchPopularMovies} from "@/services/api.services";
import MoviesList from "@/components/movie/MoviesList";
import './globals.css'

export default function Home() {

    return (
        <div className="home-page">
            <h1>Popular</h1>
            <MoviesList movies={fetchPopularMovies.results}/>
        </div>
    );
}