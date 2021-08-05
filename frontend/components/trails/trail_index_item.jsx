import React from "react";

const TrailIndexItem = ({ trail }) => (
    <li>
        {trail.name}
        {trail.location}
        {trail.city}
        {trail.state}
        {trail.country}
        TRAIL INDEX ITEM IS WORKING
    </li>
)

export default TrailIndexItem;