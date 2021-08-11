import React from "react";
import * as TrailShowUtil from "../../util/trail_show_util";

class TrailShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.fetchTrail(this.props.trailId);
    }

    render() {
        const { trail } = this.props
        return (
            <div className="trail-show" >
                Trail Show component is working

                <div>
                    {/* location header bar */}
                    {/* country > state > city/location > trail name */}
                    {/* search trail bar */}
                </div>

                <div>
                    <img src="" alt={"Image of " + trail.name} />
                    <h3>{trail.name}</h3>
                    <div>
                        {TrailShowUtil.difficultyLabel(trail)}
                        {/* --- BELOW --- uncomment after reviews portion of DB is built */}
                        {/* {TrailShowUtil.starRating(trail)}
                        {TrailShowUtil.numReviews(trail)} */}
                    </div>
                    <div>{TrailShowUtil.trailLocation(trail)}</div>
                    {/* <button></button> THIS BUTTON WILL ADD THE TRAIL TO A USER LIST - open a save to list modal*/}
                </div>

                <div>
                    {/* vvv SAVE THIS FOR LATER vvv */}
                    {/* trail show nav */}
                    {/* - photos show page*/}
                    {/* - directions (google maps) */}
                    {/* - print/pdf map */}
                </div>

                <div>
                    {/* description */}
                    <p>{trail.description}</p>
                </div>

                <div>
                    {/* length */}
                    <div>
                        <p>Length</p>
                        <p>{trail.length} mi</p>
                    </div>
                    {/* elevation gain */}
                    <div>
                        <p>Elevation gain</p>
                        <p>{trail.gain} ft</p>
                    </div>
                    {/* route type */}
                    <div>
                        <p>Route type</p>
                        <p>{trail.category}</p>
                    </div>
                    {/* time */}
                    <div>
                        <p>Time</p>
                        <p>{TrailShowUtil.trailTime(trail)}</p>
                    </div>
                </div>
                
                <div>
                    {/* description */}
                    {/* contact */}
                    {/* getting there */}
                    <ul>
                        <li>Description</li>
                        <li>Getting There</li>
                    </ul>
                    <p>{trail.directions}</p>
                    {/* the ul will eventually be a tabs bar */}
                    {/* the tabs will conditionally render corresponding data */}
                </div>

                <div>
                    {/* weather widget */}
                </div>
                
                <div>
                    <div>
                        {/* tabs bar with reviews / photos */}
                    </div>
                    <div>
                        {/* ratings breakdown w/ avg */}
                        {/* button for write review */}
                        {/* list of reviews */}
                        {/* OR */}
                        {/* button for upload photos */}
                        {/* list of photos */}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default TrailShow;