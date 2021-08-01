import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup } from "../../actions/session_actions";
import { Link } from "react-router-dom";

const mapStateToProps = ({ errors }, ownProps) => ({
    errors: errors.session, 
    formType: "signup", 
    navLink: <div>Already have an account? <Link>Log In</Link></div>
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);