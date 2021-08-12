import { RECEIVE_LISTS, RECEIVE_LIST, REMOVE_LIST } from "../actions/list_actions";
import { RECEIVE_LIST_TRAIL_RELATION, REMOVE_LIST_TRAIL_RELATION } from "../actions/list_trail_actions";

const ListsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_LISTS:
            return action.lists; 
        case RECEIVE_LIST:
            return Object.assign({}, oldState, { [action.list.id]: action.list });
        case REMOVE_LIST:
            delete newState[action.listId];
            return newState;
        case RECEIVE_LIST_TRAIL_RELATION:
                newState[action.listTrailRelation.list_id].listTrailRelations[action.listTrailRelation.id] = action.listTrailRelation;
                newState[action.listTrailRelation.list_id].trails[action.listTrailRelation.trail_id] = {id: action.listTrailRelation.trail_id};
            return newState;
        case REMOVE_LIST_TRAIL_RELATION:
            delete newState[action.listTrailRelation.list_id].listTrailRelations[action.listTrailRelation.id];
            delete newState[action.listTrailRelation.list_id].trails[action.listTrailRelation.trail_id];
            return newState;
        default:
            return oldState;
    }
}

export default ListsReducer;