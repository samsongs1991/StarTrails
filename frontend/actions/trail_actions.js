import * as TrailApiUtils from "../util/trail_api_util";

export const RECEIVE_TRAILS = "RECEIVE_TRAILS";
const receiveTrails = trails => ({
    type: RECEIVE_TRAILS, 
    trails
})

export const RECEIVE_TRAIL = "RECEIVE_TRAIL";
const receiveTrail = trail => ({
    type: RECEIVE_TRAIL, 
    trail
})

// -------------------------------------------------

export const fetchTrails = () => dispatch => (
    TrailApiUtils.fetchTrails()
        .then(trails => dispatch(receiveTrails(trails)))
)

export const fetchTrail = trailId => dispatch => (
    TrailApiUtils.fetchTrail(trailId)
        .then(trail => dispatch(receiveTrail(trail)))
)

