import React from "react";
import TrailsMap from "./trails_map";
import TrailIndex from "../trails/trail_index"; 

const Search = ({ trails, fetchTrails }) => (
    <div>
        <TrailIndex trails={trails} fetchTrails={fetchTrails} />
        <TrailsMap trails={trails} fetchTrails={fetchTrails} />
    </div>
) 

export default Search;