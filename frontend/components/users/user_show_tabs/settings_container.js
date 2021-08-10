import { connect } from "react-redux";
import Settings from "./settings";
import { updateUser } from "../../../actions/user_actions";

const mapStateToProps = ({ entities: { users } }, ownProps ) => ({
    user: users[ownProps.match.params.userId]
})

const mapDispatchToProps = dispatch => ({
    updateUser: user => dispatch(updateUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings);