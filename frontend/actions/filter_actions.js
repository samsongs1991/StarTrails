import { fetchTrails } from "./trail_actions"; 

export const RECEIVE_FILTER = "RECEIVE_FILTER";
export const receiveFilter = filter => ({
    type: RECEIVE_FILTER, 
    filter
// filter = {
//     bounds: {
//         northEast: { lat: #, lng: # }, 
//         southWest: { lat: #, lng: # }
//     }
// }
// filter object with the key of bounds will be
// passed to the reducer
})



// in updateFilter
// everytime the map is idle the bounds will be
// passed into updateFilter as the argument
// shape of filter is ...
// filter = {
//     bounds: {
//         northEast: { lat: #, lng: # }, 
//         southWest: { lat: #, lng: # }
//     }
// }
export const updateFilter = filter => dispatch => {
    // dispatching receiveFilter will update the local store
    // with the current bounds info
    dispatch(receiveFilter(filter));
    // calling fetchTrails will make ajax request
    // with filters and get filtered trails 
    // fetchTrails will auto update the 
    // local store's index to reflect the 
    // filtered trails
    return dispatch(fetchTrails(filter));
}