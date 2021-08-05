import { RECEIVE_FILTER } from "../actions/filter_actions";

const FilterReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_FILTER: 
            return action.filter;
        default:
            return oldState;
    }
}

export default FilterReducer;