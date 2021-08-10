import { connect } from "react-redux";
import Settings from "./settings";
import { updateUser, destroyUser } from "../../../actions/user_actions";

const mapStateToProps = ({ entities: { users } }, ownProps ) => ({
    user: users[ownProps.match.params.userId]
})

const mapDispatchToProps = dispatch => ({
    updateUser: user => dispatch(updateUser(user)), 
    destroyUser: userId => dispatch(destroyUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings);