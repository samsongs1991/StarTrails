import { connect } from "react-redux";
import TrailShow from "./trail_show";
import { fetchTrail } from "../../actions/trail_actions";
import { createListTrailRelation } from "../../actions/list_trail_actions";
import { fetchLists } from "../../actions/list_actions";

const mapStateToProps = ({ entities: { trails, lists }, session: { currentUserId } }, ownProps) => {
    if(trails[ownProps.match.params.trailId]) {
        return ({
            trailId: ownProps.match.params.trailId, 
            trail: trails[ownProps.match.params.trailId], 
            currentUserId: currentUserId, 
            lists: lists
        });
    } else {
        return ({
            trailId: ownProps.match.params.trailId, 
            trail: "", 
            currentUserId: currentUserId, 
            lists: lists
        });
    }
}

const mapDispatchToProps = dispatch => ({
    fetchTrail: trailId => dispatch(fetchTrail(trailId)), 
    createListTrailRelation: (listId, trailId) => dispatch(createListTrailRelation(listId, trailId)), 
    fetchLists: currentUserId => dispatch(fetchLists(currentUserId))
})

export default connect(mapStateToProps, mapDispatchToProps)(TrailShow);