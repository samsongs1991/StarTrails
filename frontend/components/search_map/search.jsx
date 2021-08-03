import React from "react";
import Map from "./map";
import TrailIndex from "../trails/trail_index"; 

const Search = ({ trails, fetchTrails }) => (
    <div>
        <Map />
        <TrailIndex trails={trails} fetchTrails={fetchTrails} />
    </div>
) 

export default Search;