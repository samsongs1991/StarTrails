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
        const { trail, currentUserId } = this.props;
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
                <section id="trail-main">
                    <section id="trail-content">
                        <section id="trail-details">
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
                        </section>
                        <section id="trail-user-content">
                            <div id="trail-tabs">
                                <div>Reviews</div>
                                <div>Photos</div>
                            </div>
                            <div id="trail-reviews-photos">
                                {/* COMPONENT - avg rating + write review button */}
                                {/* COMPONENT - all reviews for trail */}

                                {/* COMPONENT - add photos to this trail + add photo button */}
                                {/* COMPONENT - all photos for trail */}
                            </div>
                        </section>
                    </section>
                    <section id="trail-sidebar">                
                        <div id="mini-map">
                            {/* MAP */}
                        </div>
                        <div>
                            {/* list of nearby trails */}
                        </div>
                    </section>
                </section> 
                <ListTrailFormContainer
                    hideFormModal={this.hideFormModal} 
                    show={this.state.show} 
                    trail={trail}
                />
            </div>
        );
    }
}

export default TrailShow;