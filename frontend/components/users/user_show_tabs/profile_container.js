import { connect } from "react-redux";
import Profile from "./profile";
// import { updateUser, destroyUser } from "../../../actions/user_actions";

const mapStateToProps = ({ entities: { users } }, ownProps ) => ({
    user: users[ownProps.match.params.userId]
})

const mapDispatchToProps = dispatch => ({
    // updateUser: user => dispatch(updateUser(user)), 
    // destroyUser: userId => dispatch(destroyUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);