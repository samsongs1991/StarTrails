import React from "react";
import { trailLocation } from "../../../util/trail_show_util";
import { Link } from "react-router-dom";

class ListTrails extends React.Component {
    
    showTrails() {
        if(this.props.list.trails === {} || this.props.list.trails === undefined) {
            return null;
        } else {
            return (
                Object.values(this.props.list.trails).map(trail => (
                    <Link to={`/trails/${trail.id}`} key={trail.id} ><li>{trail.name} - {trailLocation(trail)}</li></Link>
                ))
            );
        }
    }
    

    render() {
        const { list, hideListTrailsModal, show } = this.props;
        if(show) {
            return (
                <div>
                    <h3>{list.title}</h3>
                    <ul>
                        {this.showTrails()}
                    </ul>
                    <button onClick={hideListTrailsModal} >Close</button>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default ListTrails;