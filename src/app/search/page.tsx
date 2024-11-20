import {fetchSearchMovies} from "@/services/api.services";
import {ISearchResult} from "@/models/type";


type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

const SearchResultPage = async (props: {
    searchParams: SearchParams
}) => {

    const searchParams = await props.searchParams;

    const movieQuery = searchParams.query;
//
    if (!movieQuery) {
        return <div>No search query provided</div>;
    }
    const {results} = await fetchSearchMovies({ name: movieQuery });
    console.log('movie', results);

    return (
        <div>
            <h1 className="font-extrabold text-2xl my-10">Search results for "{movieQuery}"</h1>
            <ul className="space-y-8">
                {results.map((movie: ISearchResult) => (
                    <div key={movie.id}>
                        <li className="font-bold" >{movie.name}</li>
                    </div>

                ))}
            </ul>
        </div>
    )
};

export default SearchResultPage;
