import * as SessionApiUtils from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER, 
    currentUser
})

export const SIGNOUT_CURRENT_USER = "SIGNOUT_CURRENT_USER";
const signoutCurrentUser = () => ({
    type: SIGNOUT_CURRENT_USER, 
    currentUser: nil
})

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS, 
    errors
})

// -------------------------------------------------

export const signin = user => dispatch => (
    SessionApiUtils.signin(user)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
)

export const signout = () => dispatch => (
    SessionApiUtils.signout()
        .then(
            () => dispatch(signoutCurrentUser()), 
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
)

export const signup = user => dispatch => (
    SessionApiUtils.signup(user)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
)