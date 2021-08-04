export const fetchTrails = () => (
    $.ajax({
        url: "/api/trails", 
        method: "GET"
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
