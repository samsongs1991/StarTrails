import { connect } from "react-redux";
import Users from "./users";
// import { fetchUsers } from "../../actions/user_actions";

const mapStateToProps = ({ entities: { users }, session: { currentUserId } }, ownProps ) => ({
    users: users, 
    currentUser: users[currentUserId]
})

const mapDispatchToProps = dispatch => ({
    // fetchUsers: () => dispatch(fetchTrails())
    // still have to do redux
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);