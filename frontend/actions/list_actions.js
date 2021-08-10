import * as ListApiUtils from "../util/list_api_util";

export const RECEIVE_LIST = "RECEIVE_LIST";
export const receiveList = list => ({
    type: RECEIVE_LIST, 
    list
})

export const RECEIVE_LISTS = "RECEIVE_LISTS";
const receiveLists = lists => ({
    type: RECEIVE_LISTS, 
    lists
})

export const REMOVE_LIST = "REMOVE_LIST";
const removeList = listId => ({
    type: REMOVE_LIST, 
    listId
})

// -------------------------------------------------

export const fetchList = listId => dispatch => (
    ListApiUtils.fetchList(listId)
        .then(list => dispatch(receiveList(list)))
)

export const fetchLists = userId => dispatch => (
    ListApiUtils.fetchLists(userId)
        .then(lists => dispatch(receiveLists(lists)))
)

export const updateList = list => dispatch => (
    ListApiUtils.updateList(list)
        .then(list => dispatch(receiveList(list)))
)

export const createList = list => dispatch => (
    ListApiUtils.createList(list) 
        .then(list => dispatch(receiveList(list)))
)

export const destroyList = listId => dispatch => (
    ListApiUtils.destroyList(listId)
        .then(list => dispatch(removeList(list.id)))
)