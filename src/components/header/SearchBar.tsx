'use client'
import "./SearchBar.css"
import React from 'react';
import Form from "next/form";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";

const SearchBar = () => {

    return (
        <Form action="/search">
            <input type='search' placeholder='Type Here'  name="query" />
            <button type="submit"><MagnifyingGlassIcon className='MagnifyingGlass'/></button>
        </Form>
    );
};
export default SearchBar;