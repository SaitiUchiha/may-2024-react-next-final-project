import {Metadata} from "next";
import {ReactNode} from "react";

export const metadata:Metadata = {
    title: "UsersLayout metadata",
}

type Props = {
    children: ReactNode
}

const  GenresLayout= ({children}:Props) => {
    return (
        <div>
            {children}
        </div>
    )
};

export default GenresLayout;