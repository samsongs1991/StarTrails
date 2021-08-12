import React from "react";
import * as TrailShowUtil from "../../util/trail_show_util";
import ListTrailFormContainer from "./list_trail_form_container";

class TrailShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false};
        this.showFormModal = this.showFormModal.bind(this);
        this.hideFormModal = this.hideFormModal.bind(this);
        this.showAddTrailButton = this.showAddTrailButton.bind(this);
    }

    componentDidMount() {
        this.props.fetchTrail(this.props.trailId);
    }

    showFormModal() {
        this.setState({ show: true });
    } 

    hideFormModal() {
        this.setState({ show: false });
    }

    showAddTrailButton(currentUserId) {
        if(currentUserId) {
            return (
                <button onClick={this.showFormModal} >Add to a list</button>
                );
        }
    }

    render() {
        const { trail, currentUserId } = this.props
        return (
            <div className="trail-show" >
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
                    {this.showAddTrailButton(currentUserId)}
                </div>

                <ListTrailFormContainer
                    hideFormModal={this.hideFormModal} 
                    show={this.state.show} 
                    trail={trail} 
                />

                <div>
                    {/* vvv SAVE THIS FOR LATER vvv */}
                    {/* trail show nav */}
                    {/* - photos show page*/}
                    {/* - directions (google maps) */}
                    {/* - print/pdf map */}
                </div>

                <div>
                    <p>{trail.description}</p>
                </div>

                <div>
                    <div>
                        <p>Length</p>
                        <p>{trail.length} mi</p>
                    </div>
                    <div>
                        <p>Elevation gain</p>
                        <p>{trail.gain} ft</p>
                    </div>
                    <div>
                        <p>Route type</p>
                        <p>{trail.category}</p>
                    </div>
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