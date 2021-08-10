export const fetchLists = userId => (
    $.ajax({
        url: "/api/lists", 
        method: "GET", 
        data: userId
    })
)

export const fetchList = listId => (
    $.ajax({
        url: `/api/lists/${listId}`, 
        method: "GET"
    })
)

export const createList = list => (
    $.ajax({
        url: "/api/lists", 
        method: "POST", 
        data: { list }
    })
)

export const updateList = list => (
    $.ajax({
        url: `/api/lists/${listId}`, 
        method: "PATCH", 
        data: { list }
    })
)