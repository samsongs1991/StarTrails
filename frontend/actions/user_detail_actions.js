import * as UserDetailApiUtils from "../util/user_detail_api_util";

export const RECEIVE_USER_DETAIL = "RECEIVE_USER_DETAIL";
const receiveUserDetail = userDetail => ({
    type: RECEIVE_USER_DETAIL, 
    userDetail
})

export const fetchUserDetail = userId => dispatch => {
    UserDetailApiUtils.fetchUserDetail(userId)
        .then(userDetail => dispatch(receiveUserDetail(userDetail)))
}

export const updateUserDetail = userDetail => dispatch => {
    UserDetailApiUtils.updateUserDetail(userDetail)
        .then(userDetail => dispatch(receiveUserDetail(userDetail)))
}