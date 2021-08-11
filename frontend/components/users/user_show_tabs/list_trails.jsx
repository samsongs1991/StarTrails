import React from "react";
import { trailLocation } from "../../../util/trail_show_util";
import { Link } from "";

const ListTrails = props => {
    
    const { list, hideListTrailsModal, show } = props;

    if(show) {
        return (
            <div>
                <h3>{list.title}</h3>
                <ul>
                    {Object.values(list.trails).map(trail => (
                        <li key={trail.id} >{trail.name} - {trailLocation(trail)}</li>
                        // when clicked, trail li should reroute to show page
                    ))}
                        {/* <Route path="/trails/:trailId" component={TrailShowContainer} /> */}
                </ul>
                <button onClick={hideListTrailsModal} >Close</button>
            </div>
        );
    } else {
        return null;
    }
}

export default ListTrails;