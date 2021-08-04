import React from "react";
import Map from "./map";
import TrailIndex from "../trails/trail_index"; 

const Search = ({ trails, fetchTrails }) => (
    <div>
        <TrailIndex trails={trails} fetchTrails={fetchTrails} />
        <Map />
    </div>
) 

export default Search;