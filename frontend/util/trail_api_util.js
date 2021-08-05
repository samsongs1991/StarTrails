export const fetchTrails = filters => (
    $.ajax({
        url: "/api/trails", 
        method: "GET",
        data: filters
        // DB request --> fetchTrails(argument)
        // filters = {
        //     bounds: {
        //         northEast: { lat: #, lng: # }, 
        //         southWest: { lat: #, lng: # }
        //     }
        // }
    })
)

export const fetchTrail = trailId => (
    $.ajax({
        url: `/api/trails/${trailId}`, 
        method: "GET"
    })
)

export const createTrail = trail => (
    $.ajax({
        url: "/api/trails", 
        method: "POST", 
        data: { trail }
    })
)
