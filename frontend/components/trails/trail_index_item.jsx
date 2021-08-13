import React from "react";
import * as TrailShowUtil from "../../util/trail_show_util";
import { Link } from "react-router-dom";

class TrailIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { trail } = this.props;
        return (
            <Link to={`/trails/${trail.id}`} className="trail-index-item" > 
                <li>
                    <img src="/images/StockHikeImage.jpg" alt={"Image of " + trail.name} />
                    <div>
                        <h3>{trail.name}</h3>
                        <div>{TrailShowUtil.trailLocation(trail)}</div>
                        <div>
                            {TrailShowUtil.difficultyLabel(trail)}
                            {/* --- BELOW --- uncomment after reviews portion of DB is built */}
                            {/* {TrailShowUtil.starRating(trail)}
                            {TrailShowUtil.numReviews(trail)} */}
                        </div>
                        <div>
                            <p>Length: {trail.length} mi  -  Est. {TrailShowUtil.trailTime(trail)}</p>
                            {/* <p> - </p>
                            <p>Est. {TrailShowUtil.trailTime(trail)}</p> */}
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