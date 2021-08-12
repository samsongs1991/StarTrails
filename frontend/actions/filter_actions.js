import { fetchTrails } from "./trail_actions"; 

export const RECEIVE_FILTERS = "RECEIVE_FILTERS";
const receiveFilters = filters => ({
    type: RECEIVE_FILTERS, 
    filters
})

export const updateFilters = filters => dispatch => {
    dispatch(receiveFilters(filters));
    return dispatch(fetchTrails(filters));
}