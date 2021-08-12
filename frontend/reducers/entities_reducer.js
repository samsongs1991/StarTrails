import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import TrailsReducer from "./trails_reducer";
import ListsReducer from "./lists_reducer";

const EntitiesReducer = combineReducers({
    users: UsersReducer, 
    trails: TrailsReducer, 
    lists: ListsReducer
});

export default EntitiesReducer;