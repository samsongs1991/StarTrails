import { RECEIVE_TRAILS, RECEIVE_TRAIL } from "../actions/trail_actions";

const TrailsReducer = (oldState={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_TRAILS:
            return action.trails; 
        case RECEIVE_TRAIL: 
            return Object.assign({}, oldState, { [action.trail.id]: action.trail });
        default:
            return oldState;
    }
}

export default TrailsReducer;