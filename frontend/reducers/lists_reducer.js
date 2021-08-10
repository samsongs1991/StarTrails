import { RECEIVE_LISTS, RECEIVE_LIST, REMOVE_LIST } from "../actions/list_actions";

const ListsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_LISTS:
            return action.lists; 
        case RECEIVE_LIST:
            return Object.assign({}, oldState, { [action.list.id]: action.list });
        case REMOVE_LIST:
            let newState = Object.assign({}, oldState);
            delete newState[action.listId];
            return newState;
        default:
            return oldState;
    }
}

export default ListsReducer;