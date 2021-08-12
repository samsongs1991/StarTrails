export const fetchListTrailRelation = listTrailRelationId => dispatch => (
    $.ajax({
        url: `/api/lists_trails/${listTrailRelationId}`, 
        method: "GET"
    })
)

export const fetchListTrailRelations = listId => dispatch => (
    $.ajax({
        url: `/api/lists_trails`, 
        method: "GET"
    })
)

export const createListTrailRelation = (list_id, trail_id) => (
    $.ajax({
        url: "/api/lists_trails", 
        method: "POST", 
        data: { list_trail: { list_id, trail_id } }
    })
)

export const destroyListTrailRelation = listTrailRelationId => (
    $.ajax({
        url: `/api/lists_trails/${listTrailRelationId}`, 
        method: "DELETE"
    })
)