import * as UserApiUtils from "../util/user_api_util";

export const RECEIVE_USERS = "RECEIVE_USERS";
const receiveUsers = users => ({
    type: RECEIVE_USERS, 
    users
})

export const fetchUsers = () => dispatch => {
    UserApiUtils.fetchUsers()
        .then(users => dispatch(receiveUsers(users)))
}



export const RECEIVE_USER = "RECEIVE_USER";
const receiveUser = user => ({
    type: RECEIVE_USER, 
    user
})

export const fetchUser = userId => dispatch => {
    UserApiUtils.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
}



export const updateUser = user => dispatch => {
    UserApiUtils.updateUser(user)
        .then(user => dispatch(receiveUser(user)))
}



export const REMOVE_USER = "REMOVE_USER";
const removeUser = userId => ({
    type: REMOVE_USER, 
    userId
})

export const destroyUser = userId => dispatch => {
    UserApiUtils.destroyUser(userId)
        .then(user => dispatch(removeUser(user.id)))
}