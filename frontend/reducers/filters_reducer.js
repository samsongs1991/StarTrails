import { RECEIVE_FILTER } from "../actions/filter_actions";

const defaultFilters = Object.freeze({
    bounds: { northEast, southWest }
})

const FiltersReducer = (oldState = defaultFilters, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_FILTER: 
            return action.filter;
        default:
            return oldState;
    }
}

export default FiltersReducer;