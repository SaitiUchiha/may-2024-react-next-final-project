import {Metadata} from "next";
import {ReactNode} from "react";

export const metadata:Metadata = {
    title: "UsersLayout metadata",
}

type Props = {
    children: ReactNode
}

const  MovieDetailLayout= ({children}:Props) => {
    return (
        <div>
            {children}
        </div>
    )
};

export default MovieDetailLayout;