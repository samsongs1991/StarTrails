import React from "react";
import TrailsMap from "./trails_map";
import TrailIndex from "../trails/trail_index"; 

const Search = ({ trails, updateFilter }) => (
    <div>
        {/* add component HERE --> search filters bar */}
        <TrailIndex trails={trails} />
        <TrailsMap trails={trails} updateFilter={updateFilter} />
    </div>
) 

export default Search;