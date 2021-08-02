import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_FORM } from "../actions/session_actions";

const SessionErrorsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_SESSION_ERRORS: 
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return {}; 
        case CLEAR_FORM:
            return {};
        default: 
            return oldState;
    }
}

export default SessionErrorsReducer;