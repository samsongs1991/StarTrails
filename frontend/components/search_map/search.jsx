import React from "react";
import SearchFilterBar from "./search_filter_bar";
import TrailIndex from "../trails/trail_index"; 
import TrailsMap from "./trails_map";

const Search = ({ trails, updateFilters }) => (
    <div>
        <SearchFilterBar updateFilters={updateFilters} />
        <TrailIndex trails={trails} />
        <TrailsMap trails={trails} updateFilters={updateFilters} />
    </div>
) 

export default Search;