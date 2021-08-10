import { connect } from "react-redux";
import Lists from "./lists";
import { fetchLists } from "../../../actions/list_actions";

const mapStateToProps = ({ entities: { lists }, session: { currentUserId } }, ownProps ) => ({
    lists: lists, 
    userId: parseInt(ownProps.match.params.userId), 
    currentUserId: currentUserId
})

const mapDispatchToProps = dispatch => ({
    fetchLists: userId => dispatch(fetchLists(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Lists);