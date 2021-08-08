import { RECEIVE_USERS, RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const UsersReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_USERS:
            return Object.assign({}, oldState, action.users);
        case RECEIVE_USER:
            return Object.assign({}, oldState, { [action.user.id]: action.user });
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser }); 
        default:
            return oldState;
    }
}

export default UsersReducer;