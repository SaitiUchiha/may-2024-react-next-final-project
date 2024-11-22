'use client'
import "./SearchBar.css"
import React from 'react';
import Form from "next/form";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import {useDebouncedCallback} from "use-debounce";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

const SearchBar = () => {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const router = useRouter();


    const handleSearch = useDebouncedCallback((query:string) => {
        const params = new URLSearchParams(searchParams);
        if (query) {
            params.set('query', query);
        } else {
            params.delete('query');
        }
        router.replace(`${pathName}?${params.toString()}`);
    }, 500);


    return (
        <Form action="/search">
            <input type='search'
                   placeholder='Type here...'
                   name="query"
                   onChange={(e) => {
                       handleSearch(e.target.value);
                   }}
                   defaultValue={searchParams.get('query')?.toString()}
            />
            <MagnifyingGlassIcon className='MagnifyingGlass'/>
        </Form>
    );
};
export default SearchBar;