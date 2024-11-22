import {fetchSearchMovies} from "@/services/api.services";
import '@/app/globals.css'
import Link from "next/link";


type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

const SearchResultPage = async (props: {
    searchParams: SearchParams
}) => {

    const searchParams = await props.searchParams;

    const movieQuery = searchParams.query;
//
    if (!movieQuery) {
        return <p className="searchFailed">No "Search" provided</p>;
    }
    const {results} = await fetchSearchMovies({ name: movieQuery });
    console.log('movie', results);

    return (
        <div>

            <h1 className="font-extrabold text-2xl my-10">Search results for "{movieQuery}"</h1>
            <ul className="space-y-8">
                {results.map((movie: IMovies) => (
                    <div key={movie.id}>
                        <Link href={String(movie.id)} className="searchSucsess" >{movie.title}</Link><br/>
                    </div>

                ))}
            </ul>
        </div>
    )
};

export default SearchResultPage;
