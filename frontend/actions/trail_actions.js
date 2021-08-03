import * as TrailApiUtils from "../util/trail_api_util";

export const RECEIVE_TRAILS = "RECEIVE_TRAILS";
const receiveTrails = (trails) => ({
    type: RECEIVE_TRAILS, 
    trails
})

// -------------------------------------------------

export const fetchTrails = () => dispatch => (
    TrailApiUtils.fetchTrails()
        .then(trails => dispatch(receiveTrails(trails)))
)