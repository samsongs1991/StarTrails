import React from "react";
import * as TrailShowUtil from "../../util/trail_show_util";

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

    trailLocation(trail) {
        if(trail.location) {
            return trail.location;
        } else {
            return `${trail.city}, ${trail.state}`;
        }
    }

    trailTime(trail) {
        let time = "";
        let min = trail.length * 30;
        if(min >= 60) {
            let hr = Math.floor(min / 60);
            min = min % 60;
            time = `${hr} h ${min} m`
        } else {
            time = `${min} m`
        }
        return time;
    }

    render() {
        const trail = this.props.trail;
        return (
            <li>
                <div>
                    <img src="" alt="" />
                    <h3>trail.name</h3>
                    <div>{trailLocation(trail)}</div>
                    <div>
                        {TrailShowUtil.difficultyLabel(trail)}
                        {/* <DifficultyLabel /> */}
                        {TrailShowUtil.starRating(trail)}
                        {/* <StarRating /> */}
                        {TrailShowUtil.numReviews(trail)}
                        {/* # of reviews */}
                    </div>
                    <div>
                        <p>Length: {trail.length} mi</p>
                        <p> - </p>
                        <p>Est. {trailTime(trail)}</p>
                    </div>
                </div>

                {/* ------------------------------------------------------------- */}
                {/* symbol on top right of pic --> click and add to favorites list */}
                {/* when hovering, modal appears over marker on map */}
                {/* ------------------------------------------------------------- */}

            </li>
        );
    }
} 

export default TrailIndexItem;