import React from "react";
import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signin } from "../../actions/session_actions";
import { Link } from "react-router-dom";

const mapStateToProps = ({ errors }) => ({
    errors: errors.session, 
    formType: "signin", 
    navLink: <div>Don't have an account? <Link to="/signup" >Sign up for free</Link></div>
})

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(signin(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);