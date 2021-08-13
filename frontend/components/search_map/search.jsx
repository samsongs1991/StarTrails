import React from "react";
import SearchFilterBar from "./search_filter_bar";
import TrailIndex from "../trails/trail_index"; 
import TrailsMap from "./trails_map";

const Search = ({ trails, updateFilters, filters }) => (
    <div className="search-page" >
        <SearchFilterBar filters={filters} updateFilters={updateFilters} />
        <div className="index-map" >
            <TrailIndex trails={trails} />
            <TrailsMap filters={filters} trails={trails} updateFilters={updateFilters} />
        </div>
    </div>
) 

export default Search;