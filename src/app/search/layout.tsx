import {Metadata} from "next";
import {ReactNode} from "react";
import SearchBar from "@/components/header/SearchBar";

export const metadata:Metadata = {
    title: "UsersLayout metadata",
}

type Props = {
    children: ReactNode
}

const  SearchResultLayout= ({children}:Props) => {
    return (
        <div className="searchDiv">
            <SearchBar/>
            {children}
        </div>
    )
};

export default SearchResultLayout;