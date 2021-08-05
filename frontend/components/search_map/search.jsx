import React from "react";
import TrailsMap from "./trails_map";
import TrailIndex from "../trails/trail_index"; 

const Search = ({ trails, updateFilter }) => (
    <div>
        <TrailIndex trails={trails} />
        <TrailsMap trails={trails} updateFilter={updateFilter} />
    </div>
) 

export default Search;