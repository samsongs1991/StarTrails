import React from "react";
import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup, clear } from "../../actions/session_actions";
import { Link } from "react-router-dom";

const mapStateToProps = ({ errors }) => ({
    errors: errors.session, 
    formType: "signup", 
    navLink: <div className="switch-form-message" >Already have an account? <Link to="/signin" >Log In</Link></div>
})

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    clear: () => dispatch(clear())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);