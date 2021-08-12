import React from "react";
import { trailLocation } from "../../../util/trail_show_util";
import { Link } from "react-router-dom";

const ListTrails = props => {
    
    const { list, hideListTrailsModal, show } = props;

    if(show) {
        return (
            <div>
                <h3>{list.title}</h3>
                <ul>
                {console.log(list)}
                {console.log(list.trails)}
                    {Object.values(list.trails).map(trail => (
                        <Link to={`/trails/${trail.id}`} key={trail.id} ><li>{trail.name} - {trailLocation(trail)}</li></Link>
                    ))}
                </ul>
                <button onClick={hideListTrailsModal} >Close</button>
            </div>
        );
    } else {
        return null;
    }
}

export default ListTrails;