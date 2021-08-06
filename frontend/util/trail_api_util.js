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
        //     },
        //     difficulty: { easy: false, moderate: false, hard: false }, 
        //     length: { min: "", max: "" },
        //     gain: { min: "", max: "" },
        //     time: { 
        //         min: { hrs: "", mins: "" }, 
        //         max: { hrs: "", mins: "" }
        //     },
        //     category: { loop: false, outAndBack: false, pointToPoint: false },
        //     rating: 0
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
