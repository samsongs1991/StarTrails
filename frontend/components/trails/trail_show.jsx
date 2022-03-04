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
                <button onClick={this.showFormModal} >+</button>
                );
        }
    }

    render() {
        const { trail, currentUserId } = this.props
        return (
            <div className="trail-show" >
                <section id="trail-overview">
                    {this.showAddTrailButton(currentUserId)}
                    <div>
                        <h3>{trail.name}</h3>
                        <div>
                            <label className={trail.difficulty}>{trail.difficulty}</label>
                            {/* --- BELOW --- uncomment after reviews portion of DB is built */}
                            {/* {TrailShowUtil.starRating(trail)}
                            {TrailShowUtil.numReviews(trail)} */}
                        </div>
                        <div>
                            <div>{TrailShowUtil.trailLocation(trail)}</div>
                        </div>
                        <div className="divider">
                            {/* Green dividing bar for css/styling only */}
                        </div>
                    </div>
                </section>

                <ListTrailFormContainer
                    hideFormModal={this.hideFormModal} 
                    show={this.state.show} 
                    trail={trail} 
                />

                <div id="trail-details">
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
                    <div id="mini-map">
                        {/* MAP */}
                    </div>
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