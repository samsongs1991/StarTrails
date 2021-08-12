import { RECEIVE_LIST_TRAIL_RELATION, RECEIVE_LIST_TRAIL_RELATIONS, REMOVE_LIST_TRAIL_RELATION } from "../actions/list_trail_actions";

const ListsTrailsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_LIST_TRAIL_RELATIONS:
            return Object.assign({}, oldState, action.listTrailRelations);
        case RECEIVE_LIST_TRAIL_RELATION:
            return Object.assign({}, oldState, { [action.listTrailRelation.id]: action.listTrailRelation });
        case REMOVE_LIST_TRAIL_RELATION:
            let newState = Object.assign({}, oldState);
            delete newState[action.listTrailRelationId];
            return newState;
        default:
            return oldState;
    }
}

export default ListsTrailsReducer;