// import * as ListTrailApiUtils from "../util/list_trail_api_util";

// export const RECEIVE_LIST_TRAIL_RELATIONS = "RECEIVE_LIST_TRAIL_RELATIONS";
// const receiveListTrailRelations = listTrailRelations => ({
//     type: RECEIVE_LIST_TRAIL_RELATIONS, 
//     listTrailRelations
// })

// export const RECEIVE_LIST_TRAIL_RELATION = "RECEIVE_LIST_TRAIL_RELATION";
// export const receiveListTrailRelation = listTrailRelation => ({
//     type: RECEIVE_LIST_TRAIL_RELATION, 
//     listTrailRelation
// })

// export const REMOVE_LIST_TRAIL_RELATION = "REMOVE_LIST_TRAIL_RELATION";
// const removeListTrailRelation = listTrailRelationId => ({
//     type: REMOVE_LIST_TRAIL_RELATION, 
//     listTrailRelationId
// })

// // -------------------------------------------------

// export const fetchListTrailRelation = listTrailRelationId => dispatch => (
//     ListTrailApiUtils.fetchListTrailRelation(listTrailRelationId)
//         .then(listTrailRelation => dispatch(receiveListTrailRelation(listTrailRelation)))
// )

// export const fetchListTrailRelations = listId => dispatch => (
//     ListTrailApiUtils.fetchListTrailRelations(listId)
//         .then(listTrailRelations => dispatch(receiveListTrailRelations(listTrailRelations)))
// )

// export const createListTrailRelation = (listId, trailId) => dispatch => (
//     ListTrailApiUtils.createListTrailRelation(listId, trailId) 
//         .then(listTrailRelation => dispatch(receiveListTrailRelation(listTrailRelation)))
// )

// export const destroyListTrailRelation = listTrailRelationId => dispatch => (
//     ListTrailApiUtils.destroyListTrailRelation(listTrailRelationId)
//         .then(listTrailRelation => dispatch(removeListTrailRelation(listTrailRelation.id)))
// )