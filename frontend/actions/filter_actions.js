import { fetchTrails } from "./trail_actions"; 

export const RECEIVE_FILTERS = "RECEIVE_FILTERS";
const receiveFilters = filters => ({
    type: RECEIVE_FILTERS, 
    filters
// filters = {
//     bounds: {
//         northEast: { lat: #, lng: # }, 
//         southWest: { lat: #, lng: # }
//     }, 
//     difficulty: { easy: false, moderate: false, hard: false }, 
//     length: { min: "", max: "" },
//     gain: { min: "", max: "" },
//     time: { 
//          min: { hrs: "", mins: "" }, 
//          max: { hrs: "", mins: "" }
//     },
//     category: { loop: false, outAndBack: false, pointToPoint: false },
//     rating: 0
// }
// filters object will be
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
export const updateFilters = filters => dispatch => {
    // dispatching receiveFilter will update the local store
    // with the current bounds info
    dispatch(receiveFilters(filters));
    // calling fetchTrails will make ajax request
    // with filters and get filtered trails 
    // fetchTrails will auto update the 
    // local store's index to reflect the 
    // filtered trails
    return dispatch(fetchTrails(filters));
}