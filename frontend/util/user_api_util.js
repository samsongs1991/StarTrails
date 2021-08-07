export const fetchUsers = () => (
    $.ajax({
        url: "/api/users", 
        method: "GET"
    })
)

export const fetchUser = userId => (
    $.ajax({
        url: `/api/users/${userId}`, 
        method: "GET"
    })
)

// backend still needs to be done
// must format the returning data from the DB
// using jbuilder