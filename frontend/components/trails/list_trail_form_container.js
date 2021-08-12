import { connect } from "react-redux";
import { createListTrailRelation, destroyListTrailRelation, fetchListTrailRelations } from "../../actions/list_trail_actions";
import { fetchLists } from "../../actions/list_actions";
import ListTrailForm from "./list_trail_form";

const mapStateToProps = ({ entities: { lists }, session: { currentUserId } }, ownProps) => ({
    currentUserId: currentUserId, 
    lists: lists 
})

const mapDispatchToProps = dispatch => ({
    fetchLists: userId => dispatch(fetchLists(userId)), 
    createListTrailRelation: (listId, trailId) => dispatch(createListTrailRelation(listId, trailId)),
    destroyListTrailRelation: listTrailRelationId => dispatch(destroyListTrailRelation(listTrailRelationId)),
    fetchListTrailRelations: listId => dispatch(fetchListTrailRelations(listId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListTrailForm);