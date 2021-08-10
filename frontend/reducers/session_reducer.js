import { RECEIVE_CURRENT_USER, SIGNOUT_CURRENT_USER } from "../actions/session_actions";
import { REMOVE_USER } from "../actions/user_actions";

const _nullUser = { currentUserId: null }

const SessionReducer = (oldState=_nullUser, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, { currentUserId: action.currentUser.id });
        case SIGNOUT_CURRENT_USER: 
            return _nullUser;
        case REMOVE_USER:
            return _nullUser;
        default:
            return oldState;
    }
}

export default SessionReducer;
