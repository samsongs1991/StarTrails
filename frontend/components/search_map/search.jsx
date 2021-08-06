import React from "react";
import SearchFilterBar from "./search_filter_bar";
import TrailIndex from "../trails/trail_index"; 
import TrailsMap from "./trails_map";

const Search = ({ trails, updateFilters, filters }) => (
    <div>
        <SearchFilterBar filters={filters} updateFilters={updateFilters} />
        <TrailIndex trails={trails} />
        <TrailsMap trails={trails} updateFilters={updateFilters} />
    </div>
) 

export default Search;