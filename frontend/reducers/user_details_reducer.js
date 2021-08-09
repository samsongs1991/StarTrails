import { RECEIVE_USER_DETAIL } from "../actions/user_detail_actions";

const UserDetailsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_USER_DETAILS:
            // when receiving many details
        case RECEIVE_USER_DETAIL:
            return Object.assign({}, oldState, { [action.userDetail.userId]: action.userDetail }); 
            // above action.userDetail.userId may be incorrect !!!!!!!
        default:
            return oldState;
    }
}

export default UserDetailsReducer;