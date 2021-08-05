import React from "react";
import SearchFilterBar from "./search_filter_bar";
import TrailIndex from "../trails/trail_index"; 
import TrailsMap from "./trails_map";

const Search = ({ trails, filters, updateFilter }) => (
    <div>
        {/* add component HERE --> search filters bar */}
        <SearchFilterBar filters={filters} />
        <TrailIndex trails={trails} />
        <TrailsMap trails={trails} updateFilter={updateFilter} />
    </div>
) 

export default Search;