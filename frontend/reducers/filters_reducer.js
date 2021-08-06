import { RECEIVE_FILTERS } from "../actions/filter_actions";

const defaultFilters = Object.freeze({
    bounds: { northEast: "", southWest: "" }, 
    difficulty: { easy: false, moderate: false, hard: false }, 
    length: { min: "", max: "" },
    gain: { min: "", max: "" },
    time: { 
        min: { hrs: "", mins: "" }, 
        max: { hrs: "", mins: "" }
    },
    category: { loop: false, outAndBack: false, pointToPoint: false },
    rating: 0
})

const FiltersReducer = (oldState = defaultFilters, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_FILTERS: 
            let newState = Object.assign({}, oldState);
            for(let filter in action.filters) {
                newState[filter] = action.filters[filter];
            }
            return newState;
        default:
            return oldState;
    }
}

export default FiltersReducer;