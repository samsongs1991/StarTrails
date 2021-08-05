import React from "react";
import TrailsMap from "./map";
import TrailIndex from "../trails/trail_index"; 

const Search = ({ trails, fetchTrails }) => (
    <div>
        <TrailIndex trails={trails} fetchTrails={fetchTrails} />
        <TrailsMap trails={trails} />
    </div>
) 

export default Search;