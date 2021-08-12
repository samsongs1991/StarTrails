import { connect } from "react-redux";
import TrailShow from "./trail_show";
import { fetchTrail } from "../../actions/trail_actions";

const mapStateToProps = ({ entities: { trails }, session: { currentUserId } }, ownProps) => {
    if(trails[ownProps.match.params.trailId]) {
        return ({
            trailId: ownProps.match.params.trailId, 
            trail: trails[ownProps.match.params.trailId], 
            currentUserId: currentUserId
        });
    } else {
        return ({
            trailId: ownProps.match.params.trailId, 
            trail: "", 
            currentUserId: currentUserId
        });
    }
}

const mapDispatchToProps = dispatch => ({
    fetchTrail: trailId => dispatch(fetchTrail(trailId))
})

export default connect(mapStateToProps, mapDispatchToProps)(TrailShow);