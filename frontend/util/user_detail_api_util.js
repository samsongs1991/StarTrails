export const fetchUserDetail = userId => (
    $.ajax({
        url: `/api/user_details/${userId}`,
        method: "GET"
    })
)

export const updateUserDetail = userDetail => (
    $.ajax({
        url: `/api/user_details/${userDetail.userId}`, 
        // above interpolated key may be inaccurate !!!!!!!!!!!
        
        method: "PATCH"
    })
)