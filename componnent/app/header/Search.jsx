'use client'

import { useStore } from "@/lib/store";

function Search() {

    const setsearch = useStore((state) => state.setsearch);

    return (
        <input type="search" onChange={(e) => { setsearch(e.target.value) }} placeholder="Search Task" className="active:border-0 outline-0 pl-1" name="" id="" />
    )
}

export default Search;