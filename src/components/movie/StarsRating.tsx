'use client'
import React from "react";
import '@/app/globals.css'


const StarsRating = () => {
    return (
        <div className="rating">
            <input id="star-1" type="radio" name="rating"/>
            <label htmlFor="star-1">★</label>
            <input id="star-2" type="radio" name="rating"/>
            <label htmlFor="star-2">★</label>
            <input id="star-3" type="radio" name="rating"/>
            <label htmlFor="star-3">★</label>
            <input id="star-4" type="radio" name="rating"/>
            <label htmlFor="star-4">★</label>
            <input id="star-5" type="radio" name="rating"/>
            <label htmlFor="star-5">★</label>
        </div>

    )
}

export default StarsRating;