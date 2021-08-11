import React from "react";
import * as TrailShowUtil from "../../util/trail_show_util";
import { Link } from "react-router-dom";

class TrailIndexItem extends React.Component {
    constructor(props) {
        super(props);
        // this.props contains
        // - trails object
        // - 
        this.state = {};
        // this.handleClick = this.handleClick.bind(this);
        // this.showModal = this.showModal.bind(this);
    }

    // handleClick(e) {
        // onClick = will redirect user to show page of this trail
    //     return ();
    // }

    // showModal(e) {
        // onHover = will show modal on map of the trail details 
    //     return ();
    // }

    render() {
        const trail = this.props.trail;
        return (
            <Link to={`/trails/${trail.id}`} className="trail-index-item" > 
            {/* link this trail index item to the trail's show page upon clicking */}
                <li>
                    <div>
                        <img src="" alt={"Image of " + trail.name} />
                        <h3>{trail.name}</h3>
                        <div>{TrailShowUtil.trailLocation(trail)}</div>
                        <div>
                            {TrailShowUtil.difficultyLabel(trail)}
                            {/* --- BELOW --- uncomment after reviews portion of DB is built */}
                            {/* {TrailShowUtil.starRating(trail)}
                            {TrailShowUtil.numReviews(trail)} */}
                        </div>
                        <div>
                            <p>Length: {trail.length} mi</p>
                            <p> - </p>
                            <p>Est. {TrailShowUtil.trailTime(trail)}</p>
                        </div>
                    </div>

                    {/* ------------------------------------------------------------- */}
                    {/* symbol on top right of pic --> click and add to favorites list */}
                    {/* when hovering, modal appears over marker on map */}
                    {/* ------------------------------------------------------------- */}

                </li>
            </Link>
        );
    }
} 

export default TrailIndexItem;