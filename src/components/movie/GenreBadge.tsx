"use client"
import React, {FC} from "react";
import {fetchGenres} from "@/services/api.services";
import './styles/GenreBadge.css'

interface Props {
   id:number[]
}

const GenreBadge:FC<Props> = ({id}) => {

      return (
        <div className="genreBadgeList">
            {id.flatMap(g =>
                fetchGenres.genres.filter(genre => genre.id === g)
                    .map(r => <span key={r.id} className="genreBadge">{r.name}</span>))}
        </div>

    )
}

export default GenreBadge;