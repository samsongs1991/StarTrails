import { connect } from "react-redux";
import ListIndex from "./list_index";
import { fetchLists, createList } from "../../../actions/list_actions";

const mapStateToProps = ({ entities: { lists }, session: { currentUserId } }, ownProps ) => ({
    lists: lists, 
    userId: parseInt(ownProps.match.params.userId), 
    currentUserId: currentUserId
})

const mapDispatchToProps = dispatch => ({
    fetchLists: userId => dispatch(fetchLists(userId)), 
    createList: list => dispatch(createList(list))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);