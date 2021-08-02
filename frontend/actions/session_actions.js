import * as SessionApiUtils from "../util/session_api_util";

// -------------------------------------------------

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER, 
    currentUser,
})

export const SIGNOUT_CURRENT_USER = "SIGNOUT_CURRENT_USER";
const signoutCurrentUser = () => ({
    type: SIGNOUT_CURRENT_USER
})

export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS, 
    errors
})

export const CLEAR_FORM = "CLEAR_FORM"
const clearForm = () => ({
    type: CLEAR_FORM
})

// -------------------------------------------------

export const signin = user => dispatch => (
    SessionApiUtils.signin(user)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveSessionErrors(errors.responseJSON))
        )
)

export const signout = () => dispatch => (
    SessionApiUtils.signout()
        .then(
            () => dispatch(signoutCurrentUser()), 
            errors => dispatch(receiveSessionErrors(errors.responseJSON))
        )
)

export const signup = user => dispatch => (
    SessionApiUtils.signup(user)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveSessionErrors(errors.responseJSON))
        )
)

export const clear = () => dispatch => (
    dispatch(clearForm())
)