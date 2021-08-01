import { connect } from "react-redux";
import Navbar from "./navbar";
import { signout } from "../../actions/session_actions";

const mapStateToProps = ({ entities: { users }, session: { currentUserId } }) => ({
    currentUser: users[currentUserId]
})

const mapDispatchToProps = dispatch => ({
    signout: () => dispatch(signout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);